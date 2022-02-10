import React from "react";

import { makeStyles, TextField, Snackbar } from "@material-ui/core";

import Button from "../Button";

export default function CommitteeItem() {
    const asterisk = () => <span className="asterisk">*</span>;

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
            <h2>Years Active</h2>
            <TextField
                 margin="dense"
                 variant="outlined"
                 className={classes.root}
                 style={{
                     minWidth: 400,
                 }}
            />
            {asterisk()}
            <TextField
                 margin="dense"
                 variant="outlined"
                 className={classes.root}
                 style={{
                     minWidth: 400,
                 }}
            />
            {asterisk()}
            <Button 
                text="Post"
            />
            <h2>Board Members</h2>
            <Button 
                text="+ Add New Member"
                className="add-member-button"
                style={{
                    "background-color": "var(--lightpurple)",
                    "border-radius": "5px",
                    "width": "250px"
                }}
            />
        </div>
    )
}