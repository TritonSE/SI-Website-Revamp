/**
 * Newsletters page containing all of Sakyadhita's newsletters. Includes
 * the ability to view, edit, and post newsletter details and thumbnail
 * photos.
 *
 * @summary     Newsletters section.
 * @author      Elias Fang
 */

import React, { useState } from "react";
import { TextField, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import Stepper from "../../components/Stepper";

import {
    fetchNewsletters, addNewsletters, updateNewsletters
} from "../../util/requests/Resources/Newsletters";

import "../../css/Newsletters.css";

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

export default function Newsletters() {
    /** Snackbar and Form */
    const classes = useStyles();

    const test = [
        { volume: "1", number: "2", year: "3", pdfLink: "123.com", imageLink: "321.com" },
    ];

    const [newsletters, setNewsletters] = React.useState(test);

    const [values, setValues] = React.useState({
        volume: {
            value: "", // field value given by user
            error: false, // field contains an error
        },
        number: {
            value: "",
            error: false,
        },
        year: {
            value: "",
            error: false,
        },
        pdfLink: {
            value: "",
            error: false,
        },
        imageLink: {
            value: "",
            error: false,
        },
    });
    
    // set index of current newsletter
    const [index, setIndex] = useState(0);

    const [isNewNode, setIsNewNode] = useState(true);

    const handleNodeClick = (ind) => {
        setIndex(ind);
        setValues({
            ...values,
            volume: { ...values.volume, value: newsletters[ind].volume },
            number: { ...values.number, value: newsletters[ind].number },
            year: { ...values.year, value: newsletters[ind].year },
            pdfLink: { ...values.pdfLink, value: newsletters[ind].pdfLink },
            imageLink: { ...values.imageLink, value: newsletters[ind].imageLink },
        });
    };

    const addNewNode = () => {
        setIsNewNode(true);
        setValues({
            ...values,
            volume: { ...values.name, value: "" },
            number: { ...values.number, value: "" },
            year: { ...values.year, value: "" },
            pdfLink: { ...values.pdfLink, value: "" },
            imageLink: { ...values.imageLink, value: "" },
        });
    };

    const formatNodeTitle = (item) => item.volume;

    // tracks whether form is disabled
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);

    const [snackbar, setSnackBar] = React.useState({
        open: false,
        message: "",
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

    /** Server Requests */

    // fetch newsletterss
    const refreshNewsletters = async () => {
        const data = await fetchNewsletters();
        setNewsletters(data); 
    }

    // add/update newsletters
    const handleFormSubmit = async () => {
        // do nothing if form is already processing a request
        if (isFormDisabled) return;

        // disable form to prevent spam requests
        setIsFormDisabled(true);
        // display loading cursor
        document.body.style.cursor = "wait";

        let volume = false;
        let number = false;
        let year = false;
        let pdfLink = false;
        let imageLink = false;

        if (values.volume.value === "") volume = true;
        if (values.number.value === "") number = true;
        if (values.year.value === "") year = true;
        if (values.pdfLink.value === "") pdfLink = true;
        if (values.imageLink.value === "") imageLink = true;

        // check to see if any required fields are empty
        if (volume || number || year || pdfLink || imageLink) {
            setSnackBar({ open: true, message: "Missing required fields" });
            setIsFormDisabled(false);
            document.body.style.cursor = null;
            return;
        }

        // makes post request to backend, clears all values if successful
        if (!isNewNode) {
            if (await updateNewsletters(newsletters[index]["id"], values)) {
                await refreshNewsletters();
                setSnackBar({
                    open: true,
                    message: "Existing newsetters updated",
                });
            } else {
                setSnackBar({
                    open: true,
                    message: "An internal error occurred. Message not sent.",
                });
            }
        } else if (await addNewsletters(values)) {
            await refreshNewsletters();
            setSnackBar({
                open: true,
                message: "New newsletter added",
            });
        } else {
            setSnackBar({
                open: true,
                message: "An internal error occurred. Message not sent.",
            });
        }

        // allow form to be editable again
        setIsNewNode(true);
        document.body.style.cursor = null;
        setIsFormDisabled(false);
    };

    /** Initialization  */

    // fetches server data upon component mount
    React.useEffect(async () => {
        await refreshNewsletters();
    }, []);

    return (
        <div className="Newsletters">
            {/* Title and Stepper for Newsletters */}
            <section className="left-container">
                <h1>Newsletters</h1>
                <div>
                    <Stepper
                        displayItems={newsletters}
                        handleNodeClick={handleNodeClick}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                    />
                </div>
            </section>

            {/* Newsletters Form */}
            <section className="middle-container">
                <form className={classes.form} autoComplete="off">
                    <div>
                        <h3>Details</h3>
                        {/* Volume of Newsletter */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="volume"
                                value={values.volume.value}
                                error={values.volume.error}
                                onChange={handleChange}
                                placeholder="Volume #"
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                            <span className="required-asterisk"> * </span>
                        </div>
                        {/* Number of Newsletter */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="number"
                                value={values.number.value}
                                error={values.number.error}
                                onChange={handleChange}
                                placeholder="Number #"
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                            <span className="required-asterisk"> * </span>
                        </div>
                        {/* Year of Newsletter */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="year"
                                value={values.year.value}
                                error={values.year.error}
                                onChange={handleChange}
                                placeholder="Year"
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                            <span className="required-asterisk"> * </span>
                        </div>
                        {/* PDF Link of Newsletter */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="pdfLink"
                                value={values.pdfLink.value}
                                error={values.pdfLink.error}
                                onChange={handleChange}
                                placeholder="PDF link"
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                            <span className="required-asterisk"> * </span>
                        </div>
                        <h3>Thumbnail Image</h3>
                        {/* Image Link of Newsletter */}
                        <div className="form-field-wrapper">
                            <TextField
                                name="imageLink"
                                value={values.imageLink.value}
                                error={values.imageLink.error}
                                onChange={handleChange}
                                placeholder="Insert img link"
                                disabled={isFormDisabled}
                                variant="outlined"
                            />
                            <span className="required-asterisk"> * </span>
                        </div>
                    </div>
                </form>
            </section>

            {/* Post Button */}
            <section className="right-container">
                <div className="post-button">
                    <Button text="Post" onClickCallback={handleFormSubmit} />
                </div>
            </section>

            {/* Snackbar for Error Displays */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={snackbar.message}
            />
        </div>
    );
}
