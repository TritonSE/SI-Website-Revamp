import React from "react";
import {Snackbar} from "@material-ui/core";

import Stepper from "../Stepper";
import NewsletterItem from "./NewsletterItem";

import "../../css/NewsletterWrapper.css";

export default function NewsletterWrapper({
    pageTitle,
    addItemRequestCallback,
    deleteItemRequestCallback,
    updateItemRequestCallback,
    getItemsRequestCallback
}) {
    const [newsletters, setNewsletters] = React.useState([]);
    const [currentIndex, setIndex] = React.useState(-1);
    const [isPageLoading, setIsPageLoading] = React.useState(true);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    /** Functions */
    const refreshNewsletters = async () => {
        setIsPageLoading(true);
        const data = await getItemsRequestCallback();
        setNewsletters(data);
        setIndex(-1);
        setIsPageLoading(false);
    };

    const handleDeleteNewsletter = async () => {
        const isSuccessful = await deleteItemRequestCallback(newsletters[currentIndex]["id"]);
        if(isSuccessful) {
            handleSnackbar({ open: true, message: "Newsletter successfully deleted"});
            await refreshSections();
        } else handleSnackbar({ open: true, message: "Error: Section could not be deleted"})
    }

    const handleUpdateNewsletter = async (data) => {
        const isSuccessful = await updateItemRequestCallback(newsletters[currentIndex]["id"], data);
        if(isSuccessful) {
            handleSnackbar({ open: true, message: "Newsletter successfully updated"});
            await refreshSections();
        } else handleSnackbar({ open: true, message: "Error: Section could not be updated"})
    }

    const handleAddNewsletter = async (data) => {
        const isSuccessful = await addItemRequestCallback(newsletters[currentIndex]["id"], data);
        if(isSuccessful) {
            handleSnackbar({ open: true, message: "Newsletter successfully added"});
            await refreshSections();
        } else handleSnackbar({ open: true, message: "Error: Section could not be added"})
    }

    /** Initialization */

    React.useEffect(async () => {
        await refreshNewsletters();
    }, []);

    /** Stepper */

    const handleNodeClick = (index) => {
        setIndex(index);
    };

    const addNewNode = () => {
        setIndex(-1);
    };

    const formatNodeTitle = (newsletter) => newsletter.title;

    const addSpecialNodeClass = (newsletter) =>  {
        if(!newsletter.isPublished) return "orange-border";
        return "";
    };

    /** Formatting */

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    if (isPageLoading) {
        <div className = "newsletters-main-wrapper">
            <h1>Newsletters</h1>
        </div>
    }
    return (
        <div className = "newsletters-main-wrapper">
            <div className = "newsletters-top-header">
                <div 
                    style = {{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h1>{pageTitle}</h1>
                    &nbsp;
                </div>
                {currentIndex > -1 ? (
                    <div style = {{fontStyle: "italic"}}>
                        Uploaded on {formatDate(newsletters[currentIndex]["createdAt"])}
                        <br />
                        Last Edited on {formatDate(newsletters[currentIndex]["updatedAt"])}
                    </div>
                ) : (
                    <h3> Add New Newsletter  </h3>
                )}
            </div>
            <div className = "newsletters-container">
                <Stepper
                    displayItems = {newsletters}
                    handleNodeClick = {handleNodeClick}
                    handleAddNodeClick = {addNewNode}
                    formatNodeTitle = {formatNodeTitle}
                    addSpecialNodeClass = {addSpecialNodeClass}
                />

                <div className = "newsletter-item-wrapper">
                    {currentIndex > -1 ? (
                        <NewsletterItem
                            i = {currentIndex}
                            newNewsletter = {false}
                            content = {newsletters[currentIndex]}
                            onDeleteCallback = {handleDeleteNewsletter}
                            onSaveCallback = {handleUpdateNewsletter}
                        />
                    ) : (
                        <NewsletterItem
                            i = {currentIndex}
                            newNewsletter
                            content = {{ content: "<p></p>" }}
                            onSaveCallback = {handleAddNewsletter}
                        />
                    )}
                </div>
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackBar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    )
}