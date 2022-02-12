import React from "react";
import { Snackbar } from "@material-ui/core";

import Stepper from "../../Stepper";
import Loader from "../../Loader";

import BranchesChaptersItem from "./BranchesChaptersItem";

import "../../../css/BranchesChaptersWrapper.css";

export default function BranchesChaptersWrapper({
    pageTitle,
    deleteItemRequestCallback,
    addItemRequestCallback,
    updateItemRequestCallback,
    getItemsRequestCallback,
}) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);
    const [branchesChapters, setBranchesChapters] = React.useState([]);
    const [title, setTitle] = React.useState(pageTitle);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    const loadData = async () => {
        setIsLoading(true);
        const data = await getItemsRequestCallback();
        setBranchesChapters(data);
        setCurrentIndex(-1);
        setIsLoading(false);
    };

    const handleDeleteBranchesChapters = async () => {
        const isSuccessful = await deleteItemRequestCallback(branchesChapters[currentIndex]["id"]);

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Branch successfully deleted"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Branch could not be deleted"});
    }

    const handleAddBranchesChapters = async (data) => {
        const isSuccessful = await addItemRequestCallback(data);

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Branch successfully added"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Branch could not be added"});
    }

    const handleUpdateBranchesChapters = async (data) => {
        const isSuccessful = await updateItemRequestCallback(branchesChapters[currentIndex]["id"], data);

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Branch successfully updated"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Branch could not be updated"});
    }

    React.useEffect(async () => {
        await loadData();
    }, [])

    React.useEffect(() => {
        if(currentIndex === -1) {
            setTitle("Add Branch");
        } else {
            setTitle("Edit Branch");
        }
    }, [currentIndex]);

    const handleNodeClick = (index) => {
        setCurrentIndex(index);
    };

    const addNewNode = () => {
        setCurrentIndex(-1);
    };

    const formatNodeTitle = (branchChapter) => `${branchChapter.name}`;

    const handleSnackClose = () => {
        handleSnackbar({open: false});
    };

    if (isLoading) {
        return (
            <div className="branches-chapters-loader">
                <Loader />
            </div>
        );
    }

    return (
        <div className="branches-chapters-container">
            <section className="stepper-section">
                <div
                    className="stepper-section-div"
                    style={{
                        marginTop: 40,
                    }}
                >
                    <Stepper 
                        displayItems={branchesChapters}
                        handleNodeClick={handleNodeClick}
                        addButtonTitle="Add Branch/Chapter"
                        numItemsPerPage={12}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                    />
                </div>
            </section>

            <section className="branches-chapters-edit-section">
                <div className="branches-chapters-title">
                    <h1
                        style={{ fontSize: 40, fontWeight: 700, marginBottom: 10 }}
                        className="branches-chapters-title-h1"
                    >
                        {title}
                    </h1>
                </div>
                <div className="branches-chapters-item-container">
                    {currentIndex > -1 ? (
                        <BranchesChaptersItem
                            i={currentIndex}
                            newBranch={false}
                            content={branchesChapters[currentIndex]}
                            onDeleteCallback={handleDeleteBranchesChapters}
                            onSaveCallback={handleUpdateBranchesChapters}
                        />
                    ) : (
                        <BranchesChaptersItem
                            i={currentIndex}
                            newBranch
                            onSaveCallback={handleAddBranchesChapters}
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
    )
}