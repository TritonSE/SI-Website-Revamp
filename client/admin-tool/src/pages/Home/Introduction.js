import React from "react";

import Stepper from "../../components/Stepper";
import SectionItem from "../../components/SectionItem";

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

    const handleNodeClick = (index) => {
        setIndex(index);
    };

    const addNewNode = () => {
        setIndex(-1);
    };

    const formatNodeTitle = (section) => section.title;

    const addSpecialNodeClass = (section) => {
        if (section.isPublished) return "orange-border";
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
            await refreshSections();
        }
    };

    const handleUpdateSection = async (data) => {
        const isSuccessful = await updateSection(sections[currentIndex]["id"], data);
        if (isSuccessful) await refreshSections();
    };

    const handleAddSection = async (data) => {
        data["page"] = PAGE;
        const isSuccessful = await addSection(data);
        if (isSuccessful) {
            await refreshSections();
        }
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
                <h1> Sections </h1>
                {currentIndex > -1 ? (
                    <div style={{ fontStyle: "italic" }}>
                        Uploaded on {formatDate(sections[currentIndex]["createdAt"])}
                        <br />
                        Last Edited on {formatDate(sections[currentIndex]["updatedAt"])}
                    </div>
                ) : null}
            </div>
            <div className="sections-container">
                <Stepper
                    displayItems={sections}
                    startingIndex={-1}
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
        </div>
    );
}
