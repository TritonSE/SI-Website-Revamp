import React from "react";

import { makeStyles, TextField, Snackbar } from "@material-ui/core";

import Button from "../Button";

import "../../css/CommitteeItem.css";

export default function CommitteeItem({
    content,
    newCommittee,
    onDeleteCallback,
    onSaveCallback,
}) {
    const asterisk = () => <span className="asterisk" style={{marginRight: 10}}>*</span>;

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
        { title: "Years Active", name: "startYear", label: "Start Year"},
        { title: "", name: "endYear", label: "End Year"},
    ];

    return (
        <div>
            <div className="committee-grid">
                <div className="committee-grid-left">
                    {inputLabels.map((input) => {
                        return (
                            <>
                                {input.title === "" ? "" : <h2 className="title">{input.title}</h2>}

                                <TextField
                                    margin="dense"
                                    placeholder={input.label}
                                    variant="outlined"
                                    className={classes.root}
                                    style={{
                                        minWidth: 200,
                                    }}
                                />
                                {asterisk()}
                            </>
                        );
                    })}
                    <Button 
                        text="Post"
                    />
                    <h2 className="title">Board Members</h2>
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
                <div className="committee-grid-right">
                </div>
            </div>
        </div>
    )
}