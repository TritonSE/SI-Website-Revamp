import React from "react";

import { Snackbar } from "@material-ui/core";
import Stepper from "../Stepper";
import CommitteeItem from "./CommitteeItem";
import Loader from "../Loader";
import AddExecutive from "./AddExecutive";

import ExecutiveMember from "./ExecutiveMember";

import "../../css/CommitteeWrapper.css";

export default function CommitteeWrapper({
    pageTitle,
    addItemRequestCallback,
    deleteItemRequestCallback,
    updateItemRequestCallback,
    getItemsRequestCallback,
}) {
    const execTemplate = {
        startYear: "",
        endYear: "",
        rank: "",
        name: "",
        position: "",
        bio: "",
        imageLink: "",
        redirectLink: "",
        openInSameTab: false,
    };

    const yearTemplate = {
        data: [
            {
                startYear: "",
                endyear: "",
            }
        ]
    }

    const [isLoading, setIsLoading] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);
    const [committees, setCommittees] = React.useState([]);
    const [title, setTitle] = React.useState(pageTitle);
    const [selectedMember, setSelectedMember] = React.useState({});
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [addExecutiveShowing, setAddExecutiveShowing] = React.useState(false);
    const [newCommittee, setNewCommittee] = React.useState(false);
    const [committeeYear, setCommitteeYear] = React.useState({
        startYear: -1,
        endYear: -1,
    })

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    const loadData = async () => {
        setIsLoading(true);
        const data = await getItemsRequestCallback();

        setSelectedMember({
            startYear: "",
            endYear: "",
            rank: "",
            name: "",
            position: "",
            bio: "",
            imageLink: "",
            redirectLink: "",
            openInSameTab: false,
        });

        setCommittees(data);
        setCurrentIndex(-1);
        setIsLoading(false);
    };

    const handleDeleteCommittee = async () => {
        const isSuccessful = await deleteItemRequestCallback(committees[currentIndex]["id"]);

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Committee successfully deleted"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Committee could not be deleted"});
    };

    const handleUpdateCommittee = async (data, index) => {
        const isSuccessful = await updateItemRequestCallback(committees[currentIndex].data[index]["id"], data);

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Committee successfully updated"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Committee could not be updated"});
    };

    const handleAddCommittee = async (data) => {
        console.log(data);

        const isSuccessful = await addItemRequestCallback(data);

        console.log(isSuccessful);

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Committee successfully added"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Committee could not be added"});
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

    const execMemberClick = (member, newCommittee, index) => {
        setAddExecutiveShowing(true);
        setNewCommittee(newCommittee);
        setSelectedIndex(index);

        if(member !== null) setSelectedMember(member);
        else setSelectedMember(execTemplate);
    }

    if(isLoading) {
        return (
            <div className="committees-loader">
                <Loader />
            </div>
        )
    }
    
    return (
        <div className="committees-container">
            {console.log(committeeYear)}
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
                        addButtonTitle="Add Committee"
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
                            clickExec={execMemberClick}
                            setCommitteeYear={setCommitteeYear}
                        />
                    ) : (
                        <CommitteeItem
                            i={currentIndex}
                            newCommittee
                            content={yearTemplate}
                            onSaveCallback={handleAddCommittee}
                            clickExec={execMemberClick}
                            setCommitteeYear={setCommitteeYear}
                        />
                    )}
                </div>
                <div className="exec-members-container">
                    {console.log(committees)}
                    {currentIndex > -1 ? (
                        committees[currentIndex].data.map((committee, index) => {
                            return (
                                <div onClick={() => execMemberClick(committee, false, index)}>
                                    <ExecutiveMember     
                                        content={committee}      
                                    />
                                </div>
                            )
                        })
                    ) : (
                        ""
                    )}
                </div>
            </section>

            {addExecutiveShowing ? (    
                <AddExecutive 
                    content={selectedMember}
                    showingBackground={setAddExecutiveShowing}
                    newCommittee={newCommittee}
                    updateItem={handleUpdateCommittee}
                    addItem={handleAddCommittee}
                    index={selectedIndex}
                    committeeYear={committeeYear}
                />
            ) : (
                ""
            )}

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={snackbar.message}
            />
        </div>        
    );
}