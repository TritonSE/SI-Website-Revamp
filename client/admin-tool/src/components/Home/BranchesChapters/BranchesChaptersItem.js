import React from "react";
import { Snackbar, TextField, makeStyles, MenuItem } from "@material-ui/core";

import Button from "../../Button";

import "../../../css/BranchesChaptersItem.css";


export default function BranchesChaptersItem({
    content,
    newBranch,
    onDeleteCallback,
    onSaveCallback,
}) {
    const [data, setData] = React.useState({});
    const [isPageDisabled, setIsPageDisabled] = React.useState(false);
    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    React.useEffect(() => {
        if (!content) return;

        setData({
            name: content["name"] || "",
            isBranch: content["isBranch"] || "",
            email: content["email"] || "",
            latitude: content["latitude"] || "",
            longitude: content["longitude"] || "",
            siteLink: content["siteLink"] || "",
        });

        if(data["isBranch"]) {
            data["isBranch"] === "Branch";
        }
        else {
            data["isBranch"] === "Chapter";
        }
    }, [content])

    const validateData = () => {
        onSaveCallback(data);
    }

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

    const inputLabels = [
        {name: "name", label: "Name of branch/chapter"},
        {name: "latitude", label: "Latitude"},
        {name: "longitude", label: "Longitude"},
        {name: "isBranch", label: "Branch" },
        {name: "email", label: "Email" },
        {name: "siteLink", label: "Insert site link" },
    ];

    return (
        <div>
            <div className="branches-chapters-grid">
                <div className="branches-chapters-grid-left">
                    {inputLabels.map((input) => {
                        return (
                            <>
                                <TextField
                                    margin="dense"
                                    value={data[input.name]}
                                    disabled={isPageDisabled}
                                    placeholder={input.label}
                                    variant="outlined"
                                    className={classes.root}
                                    select={input.name === "isBranch" ? true : false}
                                    onChange={(event) => {
                                        alert(event),
                                        setData({ ...data, [input.name]: event.target.value });
                                    }}
                                    style={{
                                        minWidth: 400,
                                    }}
                                >
                                {input.name === "isBranch" ? (
                                    <>
                                        <MenuItem key="Branch" value="Branch">Branch</MenuItem>
                                        <MenuItem key="Chapter" value="Chapter">Chapter</MenuItem>
                                    </>
                                ) : (
                                    ""
                                )}
                                </TextField>
                                {asterisk()}
                                <br />
                            </>
                        );
                    })}
                </div>
                <div className="branches-chapters-grid-right">
                    {newBranch ? (
                        <Button text="Post" onClickCallback={validateData} />
                    ) : (
                        <>
                            <Button
                                style={{ display: "inline", marginRight: 20 }}
                                text="Update"
                                onClickCallback={validateData} 
                            />
                            <Button
                                style={{ backgroundColor: "rgb(234, 68, 68)" }}
                                text="Delete"
                                onClickCallback={onDeleteCallback}
                            />
                        </>
                    )}
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
