/**
 * This is the parent component, that is responsible for formatting a given 'Section' page - inclusive
 * of a Stepper on the left, and all SectionItem objects on the right. It manages callbacks and section tracking
 * for any actions done on this page, making heavy usage of React states. Utilizing props, it populates and updates
 * the page as needed.
 *
 * This is used in conjunction with SectionItem, which is responsible for
 * rendering a single section item.
 *
 * @summary Renders Section Page
 * @author  Amrit Singh
 */

import React from "react";
import { Snackbar } from "@material-ui/core";

import Stepper from "../Stepper";
import SectionItem from "./SectionItem";
import SectionPopover from "../PopOver";
import Loader from "../Loader";
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";

import "../../css/SectionWrapper.css";

/**
 * All params are required
 * @param {string} PAGE - Required for any backend requests, as it denotes the page in the Sections DB all components will affect
 * @param {string} pageTitle - The title of the page, for user readability
 * @param {function} addItemRequestCallback - Callback whenever the user wants to add a new section
 * @param {function} deleteItemRequestCallback - Callback whenever the user wants to delete an existing section
 * @param {function} updateItemRequestCallback - Callback whenever the user wants to update an existing section
 * @param {function} getItemsRequestCallback - Callback whenever the user wants to retrieve all sections
 *
 * @returns
 */
export default function SectionWrapper({
    PAGE,
    pageTitle,
    addItemRequestCallback,
    deleteItemRequestCallback,
    updateItemRequestCallback,
    getItemsRequestCallback,
}) {
    /** React States */
    const [sections, setSections] = React.useState([]); // array of JSON objects, denoting sections
    const [currentIndex, setIndex] = React.useState(-1); // tracks current section being looked at via index, -1 indicates "Add New" button
    const [isPageLoading, setIsPageLoading] = React.useState(true);

    // display any error messages to user
    const [snackbar, handleSnackBar] = React.useState({
        open: false, // whether to show message
        message: "", // what message to show
    });

    /** Functions */

    const refreshSections = async () => {
        setIsPageLoading(true);
        const data = await getItemsRequestCallback(PAGE);
        data.forEach((item) => {
            const blocksFromHtml = htmlToDraft(item.content);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            // update the editor state
            const setEditorState = EditorState.createWithContent(contentState);
            item.content = setEditorState;
        });
        setSections(data);
        setIndex(-1);
        setIsPageLoading(false);
    };

    const handleDeleteSection = async () => {
        const isSuccessful = await deleteItemRequestCallback(sections[currentIndex]["id"]);
        if (isSuccessful) {
            handleSnackBar({ open: true, message: "Section successfully deleted" });
            await refreshSections();
        } else handleSnackBar({ open: true, message: "Error: Section Could Not Be Deleted" });
    };

    const handleUpdateSection = async (data) => {
        const isSuccessful = await updateItemRequestCallback(sections[currentIndex]["id"], data);
        if (isSuccessful) {
            await refreshSections();
            handleSnackBar({ open: true, message: "Section successfully updated" });
        } else handleSnackBar({ open: true, message: "Error: Section Could Not Be Updated" });
    };

    const handleAddSection = async (data) => {
        data["page"] = PAGE;
        const isSuccessful = await addItemRequestCallback(data);
        if (isSuccessful) {
            handleSnackBar({ open: true, message: "Section successfully added" });
            window.location.reload();
        } else handleSnackBar({ open: true, message: "Error: Section Could Not Be Added" });
    };

    /** Initialization */

    React.useEffect(async () => {
        await refreshSections();
    }, []);

    /** Stepper Info */

    const handleNodeClick = (index) => {
        setIndex(index);
    };

    const addNewNode = () => {
        setIndex(-1);
    };

    const formatNodeTitle = (section) => section.title;

    const addSpecialNodeClass = (section) => {
        if (!section.isPublished) return "orange-border";
        return "";
    };

    /** Stlye/Formatting */

    // formats datetime string into MM/DD/YYYY format
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    // special layout for when the page is loading data
    if (isPageLoading) {
        return(
            <div className="section-loader" 
                style={
                    {
                        height: "100vh",
                        width: "100vw",
                        display: "grid",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }
            >
                <Loader />
            </div>
        )
    }
    return (
        <div className="sections-main-wrapper">
            {/* Header - Above Stepper/SectionItem */}
            <div className="section-top-header">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* Page Title */}
                    <h1> {pageTitle} </h1>
                    &nbsp;
                    {/* Info Icon for Borders */}
                    <SectionPopover>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <b> Borders </b>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <hr
                                    style={{
                                        backgroundColor: "var(--darkorange)",
                                        border: "none",
                                        height: "3px",
                                        width: "40px",
                                    }}
                                />
                                &nbsp; = &nbsp; Draft
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <hr
                                    style={{
                                        backgroundColor: "black",
                                        border: "none",
                                        height: "3px",
                                        width: "40px",
                                    }}
                                />
                                &nbsp; = &nbsp; Published
                            </div>
                        </div>
                    </SectionPopover>
                </div>
                {/* Right Side - Text */}
                {currentIndex > -1 && sections.length < currentIndex ? (
                    <div style={{ fontStyle: "italic" }}>
                        Uploaded on {formatDate(sections[currentIndex]["createdAt"])}
                        <br />
                        Last Edited on {formatDate(sections[currentIndex]["updatedAt"])}
                    </div>
                ) : (
                    <h3> Add New Section </h3>
                )}
            </div>
            <div className="sections-container">
                {/* Stepper */}
                <Stepper
                    displayItems={sections}
                    handleNodeClick={handleNodeClick}
                    handleAddNodeClick={addNewNode}
                    formatNodeTitle={formatNodeTitle}
                    addSpecialNodeClass={addSpecialNodeClass}
                />

                {/* Section Component Based on Index */}
                <div className="section-item-wrapper">
                    {currentIndex > -1 ? (
                        // update section
                        <SectionItem
                            i={currentIndex}
                            newSection={false}
                            content={sections[currentIndex]}
                            onDeleteCallback={handleDeleteSection}
                            onSaveCallback={handleUpdateSection}
                        />
                    ) : (
                        // add new section
                        <SectionItem
                            i={currentIndex}
                            newSection
                            content={{ content: EditorState.createEmpty() }}
                            onSaveCallback={handleAddSection}
                        />
                    )}
                </div>
            </div>
            {/* Snackbar for Error Displays & Messages */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackBar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    );
}
