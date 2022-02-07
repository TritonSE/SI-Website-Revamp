import React from "react";
import { Snackbar } from "@material-ui/core";

import Stepper from "../Stepper";
import EPublicationItem from "./EPublicationItem";
import Loader from "../Loader";

import "../../css/EPublicationWrapper.css";

export default function EPublicationWrapper({
    pageTitle,
    addItemRequestCallback,
    deleteItemRequestCallback,
    updateItemRequestCallback,
    getItemsRequestCallback,
}) {
    const ePublicationTemplate = {
        title: "",
        author: "",
        feature: false,
        description: "",
        imageLink: "",
        pdfLink: "",
    };

    const [isLoading, setIsLoading] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);
    const [ePublications, setEPublications] = React.useState([]);
    const [title, setTitle] = React.useState(pageTitle);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    const loadData = async () => {
        setIsLoading(true);
        const data = await getItemsRequestCallback();
        setEPublications(data);
        setCurrentIndex(-1);
        setIsLoading(false);
    }

    React.useEffect(async () => {
        await loadData();
    }, []);

    const handleNodeClick = (index) => {
        setCurrentIndex(index);
    };

    const addNewNode = () => {
        setCurrentIndex(-1);
    };

    const formatNodeTitle = (ePublication) => ePublication.title;

    const handleSnackClose = () => {
        handleSnackbar({ open: false });
    };

    if (isLoading) {
        return (
            <div className = "epublications-loader">
                <Loader />
            </div>
        )
    }

    return (
        <div className = "epublications-container">
            <section className = "stepper-section">
                <div 
                    className = "stepper-section-div"
                    style={{
                        marginTop: 0,
                        paddingTop: 40,
                    }}
                >
                    <Stepper
                        displayItems={ePublications}
                        handleNodeClick={handleNodeClick}
                        addButtonTitle="Add Newsletter"
                        numItemsPerPage={12}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                    />
                </div>
            </section>

            <section className="epublications-edit-section">
                <div className="epublications-title">
                <h1
                    style={{ fontSize: 40, fontWeight: 700, marginBottom: 10 }}
                    className="epublications-title-h1"
                >
                    {title}
                </h1>
                </div>
                <div className = "epublication-item-container">
                    {currentIndex > -1 ? (
                        <EPublicationItem
                            i={currentIndex}
                            newEPublication={false}
                            content={ePublications[currentIndex]}
                        />
                    ) : (
                        <EPublicationItem
                            i={currentIndex}
                            newEPublication
                            content={ePublications[currentIndex]}
                        />
                    )}
                </div>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={handleSnackClose}
                    message={snackbar.message}
                />
            </section>
        </div>
    )
}