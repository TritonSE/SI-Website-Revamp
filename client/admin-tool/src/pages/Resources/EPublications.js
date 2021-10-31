import React from "react";
import { TextField, Snackbar, MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import "../../css/EPublications.css";

import config from "../../config";

const BACKEND_URL = config.backend.uri;

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

export default function EPublications() {
    const classes = useStyles();

    const [isFormDisabled, setIsFormDisabled] = React.useState(false);

    const [snackbar, setSnackBar] = React.useState({
        open: false,
        message: "",
    });

    const [values, setValues] = React.useState({
        title: {
            value: "",
            error: false,
        },
        author: {
            value: "",
            error: false,
        },
        filters: {
            value: [{}],
            error: false,
        },
        description: {
            value: "",
            error: false,
        },
        imageLink: {
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
        // form is already processing a request
        if (isFormDisabled){
            return;
        }

        // disable form to prevent spam
        setIsFormDisabled(true);
        // display loading cursor
        document.body.style.cursor = "wait";

        let title = false;
        let author = false;
        let filters = false;
        let description = false;
        let imageLink = false;

        if (values.title.value === ""){
            title = true;
        }

        if (values.author.value === ""){
            longitude = true;
        }

        if (values.filters.value === [{}]){
            filters = true;
        }

        if (values.imageLink.value === ""){
            imageLink = true;
        }

        if (values.description.value === ""){
            description = true;
        }

        setValues({
            ...values,
            title: { ...values.title, error: title },
            author: { ...values.author, error: author },
            filters: { ...values.filters, error: filters },
            description: { ...values.description, error: description },
            imageLink: { ...values.imageLink, error: imageLink },
        });

        // check to see if any required fields are empty
        if (title || author || filters || imageLink) {
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
                title: values.title.value,
                author: values.author.value,
                filters: values.filters.value,
                description: values.description.value,
                imageLink: values.imageLink.value,
            }),
        }).then((res) => {
            // message sent
            if (res.ok) {
                // clear form values
                setValues({
                    ...values,
                    title: { ...values.title, value: "" },
                    author: { ...values.author, value: "" },
                    filters: { ...values.filters, value: "" },
                    description: { ...values.description, value: "" },
                    imageLink: { ...values.imageLink, value: "" },
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
        <div className="EPublications">
            <section className="left-container">
                <h1>ePublications</h1>
                <form className={classes.form} autoComplete="off">
                    <div>
                        <h2>Details</h2>
                        {/* Title */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="title"
                                value={values.title.value}
                                error={values.title.error}
                                onChange={handleChange}
                                placeholder="Title"
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                            <span className="required-asterisk"> * </span>
                        </div>
                        {/* Author */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="author"
                                value={values.author.value}
                                error={values.author.error}
                                onChange={handleChange}
                                placeholder="Author"
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                            <span className="required-asterisk"> * </span>
                        </div>
                        {/* Filters */}
                        <div className="form-field-wrapper">
                            <CustomSelectField
                                name="filters"
                                error={values.filters.error}
                                value={values.filters.value}
                                placeholder="Branch"
                                onChange={handleChange}
                                disabled={isFormDisabled}
                                variant="outlined"
                                label="Filters"
                                select
                                // autoWidth={false}
                            >
                                <MenuItem value="edited">Edited by Sakyadhirta</MenuItem>
                                <MenuItem value="english">English</MenuItem>
                            </CustomSelectField>
                            <span className="required-asterisk"> * </span>
                        </div>
                        <h4>Publications can be filtered as "Edited by Sakyadhirta" and ONE
                            language. Publications that have more than one translation must
                            added as a separate entry</h4>
                        <h2>Thumbnail Image</h2>
                        {/* Image Link */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="imageLink"
                                value={values.imageLink.value}
                                error={values.imageLink.error}
                                onChange={handleChange}
                                placeholder="Image Link"
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                            <span className="required-asterisk"> * </span>
                        </div>
                        <h2>Description</h2>
                        {/* Description */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="description"
                                value={values.description.value}
                                error={values.description.error}
                                onChange={handleChange}
                                placeholder="Description"
                                multiline
                                rows={5}
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                        </div>
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