import React from "react";
import { TextField, Snackbar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import "../../css/BranchesChapters.css";

import config from "../../config";

const BACKEND_URL = config.backend.uri;

const useStyles = makeStyles((theme) => ({
    form: {
        // input field - general layout
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "95%",
        },
        "& .MuiSelect-root": {
            // margin: theme.spacing(1),
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

export default function BranchesChapters() {
    const classes = useStyles();

    // tracks whether form is disabled
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);

    const [snackbar, setSnackBar] = React.useState({
        open: false,
        message: "",
    });

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
        let siteLink = false;
        let isBranch = false;
        let email = false;

        if (values.name.value === "") name = true;
        if (values.longitude.value === "") longitude = true;
        if (values.latitude.value === "") latitude = true;
        if (values.isBranch.value === "") isBranch = true;
        if (values.siteLink.value === "") siteLink = true;
        if (values.email.value === "") email = true;

        setValues({
            ...values,
            name: { ...values.name, error: name },
            longitude: { ...values.longitude, error: longitude },
            latitude: { ...values.latitude, error: latitude },
            siteLink: { ...values.siteLink, error: siteLink },
            isBranch: { ...values.isBranch, error: isBranch },
            email: { ...values.email, error: email },
        });

        // check to see if any required fields are empty
        if (name || longitude || latitude || isBranch || email) {
            setSnackBar({ open: true, message: "Missing required fields" });
            setIsFormDisabled(false);
            document.body.style.cursor = null;
            return;
        }

        // attempt to post new branch and chapter
        await fetch(`${BACKEND_URL}branchesAndChapters/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: values.name.value,
                email: values.email.value,
                longitude: values.longitude.value,
                latitude: values.latitude.value,
                isBranch: values.isBranch.value,
                siteLink: values.siteLink.value,
            }),
        }).then((res) => {
            // message sent
            if (res.ok) {
                // clear form values
                setValues({
                    ...values,
                    name: { ...values.name, value: "" },
                    longitude: { ...values.longitude, value: "" },
                    latitude: { ...values.latitude, value: "" },
                    siteLink: { ...values.siteLink, value: "" },
                    email: { ...values.email, value: "" },
                    isBranch: { ...values.isBranch, value: "" },
                });
                // message could not be sent
            } else {
                // show snackbar to notify message could not be sent
                setSnackBar({
                    open: true,
                    message: "An internal error occurred. Message not sent.",
                });
            }
        });

        // allow form to be editable again
        document.body.style.cursor = null;
        setIsFormDisabled(false);
    };

    return (
        <div className="Branches-Chapters">
            <section className="left-container">
                <h2>Branches & Chapters</h2>
                <form className={classes.form} autoComplete="off">
                    {/* Full Name of Branch Chapter Field */}
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
                        <TextField
                            name="isBranch"
                            value={values.isBranch.value}
                            error={values.isBranch.error}
                            onChange={handleChange}
                            placeholder="Branch"
                            disabled={isFormDisabled}
                            variant="outlined"
                        />
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
                            placeholder="Site Link"
                            disabled={isFormDisabled}
                            variant="outlined"
                        />
                    </div>
                </form>
            </section>
            <section className="right-container">
                <div className="post-button">
                    <Button text="Post" onClickCallback={handleFormSubmit} />
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
