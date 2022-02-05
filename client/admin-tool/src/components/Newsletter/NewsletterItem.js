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
        title: "",
        content: "",
        isPublished: false,
    });

    // used for tracking required fields
    const [dataErrors, setDataErrors] = React.useState({
        title: false,
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
            title: false,
        });

        setData({
            title: content["title"] || "",
            content: content["content"] || "",
            isPublished: content["isPublished"] || false,
        })

        setIsPageDisabled(false);
    }, [content])

    /** Functions/Validators */

    const validateData = () => {
        setIsPageDisabled(true);

        let hasErrors = false;
        const errors = { title: false };

        Object.keys(errors).forEach((key) => {
            if(data[key].length < 1) {
                errors[key] = true;
                hasErrors = true;
            }
        });

        setDataErrors(errors);
        setIsPageDisabled(false);

        if(!hasErrors) console.log("nice!");
        else handleSnackbar({ open: true, message: "there was an error"});
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
                                value={content[input.name]}
                                disabled={isPageDisabled}
                                error={dataErrors.title}
                                placeholder={input.label}
                                variant="outlined"
                                className={classes.root}
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
                        />
                    ) : (
                        <>
                            <Button
                                style={{display: "inline", marginRight: 20}}
                                text="Update"
                            />
                            <Button
                                style={{backgroundColor: "rgb(234, 68, 68)"}}
                                text="Delete"
                            />
                        </>
                    )

                    }
                </div>
            </div>
        </div>
    )
}