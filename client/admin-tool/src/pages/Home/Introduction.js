import React from "react";
import { Snackbar } from "@material-ui/core";

import Stepper from "../../components/Stepper";
import SectionItem from "../../components/SectionItem";
import SectionPopover from "../../components/SectionPopover";

import {
    fetchSectionsForPage,
    addSection,
    deleteSection,
    updateSection,
} from "../../util/requests/Home/Introduction";

import "../../css/Introduction.css";

const PAGE = "Home";

export default function Introduction() {
    const [sections, setSections] = React.useState([]);
    const [currentIndex, setIndex] = React.useState(-1);
    const [isPageLoading, setIsPageLoading] = React.useState(true);

    // display any error messages to user
    const [snackbar, handleSnackBar] = React.useState({
        open: false, // whether to show message
        message: "", // what message to show
    });

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

    const refreshSections = async () => {
        setIsPageLoading(true);
        const data = await fetchSectionsForPage(PAGE);
        setSections(data);
        setIndex(-1);
        setIsPageLoading(false);
    };

    const handleDeleteSection = async () => {

        const isSuccessful = await deleteSection(sections[currentIndex]["id"]);
        if (isSuccessful) {
            handleSnackBar({open: true, message: "Section successfully deleted"});
            await refreshSections();
        }
        else handleSnackBar({open: true, message: "Error: Section Could Not Be Deleted"});
    };

    const handleUpdateSection = async (data) => {
        const id =  sections[currentIndex]["id"];
        const isSuccessful = await updateSection(id, data);
        if (isSuccessful) {

            await refreshSections();
            handleSnackBar({open: true, message: "Section successfully updated"});

        }
        else handleSnackBar({open: true, message: "Error: Section Could Not Be Updated"});
    };

    const handleAddSection = async (data) => {
        data["page"] = PAGE;
        const isSuccessful = await addSection(data);
        if (isSuccessful) {
            handleSnackBar({open: true, message: "Section successfully added"});
            window.location.reload();
        }
        else handleSnackBar({open: true, message: "Error: Section Could Not Be Added"});
    };

    React.useEffect(async () => {
        await refreshSections();
    }, []);

    // formats datetime string into MM/DD/YYYY format
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    if (isPageLoading) {
        <div className="sections-main-wrapper">
            <h1> Sections </h1>
        </div>;
    }
    return (
        <div className="sections-main-wrapper">
            <div className="section-top-header">
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}> 

                    <h1> Sections </h1>
                    &nbsp; 
                    <SectionPopover>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                        <b> Borders </b>
                        <div style={{display: "flex", flexDirection: "row"}}>
                                <hr style={{backgroundColor: "var(--darkorange)", border: "none", height: "3px", width: "40px"}}/>
                                &nbsp; = &nbsp;
                                Draft
                            </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <hr style={{backgroundColor: "black", border: "none", height: "3px", width: "40px"}}/>
                                &nbsp; = &nbsp;
                                Published
                            </div>
                    </div>
                </SectionPopover>

                </div>
                {currentIndex > -1 ? (
                    <div style={{ fontStyle: "italic" }}>
                        Uploaded on {formatDate(sections[currentIndex]["createdAt"])}
                        <br />
                        Last Edited on {formatDate(sections[currentIndex]["updatedAt"])}
                    </div>
                ) : <h3> Add New Section </h3>}
            </div>
            <div className="sections-container">
                <Stepper
                    displayItems={sections}
                    handleNodeClick={handleNodeClick}
                    handleAddNodeClick={addNewNode}
                    formatNodeTitle={formatNodeTitle}
                    addSpecialNodeClass={addSpecialNodeClass}
                />

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
                            newSection={true}
                            content={{ content: "<p></p>" }}
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
