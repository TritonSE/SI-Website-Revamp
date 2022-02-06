import React from "react";
import {Snackbar} from "@material-ui/core";

import Stepper from "../Stepper";
import NewsletterItem from "./NewsletterItem";
import Loader from "../Loader";

import {
    fetchNewsletters
} from "../../util/requests/Resources/Newsletters"

import "../../css/NewsletterWrapper.css";

export default function NewsletterWrapper({
    pageTitle,
    addItemRequestCallback,
    deleteItemRequestCallback,
    updateItemRequestCallback,
    getItemsRequestCallback
}) {
    const newsletterTemplate = {
        volume: "",
        number: "",
        year: "",
        pdfLink: "",
        imageLink: ""
    }

    const [isLoading, setIsLoading] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);
    const [newsletters, setNewsletters] = React.useState([]);
    const [title, setTitle] = React.useState(pageTitle);

    const [snackbar, handleSnackbar] = React.useState({
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
            handleSnackbar({open: true, message: "Newsletter succesfully deleted"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Newsletter could not be deleted"});
    }

    const handleUpdateNewsletter = async(data) => {
        const isSuccessful = await updateItemRequestCallback(newsletters[currentIndex]["id"], data);

        if(isSuccessful) {
            await loadData();
            handleSnackbar({open: true, message: "Newsletter succesfully updated"});
        } else handleSnackbar({open: true, message: "Error: Newsletter could not be updated"});
    }

    const handleAddNewsletter = async(data) => {
        const isSuccessful = await addItemRequestCallback(data);

        console.log(isSuccessful);

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Newsletter succesfully added"});
            window.location.reload();
        } else handleSnackbar({open: true, message: "Error: Newsletter could not be added"});
    }

    React.useEffect(async () => {
        await loadData();
    }, [])

    React.useEffect(() => {
        if (currentIndex == -1) {
            setTitle("Add Newsletter")
        }
        else {
            setTitle("Edit Newsletter")
        }
    }, [currentIndex])

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
        handleSnackbar({ open: false });
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
                <div 
                    className = "stepper-section-div"
                    style = {{
                        marginTop: 40
                    }}>
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
                    <h1 style = {{ fontSize: 40, fontWeight: 700, marginBottom: 10 }} className = "newsletters-title-h1">
                        {title}
                    </h1>
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
                            newNewsletter
                            content = {newsletterTemplate}
                            onSaveCallback = {handleAddNewsletter}
                        />
                    )
                    }
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