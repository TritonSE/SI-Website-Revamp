import React from "react";
import {Snackbar} from "@material-ui/core";

import Stepper from "../Stepper";
import NewsletterItem from "./NewsletterItem";
import Loader from "../Loader";

import "../../css/NewsletterWrapper.css";

import {
    fetchNewsletters
} from "../../util/requests/Resources/Newsletters"

export default function NewsletterWrapper({
    pageTitle,
    addItemRequestCallback,
    deleteItemRequestCallback,
    updateItemRequestCallback,
    getItemsRequestCallback
}) {

    const [isLoading, setIsLoading] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);
    const [newsletters, setNewsletters] = React.useState([]);
    const [snackbar, setSnackbar] = React.useState({
        open: false,
        message: "",
    });

    const loadData = async () => {
        setIsLoading(true);
        const data = await fetchNewsletters();
        setNewsletters(data);
        setCurrentIndex(-1);
        setIsLoading(false);

        console.log(newsletters);
    };

    const handleDeleteNewsletter = async() => {
        const isSuccessful = await deleteItemRequestCallback(newsletters[currentIndex]["id"]);

        if(isSuccessful) {
            handleSnackBar({open: true, message: "Newsletter succesfully deleted"});
            await loadData();
        } else handleSnackBar({open: true, message: "Error: Newsletter could not be deleted"});
    }

    const handleUpdateNewsletter = async(data) => {
        const isSuccessful = await updateItemRequestCallback(newsletters[currentIndex]["id"], data);

        if(isSuccessful) {
            await loadData();
            handleSnackBar({open: true, message: "Newsletter succesfully updated"});
        } else handleSnackBar({open: true, message: "Error: Newsletter could not be updated"});
    }

    const handleAddNewsletter = async(data) => {
        const isSuccessful = await addItemRequestCallback(data);

        if(isSuccessful) {
            handleSnackBar({open: true, message: "Newsletter succesfully added"});
            window.location.reload();
        } else handleSnackBar({open: true, message: "Error: Newsletter could not be added"});
    }

    React.useEffect(async () => {
        await loadData();
    }, [])

    const handleNodeClick = (index) => {
        setCurrentIndex(index);
    };

    const addNewNode = () => {
        setCurrentIndex(-1);
    };

    const formatNodeTitle = (newsletter) => `Volume ${newsletter.volume}, ${newsletter.year}`;

    const addSpecialNodeClass = (newsletter) => {
        if(!newsletter.isPublished) return "orange-border";
        return "";
    };

    const handleSnackClose = () => {
        setSnackBar({ open: false });
    };

    const deleteButtonCallback = async () => {
    };

    if(isLoading) {
        return(
            <div>
                <Loader />
            </div>
        )
    }

    return(
        <div className = "newsletters-container">
            <section className = "stepper-section">
                <div className = "stepper-section-div">
                    <Stepper
                        displayItems={newsletters}
                        handleNodeClick={handleNodeClick}
                        addButtonTitle="Add Newsletter"
                        numItemsPerPage={12}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                    />
                </div>
            </section>
            
            <section className = "newsletters-edit-section">
                <div className = "newsletters-title">
                    <h1 className = "newsletters-title-h1">{pageTitle}</h1>
                </div>
                <div className = "newsletter-item-container">
                    {currentIndex > -1 ? (
                        <NewsletterItem 
                            i = {currentIndex}
                            newNewlsetter = {false}
                            content = {newsletters[currentIndex]}
                            onDeleteCallback = {handleDeleteNewsletter}
                            onSaveCallback = {handleUpdateNewsletter}
                        />
                    ) : (
                        <NewsletterItem
                            i = {currentIndex}
                            newSection
                            content = {{ content: "<p></p>" }}
                            onSaveCallback = {handleAddNewsletter}
                        />
                    )
                    }
                </div>
            </section>

            <section className = "post-buttons">
                <div className = "add-conference">

                </div>

                <div className = "delete-conference">

                </div>
            </section>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={snackbar.message}
            />
        </div>
    )
}