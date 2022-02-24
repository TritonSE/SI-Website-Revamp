import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import Loader from "../components/Loader";
import Stepper from "../components/Stepper";
import Theme from "../components/conferences/Theme";
import Overview from "../components/conferences/Overview";
import Button from "../components/Button";
import DeleteModal from "../components/DeleteModal";
import {
    getConferences,
    postConferences,
    putConference,
    deleteConference,
} from "../util/Conferences";

import "../css/Conferences.css";

const useStyles = makeStyles((theme) => ({
    form: {
        // input field - general layout
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },

        // default rendering of field
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            borderRadius: "30px",
        },
        // on focus rendering of field
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6652a0",
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#d77a3d",
        },
        // on error rendering of field
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
        },
    },
    resizeTitle: {
        fontSize: "36px",
        fontFamily: "Libre Baskerville",
    },
    resizeDetails: {
        fontSize: "18px",
        fontFamily: "Nunito",
        padding: "5px 15px",
    },
}));

export default function Conferences() {
    const conferenceTemplate = {
        title: { value: "", error: false },
        confNum: { value: "", error: false },
        location: { value: "", error: false },
        brochures: { value: { data: [] }, error: false },
        slideShowImages: { value: { urls: [] }, error: false },
        programs: { value: { data: [] }, error: false },
        presentations: { value: { data: [] }, error: false },
        abstracts: { value: { data: [] }, error: false },
        video: { value: "", error: false },
        theme: { value: "", error: false },
        signUpLink: { value: "", error: false },
        createdAt: { value: "" },
        updatedAt: { value: "" },
        id: { value: "" },
    };

    const classes = useStyles();
    const [title, setTitle] = useState("Add Conference");
    const [conferenceItem, setConferenceItem] = useState(conferenceTemplate);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(-1);
    const [conferences, setConferences] = useState([]);
    const [tab, setTab] = useState("theme");
    const [formDisabled, setformDisabled] = useState(false);
    const [modal, setModal] = useState(false);
    const [snackbar, setSnackBar] = useState({
        open: false,
        message: "",
    });

    const loadData = async () => {
        setLoading(true);
        const data = await getConferences();
        data.forEach((item) => {
            const blocksFromHtml = htmlToDraft(item.theme);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            // update the editor state
            const setEditorState = EditorState.createWithContent(contentState);
            item.theme = setEditorState;
        });
        setConferences(data);
        setIndex(-1);
        setLoading(false);
    };

    useEffect(async () => {
        await loadData();
    }, []);

    useEffect(() => {
        if (index === -1) {
            setConferenceItem(conferenceTemplate);
            setTitle("Add Conference");
        } else {
            setTitle("Edit Conference");
        }
    }, [index]);

    const handleNodeClick = (ind) => {
        setIndex(ind);
        const conference = conferences[ind];
        const updateConferenceItem = conferenceItem;
        Object.keys(conferenceItem).forEach((key) => {
            updateConferenceItem[key].value = conference[key];
        });
        setConferenceItem(updateConferenceItem);
    };

    const addNewNode = () => {
        setIndex(-1);
        setConferenceItem(conferenceTemplate);
    };

    /**
     * Convert the location string to a shorter location string if
     * it contains more than the format (city, state)
     *
     * @param {string} location - the location for the conference
     * @returns a string
     */
    const determineLocationLabel = (location) => {
        const splitLocation = location.split(",");
        if (splitLocation.length > 2) {
            splitLocation.shift();
        }

        return splitLocation.join(", ");
    };

    // formats datetime string into MM/DD/YYYY format
    const formatDate = (dateStr) => {
        const date = new Date(dateStr.value);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    const formatNodeTitle = (item) => `#${item.confNum} - ${determineLocationLabel(item.location)}`;

    const handleChange = (event) => {
        setConferenceItem({
            ...conferenceItem,
            [event.target.name]: {
                value: event.target.value,
            },
        });
    };

    const handleThemeChange = (item) => {
        setConferenceItem({
            ...conferenceItem,
            theme: {
                value: item,
            },
        });
    };

    const handleSnackClose = () => {
        setSnackBar({ open: false });
    };

    const deleteButtonCallback = async () => {
        const res = await deleteConference(conferenceItem.id.value);
        if (res) {
            await loadData();
            setModal(false);
        } else {
            setSnackBar({
                open: true,
                message: "An internal error occurred. Deletion did not work.",
            });
        }
    };

    const handleClose = () => setModal(false);

    const handleFormSubmit = async () => {
        if (formDisabled) return;

        // disable form to prevent spam requests
        setformDisabled(true);
        // display loading cursor
        document.body.style.cursor = "wait";

        const t = conferenceItem.title.value;
        const confNum = conferenceItem.confNum.value;
        const location = conferenceItem.location.value;
        const slideShowImages = conferenceItem.slideShowImages.value;

        if (t === "") conferenceItem.title.error = true;
        if (confNum === "") conferenceItem.confNum.error = true;
        if (location === "") conferenceItem.location.error = true;
        if (slideShowImages.urls.length === 0) conferenceItem.slideShowImages.error = true;

        // check to see if any required fields are empty
        if (
            conferenceItem.title.error ||
            conferenceItem.confNum.error ||
            conferenceItem.location.error ||
            conferenceItem.slideShowImages.error
        ) {
            setSnackBar({ open: true, message: "Missing required fields" });
            setformDisabled(false);
            document.body.style.cursor = null;
            return;
        }

        const data = {};
        Object.keys(conferenceItem).forEach((key) => {
            if (key === "theme") {
                data[key] = draftToHtml(
                    convertToRaw(conferenceItem[key].value.getCurrentContent())
                );
            } else if (key === "confNum") {
                data[key] = parseInt(conferenceItem[key].value, 10);
            } else data[key] = conferenceItem[key].value;
        });

        // makes the post request to backend here if successful clear all the values
        if (index >= 0) {
            const res = await putConference(data.id, data);
            if (res) {
                setSnackBar({
                    open: true,
                    message: "Updated Conference",
                });

                await loadData();
            } else {
                setSnackBar({
                    open: true,
                    message: "An internal error occurred. Conference not updated.",
                });
                setIndex(-1);
            }
        } else {
            const res = await postConferences(data);
            if (res) {
                setSnackBar({
                    open: true,
                    message: "Added Conference",
                });

                await loadData();
            } else {
                setSnackBar({
                    open: true,
                    message: "An internal error occurred. Conference not added.",
                });
                setIndex(-1);
            }
        }

        // allow form to be editable again
        setConferenceItem(conferenceTemplate);
        document.body.style.cursor = null;
        setformDisabled(false);
    };

    if (loading) {
        return (
            <div className="conferences-loader">
                <Loader />
            </div>
        );
    }

    return (
        <div className="conferences-container">
            <section className="stepper-section">
                <div className="stepper-section-div">
                    <Stepper
                        displayItems={conferences}
                        handleNodeClick={handleNodeClick}
                        addButtonTitle="Add Conference"
                        numItemsPerPage={12}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                    />
                </div>
            </section>

            <section className="conferences-edit-section">
                <div className="conferences-title">
                    <h1 className="conferences-title-h1">{title}</h1>
                    <section className="conferences-tabs">
                        <section>
                            <div
                                className={`conferences-tabs-theme ${
                                    tab === "theme" ? "active-tab" : null
                                }`}
                                tabIndex={-1}
                                role="button"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        setTab("theme");
                                    }
                                }}
                                onClick={() => setTab("theme")}
                            >
                                <h1>Theme</h1>
                            </div>

                            <div
                                className={`conferences-tabs-overview ${
                                    tab === "overview" ? "active-tab" : null
                                }`}
                                tabIndex={-2}
                                role="button"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        setTab("theme");
                                    }
                                }}
                                onClick={() => setTab("overview")}
                            >
                                <h1>Overview</h1>
                            </div>
                        </section>
                    </section>
                </div>

                {tab === "theme" ? (
                    <Theme
                        classes={classes}
                        conferenceItem={conferenceItem}
                        handleChange={handleChange}
                        formDisabled={formDisabled}
                        handleThemeChange={handleThemeChange}
                    />
                ) : (
                    <Overview
                        classes={classes}
                        conferenceItem={conferenceItem}
                        handleChange={handleChange}
                        formDisabled={formDisabled}
                    />
                )}
            </section>

            <section className="post-buttons">
                <div className="add-conference">
                    <Button
                        text={index >= 0 ? "Update" : "Add"}
                        onClickCallback={() => handleFormSubmit()}
                    />
                </div>

                {index >= 0 ? (
                    <div className="delete-conference">
                        <Button
                            text="Delete"
                            onClickCallback={() => setModal(true)}
                            style={{ backgroundColor: "#EA4444" }}
                        />
                    </div>
                ) : null}
            </section>

            {index >= 0 ? (
                <section className="last-edited-section">
                    <p>Last Updated: {formatDate(conferenceItem.updatedAt)}</p>
                </section>
            ) : null}

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={snackbar.message}
            />

            <DeleteModal
                open={modal}
                handleClose={handleClose}
                itemToBeDeletedTxt={`Conference #${conferenceItem.confNum.value} - ${conferenceItem.title.value}`}
                deleteButtonCallback={deleteButtonCallback}
            />
        </div>
    );
}
