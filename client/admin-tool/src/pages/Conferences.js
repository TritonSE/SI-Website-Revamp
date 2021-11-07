import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "../components/Stepper";
import Theme from "../components/conferences/Theme";
import Overview from "../components/conferences/Overview";

import "../css/Conferences.css";

import config from "../config";

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
    };

    const classes = useStyles();
    const [title, setTitle] = useState("Add Conference");
    const [conferenceItem, setConferenceItem] = useState(conferenceTemplate);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(-1);
    const [conferences, setConferences] = useState([]);
    const [tab, setTab] = useState("theme");

    useEffect(() => {
        setLoading(true);
        fetch(`${config.backend.uri}conference/`)
            .then((res) => res.json())
            .then((data) => {
                setConferences(data);
                console.log("data: ", data);
                setLoading(false);
            });
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

    const formatNodeTitle = (item) => `${item.confNum} - ${item.location}`;

    const handleChange = (event) => {
        setConferenceItem({
            ...conferenceItem,
            [event.target.name]: {
                value: event.target.value,
            },
        });
    };

    if (loading) {
        return (
            <div>
                <span>loading</span>
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
                        // addButtonTitle="Add new"
                        numItemsPerPage={12}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                    />
                </div>
            </section>

            <section className="conferences-edit-section">
                <div className="conferences-title">
                    <h1>{title}</h1>
                </div>

                {tab === "theme" ? (
                    <Theme
                        classes={classes}
                        conferenceItem={conferenceItem}
                        handleChange={handleChange}
                    />
                ) : (
                    <Overview
                        classes={classes}
                        conferenceItem={conferenceItem}
                        handleChange={handleChange}
                    />
                )}
            </section>

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
    );
}
