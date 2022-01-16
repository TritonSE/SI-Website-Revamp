import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Snackbar } from "@material-ui/core";

import Button from "../Button";

export default function NewsletterItem() {
    /** React States */

    // holds newsletter data
    const [data, setData] = React.useState({
        
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
        
    })

    /** Functions/Validators */

    const validateData = () => {
        setIsPageDisabled(true);

        let hasErrors = false;
        const errors = { title: false };

        Object.keys(errors).forEch((key) => {
            if(data[key].length < 1) {
                errors[key] = true;
                hasErrors = true;
            }
        });

        setDataErrors(errors);
        setIsPageDisabled(false);

        if(!hasErrors) console.log("nice!");
        else handleSnackbar({ open: true, message: "there was an error"});
    }

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

    return (
        <div>
            <span className="title">Newsletter Title</span> {asterisk()}
            <TextField
                margin="dense"
                value="title"
                disabled={isPageDisabled}
                error={dataErrors.title}
                placeholder="Insert title"
                fullWidth
                variant="outlined"
                className={classes.root}
            />
        </div>
    )
}