import React from "react";

import { Snackbar } from "@material-ui/core";
import Stepper from "../Stepper";
import CommitteeItem from "./CommitteeItem";
import Loader from "../Loader";

import "../../css/CommitteeWrapper.css";

export default function CommitteeWrapper({
    pageTitle,
    addItemRequestCallback,
    deleteItemRequestCallback,
    updateItemRequestCallback,
    getItemsRequestCallback,
}) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);
    const [committees, setCommittees] = React.useState([]);
    const [title, setTitle] = React.useState(pageTitle);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    const loadData = async () => {
        setIsLoading(true);
        const data = await getItemsRequestCallback();
        setCommittees(data);
        setCurrentIndex(-1);
        setIsLoading(false);
    };

    const handleDeleteCommittee = async () => {

    };

    const handleUpdateCommittee = async (data) => {
        
    };

    const handleAddCommittee = async (data) => {
        
    };

    React.useEffect(async () => {
        await loadData();
    }, [])

    const handleNodeClick = (index) => {
        setCurrentIndex(index);
    };

    const addNewNode = () => {
        setCurrentIndex(-1);
    };

    const formatNodeTitle = (committee) => `${committee.startYear} - ${committee.endYear}`;

    const handleSnackClose = () => {
        handleSnackbar({open: false});
    };

    if(isLoading) {
        return (
            <div className="committees-loader">
                <Loader />
            </div>
        )
    }
    
    return (
        <div className="committees-container">
            <section className="stepper-section">
                <div
                    className="stepper-section-div"
                    style={{
                        marginTop: 40,
                    }}
                >
                    <Stepper
                        displayItems={committees}
                        handleNodeClick={handleNodeClick}
                        addButtonTitle="Add Newsletter"
                        numItemsPerPage={12}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                    />
                </div>
            </section>

            <section className="committees-edit-section">
                <div className="committees-title">
                    <h1
                        style={{ fontSize: 40, fontWeight: 700, marginBottom: 10 }}
                        className="committees-title-h1"
                    >
                        {title}
                    </h1>
                </div>
                <div className="committee-item-container">
                    {currentIndex > -1 ? (
                        <CommitteeItem
                            i={currentIndex}
                            newCommittee={false}
                            content={committees[currentIndex]}
                            onDeleteCallback={handleDeleteCommittee}
                            onSaveCallback={handleUpdateCommittee}
                        />
                    ) : (
                        <CommitteeItem
                            i={currentIndex}
                            newCommittee
                            content={committees[currentIndex]}
                            onSaveCallback={handleAddCommittee}
                        />
                    )}
                </div>
            </section>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={snackbar.message}
            />
        </div>        
    );
}