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
        startYear: "",
        endYear: "",
        data: [{
            startYear: "",
            endYear: "",
            rank: "",
            name: "",
            position: "",
            bio: "",
            imageLink: "",
            redirectLink: "",
            openInSameTab: false,
        }]
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
        setCommitteeYear({startYear: "", endYear: ""})

        console.log(committees)
    };

    const handleDeleteCommittee = async () => {
        let isSuccessful = false;

        for(let i = 0; i < committees[currentIndex].data.length; i++) {
            isSuccessful = await deleteItemRequestCallback(committees[currentIndex].data[i]["id"]);
        }

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Committee successfully deleted"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Committee could not be deleted"});
    };

    const handleDeleteMember = async (index) => {
        const isSuccessful = await deleteItemRequestCallback(committees[currentIndex].data[index]["id"]);

        if(isSuccessful) {
            handleSnackbar({open: true, message: "Member successfully deleted"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Member could not be deleted"});
    };

    const handleUpdateCommittee = async (data, index) => {
        const dataObj = {
            startYear: parseInt(data.startYear),
            endYear: parseInt(data.endYear),
            rank: data.rank,
            name: data.name,
            position: data.position,
            bio: data.bio,
            imageLink: data.imageLink,
            redirectLink: data.redirectLink,
            openInSameTab: data.openInSameTab
        }

        const isSuccessful = await updateItemRequestCallback(committees[currentIndex].data[index]["id"], dataObj);

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
            handleSnackbar({open: true, message: "Committee/member successfully added"});
            await loadData();
        } else handleSnackbar({open: true, message: "Error: Committee/member could not be added"});
    };

    React.useEffect(async () => {
        await loadData();
    }, [])

    React.useEffect(async () => {
        if(currentIndex > -1) {
            setCommitteeYear({startYear: committees[currentIndex].data[0]["startYear"], endYear: committees[currentIndex].data[0]["endYear"]})
        }
        else {
            setCommitteeYear({startYear: "", endYear: ""});
        }
    }, [currentIndex])

    React.useEffect(async () => {
        if(currentIndex > -1) {
            for(let i = 0; i < committees[currentIndex].data.length; i++) {
                let committeeCopy = {
                    startYear: parseInt(committeeYear.startYear),
                    endYear: parseInt(committeeYear.endYear),
                    rank: committees[currentIndex].data[i].rank,
                    name: committees[currentIndex].data[i].name,
                    position: committees[currentIndex].data[i].position,
                    bio: committees[currentIndex].data[i].bio,
                    imageLink: committees[currentIndex].data[i].imageLink,
                    redirectLink: committees[currentIndex].data[i].redirectLink,
                    openInSameTab: committees[currentIndex].data[i].openInSameTab
                }

                await updateItemRequestCallback(committees[currentIndex].data[i]["id"], committeeCopy);
            }
        }
    }, [committeeYear])

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
        if(committeeYear.startYear === undefined || committeeYear.endYear === undefined || committeeYear.startYear === "" || committeeYear.endYear === "") {
            handleSnackbar({open: true, message: "\"Years Active\" must be set before members can be added"})
        }
        else {
            setAddExecutiveShowing(true);
            setNewCommittee(newCommittee);
            setSelectedIndex(index);

            if(member !== null) setSelectedMember(member);
            else setSelectedMember(execTemplate);
        }
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
                            clickExec={execMemberClick}
                            setCommitteeYear={setCommitteeYear}
                            handleDeleteCommittee={handleDeleteCommittee}
                        />
                    ) : (
                        <CommitteeItem
                            i={currentIndex}
                            newCommittee
                            content={yearTemplate}
                            clickExec={execMemberClick}
                            setCommitteeYear={setCommitteeYear}
                            handleAddCommittee={handleAddCommittee}
                        />
                    )}
                </div>
                <div className="exec-members-container">
                    {console.log(committees)}
                    {currentIndex > -1 ? (
                        committees[currentIndex].data.map((committee, index) => {
                            return (
                                <div>
                                    <ExecutiveMember     
                                        content={committee} 
                                        index={index}
                                        execMemberClick={execMemberClick}
                                        handleDeleteMember={handleDeleteMember}     
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