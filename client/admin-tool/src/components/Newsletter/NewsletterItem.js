import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Snackbar } from "@material-ui/core";

import Button from "../Button";

import "../../css/NewsletterItem.css"

export default function NewsletterItem({ content, newNewsletter, onDeleteCallback, onSaveCallback }) {
    /** React States */

    // holds newsletter data
    const [data, setData] = React.useState({
        volume: "",
        number: "",
        year: "",
        pdfLink: "",
        imageLink: ""
    });

    // used for tracking required fields
    const [dataErrors, setDataErrors] = React.useState({
        volume: false,
        number: false,
        year: false,
        pdfLink: false,
        imageLink: false
    });

    const [isPageDisabled, setIsPageDisabled] = React.useState(false);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    /** Initialization */

    React.useEffect(() => {
        if(!content) return;

        setDataErrors({
            volume: false,
            number: false,
            year: false,
            pdfLink: false,
            imageLink: false
        });

        setData({
            volume: content["volume"] || "",
            number: content["number"] || "",
            year: content["year"] || "",
            pdfLink: content["pdfLink"] || "",
            imageLink: content["imageLink"] || "",
        });

        setIsPageDisabled(false);
    }, [content])

    /** Functions/Validators */

    const validateData = () => {
        setIsPageDisabled(true);

        let errors = {
            volume: false,
            number: false,
            year: false,
            pdfLink: false,
            imageLink: false
        };

        let hasErrors = false;
        let errorString = "Error: ";

        Object.keys(data).forEach((key) => {
            if(data[key].length < 1) {
                errors[key] = true;
                hasErrors = true;
                errorString += " all fields are required;"
            }
        });

        console.log(typeof data["year"])

        if(data["year"].toString().length != 4) {
            errors["year"] = true;
            hasErrors = true;
            errorString += " year must be a 4 digit integer;";
        }

        if(isNaN(data["volume"])) {
            errors["year"] = true;
            hasErrors = true;
            errorString += " volume must be an integer;"
        }

        if(isNaN(data["number"])) {
            errors["year"] = true;
            hasErrors = true;
            errorString += " number must be an integer;"
        }

        setDataErrors(errors);
        setIsPageDisabled(false);

        if(!hasErrors) onSaveCallback(data);
        else handleSnackbar({ open: true, message: errorString});
    };

    /** Styling/Formatting */
    
    const asterisk = () => <span className="asterisk">*</span>

    const useHelperTextStyles = makeStyles(() => ({
        root: {
            // input field - general layout
            "& .MuiTextField-root": {
                width: "100%",
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

    const classes = useHelperTextStyles();

    const inputLabels = [
        { title: "Details", name: "volume", label: "Volume #" },
        { title: "", name: "number", label: "Number #" },
        { title: "", name: "year", label: "Year" },
        { title: "", name: "pdfLink", label: "PDF link"},
        { title: "Thumbnail Image", name: "imageLink", label: "Insert image link" }
    ]

    return (

        
        <div>
            <div className="newsletter-grid">
                <div className="newsletter-grid-left">
                {
                    inputLabels.map((input, key) => {
                        return <>
                            { input.title == "" ? "" : <h2 className="title">{input.title}</h2> }

                            <TextField
                                margin="dense"
                                value={data[input.name]}
                                disabled={isPageDisabled}
                                placeholder={input.label}
                                error={dataErrors[input.label]}
                                variant="outlined"
                                className={classes.root}
                                onChange={(event) => {
                                    setData({...data, [input.name]: event.target.value})}
                                }
                                style = {{
                                    minWidth: 400
                                }}
                            />
                            {asterisk()}
                            <br />
                        </>
                    })
                }
                </div>
                <div className="newsletter-grid-right">
                    {newNewsletter ? (
                        <Button 
                            text="Post"
                            onClickCallback={validateData}
                        />
                    ) : (
                        <>
                            <Button
                                style={{display: "inline", marginRight: 20}}
                                text="Update"
                                onClickCallback={validateData}
                            />
                            <Button
                                style={{backgroundColor: "rgb(234, 68, 68)"}}
                                text="Delete"
                                onClickCallback={onDeleteCallback}
                            />
                        </>
                    )

                    }
                </div>
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackbar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    )
}