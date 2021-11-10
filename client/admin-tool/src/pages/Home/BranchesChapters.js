/**
 * Displays the Branches and Chapters page on the admin tool. It allows the user to view and modify all the
 * current branches and chapters that are in the database as well as add new branches/chapters as necessary.
 *
 * All server requests are made in a separate file that is imported for east access
 *
 * @summary Branches and Chapters Page
 * @author Jacob Au
 */

import React, { useState } from "react";
import { TextField, Snackbar, MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import "../../css/BranchesChapters.css";
import {
    putBranchChapters,
    postBranchChapters,
    getBranchChapters,
} from "../../util/BranchesChapters";
import Stepper from "../../components/Stepper";

// style for text fields
const useStyles = makeStyles((theme) => ({
    form: {
        // input field - general layout
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "95%",
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
}));

// style for dropdown menu
const CustomSelectField = withStyles({
    root: {
        "& .MuiOutlinedInput-input": {
            color: "#000000",
        },
        "& .MuiInputLabel-root": {
            // color: "black",
            // fontFamily: "Nunito",
            // fontSize: "18px",
            lineHeight: "25px",
            opacity: "1",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            border: "1px solid #000000",
            borderRadius: "30px",
            fontFamily: "Nunito",
            fontSize: "18px",
            lineHeight: "1.95vw",
            boxSizing: "border-box",
            color: "#000000",
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "black",
        },
        "&:hover .MuiInputLabel-root": {
            color: "black",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6652a0",
        },
    },
})(TextField);

export default function BranchesChapters() {
    const classes = useStyles();

    // tracks whether form is disabled
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);

    const [snackbar, setSnackBar] = React.useState({
        open: false,
        message: "",
    });

    const testArray = [{ name: "placeholder" }];

    const [branchesAndChapters, setBranchesAndChapters] = React.useState(testArray);

    const [values, setValues] = React.useState({
        name: {
            value: "", // field value given by user
            error: false, // field contains an error
        },
        isBranch: {
            value: "",
            error: false,
        },
        longitude: {
            value: "",
            error: false,
        },
        latitude: {
            value: "",
            error: false,
        },
        email: {
            value: "",
            error: false,
        },
        siteLink: {
            value: "",
            error: false,
        },
    });

    // when an input field is edited
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: {
                value: event.target.value,
            },
        });
    };

    const handleSnackClose = () => {
        setSnackBar({ open: false });
    };

    const [index, setIndex] = useState(0);

    const [isNewNode, setIsNewNode] = useState(true);

    // when a node in the stepper is clicked
    const handleNodeClick = (ind) => {
        setIsNewNode(false);
        setIndex(ind);
        setValues({
            ...values,
            name: { ...values.name, value: branchesAndChapters[ind].name },
            longitude: { ...values.longitude, value: branchesAndChapters[ind].longitude },
            latitude: { ...values.latitude, value: branchesAndChapters[ind].latitude },
            siteLink: { ...values.siteLink, value: branchesAndChapters[ind].siteLink },
            email: { ...values.email, value: branchesAndChapters[ind].email },
            isBranch: { ...values.isBranch, value: branchesAndChapters[ind].isBranch },
        });
    };

    // when user clicks add new node on the stepper
    const addNewNode = () => {
        setIsNewNode(true);
        setValues({
            ...values,
            name: { ...values.name, value: "" },
            longitude: { ...values.longitude, value: "" },
            latitude: { ...values.latitude, value: "" },
            siteLink: { ...values.siteLink, value: "" },
            email: { ...values.email, value: "" },
            isBranch: { ...values.isBranch, value: "" },
        });
    };

    const formatNodeTitle = (item) => item.name;

    const addSpecialNodeClass = (item) => {
        if (item) return "orange-border";
        return "";
    };

    const refreshBranchesChapters = async () => {
        const data = await getBranchChapters();
        setBranchesAndChapters(data);
    };

    // when the user clicks the post button
    const handleFormSubmit = async () => {
        // do nothing if form is already processing a request
        if (isFormDisabled) return;

        // disable form to prevent spam requests
        setIsFormDisabled(true);
        // display loading cursor
        document.body.style.cursor = "wait";

        let name = false;
        let longitude = false;
        let latitude = false;
        let isBranch = false;
        let email = false;

        if (values.name.value === "") name = true;
        if (values.longitude.value === "") longitude = true;
        if (values.latitude.value === "") latitude = true;
        if (values.isBranch.value === "") isBranch = true;
        if (values.email.value === "") email = true;

        // check to see if any required fields are empty
        if (name || longitude || latitude || isBranch || email) {
            setSnackBar({ open: true, message: "Missing required fields" });
            setIsFormDisabled(false);
            document.body.style.cursor = null;
            return;
        }

        if (values.isBranch.value === "branch") {
            values.isBranch.value = true;
        } else {
            values.isBranch.value = false;
        }

        // makes the post request to backend here if successful clear all the values
        if (!isNewNode) {
            if (await putBranchChapters(branchesAndChapters[index]["id"], values)) {
                await refreshBranchesChapters();
                setSnackBar({
                    open: true,
                    message: "Existing branch/chapter updated",
                });
            } else {
                setSnackBar({
                    open: true,
                    message: "An internal error occurred. Message not sent.",
                });
            }
        } else if (await postBranchChapters(values)) {
            await refreshBranchesChapters();
            setSnackBar({
                open: true,
                message: "New branch/chapter added",
            });
        } else {
            setSnackBar({
                open: true,
                message: "An internal error occurred. Message not sent.",
            });
        }

        // allow form to be editable again
        setIsNewNode(false);
        document.body.style.cursor = null;
        setIsFormDisabled(false);
    };

    // set up the initial values for Branches and Chapters to be used in the Stepper
    React.useState(async () => {
        const data = await getBranchChapters();
        await setBranchesAndChapters(data);
    }, [handleFormSubmit]);

    return (
        <div className="Branches-Chapters">
            <h1>Branches & Chapters</h1>
            <div className="body-container">
                <div className="column">
                    <Stepper
                        displayItems={branchesAndChapters}
                        handleNodeClick={handleNodeClick}
                        // addButtonTitle="Add new"
                        // numItemsPerPage ={5}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                        addSpecialNodeClass={addSpecialNodeClass}
                    />
                    {`${branchesAndChapters[index].name} `}
                </div>

                <div className="middle-container">
                    <form className={classes.form} autoComplete="off">
                        {/* Full Name of Branch Chapter Field */}
                        <div>
                            <div className="form-field-wrapper">
                                <TextField
                                    name="name"
                                    value={values.name.value}
                                    error={values.name.error}
                                    onChange={handleChange}
                                    placeholder="Name of Branch"
                                    disabled={isFormDisabled}
                                    variant="outlined"
                                />
                                <span className="required-asterisk"> * </span>
                            </div>
                            {/* Longitute of Branch/Chapter */}
                            <div className="form-field-wrapper">
                                <TextField
                                    name="latitude"
                                    value={values.latitude.value}
                                    error={values.latitude.error}
                                    onChange={handleChange}
                                    placeholder="Latitude"
                                    disabled={isFormDisabled}
                                    variant="outlined"
                                />
                                <span className="required-asterisk"> * </span>
                            </div>
                            {/* Latitude of Branch/Chapter */}
                            <div className="form-field-wrapper">
                                <TextField
                                    name="longitude"
                                    value={values.longitude.value}
                                    error={values.longitude.error}
                                    onChange={handleChange}
                                    placeholder="Longitude"
                                    disabled={isFormDisabled}
                                    variant="outlined"
                                />
                                <span className="required-asterisk"> * </span>
                            </div>
                            {/* Type of Branch/Chapter */}

                            <div className="form-field-wrapper">
                                <CustomSelectField
                                    name="isBranch"
                                    error={values.isBranch.error}
                                    value={values.isBranch.value}
                                    placeholder="Branch"
                                    onChange={handleChange}
                                    disabled={isFormDisabled}
                                    variant="outlined"
                                    label="Branch"
                                    select
                                    // autoWidth={false}
                                >
                                    <MenuItem value="true">Branch</MenuItem>
                                    <MenuItem value="false">Chapter</MenuItem>
                                </CustomSelectField>
                                <span className="required-asterisk"> * </span>
                            </div>

                            {/* Email of Branch/Chapter */}
                            <div className="form-field-wrapper">
                                <TextField
                                    name="email"
                                    value={values.email.value}
                                    error={values.email.error}
                                    onChange={handleChange}
                                    placeholder="Email of Branch"
                                    disabled={isFormDisabled}
                                    variant="outlined"
                                />
                                <span className="required-asterisk"> * </span>
                            </div>
                            {/* Site Link of Branch/Chapter */}
                            <div className="form-field-wrapper">
                                <TextField
                                    name="siteLink"
                                    value={values.siteLink.value}
                                    error={values.siteLink.error}
                                    onChange={handleChange}
                                    placeholder="Insert a Site Link"
                                    disabled={isFormDisabled}
                                    variant="outlined"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="column">
                    <div className="post-button">
                        <Button text="Post" onClickCallback={handleFormSubmit} />
                    </div>
                </div>
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={handleSnackClose}
                    message={snackbar.message}
                />
            </div>
        </div>
    );
}
