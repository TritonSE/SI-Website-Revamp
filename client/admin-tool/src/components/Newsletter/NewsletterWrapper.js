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
    const [index, setIndex] = React.useState(-1);
    const [newsletters, setNewsletters] = React.useState([]);
    const [snackbar, setSnackbar] = React.useState({
        open: false,
        message: "",
    });

    const loadData = async () => {
        setIsLoading(true);
        const data = await fetchNewsletters();
        setNewsletters(data);
        setIndex(-1);
        setIsLoading(false);

        console.log(newsletters);
    }

    React.useEffect(async () => {
        await loadData();
    }, [])

    const handleNodeClick = (ind) => {
        setIndex(ind);
        const newsletter = newsletters[ind];
    };

    const formatNodeTitle = (newsletter) => `Volume ${newsletter.volume}, ${newsletter.year}`;

    const addNewNode = () => {
        setIndex(-1);
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
                    <NewsletterItem />
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