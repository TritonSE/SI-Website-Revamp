/**
 * Newsletters page containing all of Sakyadhita's newsletters. Includes
 * the ability to view, edit, and post newsletter details and thumbnail
 * photos.
 *
 * @summary     Newsletters Section
 * @author      Elias Fang
 */

import React, { useState } from "react";
import { TextField, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import Stepper from "../../components/Stepper";
import config from "../../config";

import "../../css/Newsletters.css";

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

export default function Newsletters() {
    /** Snackbar and Form */
    const classes = useStyles();

    const users = [
        { a: "Volume #, Year #13131" },
        { a: "Volume #, Year #2" },
        { a: "Volume #, Year #3" },
        { a: "Volume #, Year #6" },
        { a: "Volume #, Year #10" },
        { a: "Volume #, Year #27" },
        { a: "Volume #, Year #18" },
        { a: "Volume #, Year #25" },
        { a: "Volume #, Year #19" },
        { a: "Volume #, Year #20" },
        { a: "Volume #, Year #212" },
        { a: "Volume #, Year #1345" },
        { a: "Volume #, Year #22323" },
    ];
    const [index, setIndex] = useState(0);
    const handleNodeClick = (ind) => {
        setIndex(ind);
    };
    const addNewNode = () => {};
    const formatNodeTitle = (item) => item.a;

    // tracks whether form is disabled
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);

    const [snackbar, setSnackBar] = React.useState({
        open: false,
        message: "",
    });

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

        let volume = false;
        let number = false;
        let year = false;
        let pdfLink = false;
        let imagelink = false;

        if (values.volume.value === "") volume = true;
        if (values.number.value === "") number = true;
        if (values.year.value === "") year = true;
        if (values.pdfLink.value === "") pdfLink = true;
        if (values.imagelink.value === "") imagelink = true;

        setValues({
            ...values,
            volume: { ...values.volume, error: volume },
            number: { ...values.number, error: number },
            year: { ...values.year, error: year },
            pdfLink: { ...values.pdfLink, error: pdfLink },
            imagelink: { ...values.imagelink, error: imagelink },
        });

        // check to see if any required fields are empty
        if (volume || number || year || pdfLink || imagelink) {
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
                volume: values.volume.value,
                number: values.number.value,
                year: values.year.value,
                pdfLink: values.pdfLink.value,
                imagelink: values.imagelink.value,
            }),
        }).then((res) => {
            // message sent
            if (res.ok) {
                // clear form values
                setValues({
                    ...values,
                    volume: { ...values.volume, value: "" },
                    number: { ...values.number, value: "" },
                    year: { ...values.year, value: "" },
                    pdfLink: { ...values.pdfLink, value: "" },
                    imagelink: { ...values.imagelink, value: "" },
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

    /** Server Requests */



    return (
        <div className="Newsletters">
            <section className="left-container">
                <h1>Newsletters</h1>
                {/* Stepper for Newsletters */}
                <div>
                    <Stepper
                        displayItems={users}
                        handleNodeClick={handleNodeClick}
                        // addButtonTitle="Add new"
                        // numItemsPerPage ={5}
                        handleAddNodeClick={addNewNode}
                        formatNodeTitle={formatNodeTitle}
                    />
                    {`${users[index].a} `}
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
