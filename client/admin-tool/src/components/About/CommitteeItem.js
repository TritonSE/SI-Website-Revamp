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
    const [data, setData] = React.useState([{
        startYear: "",
        endYear: "",
        rank: "",
        name: "",
        position: "",
        bio: "",
        imageLink: "",
        redirectLink: "",
        openInSameTab: false,
    }]);

    const [dataErrors, setDataErrors] = React.useState([{
        startYear: false,
        endYear: false,
        rank: false,
        name: false,
        position: false,
        bio: false,
        imageLink: false,
        redirectLink: false,
        openInSameTab: false,
    }])

    const [isPageDisabled, setIsPageDisabled] = React.useState(false);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    React.useEffect(() => {
        if (!content) return;

        setDataErrors({
            startYear: false,
            endYear: false,
            rank: false,
            name: false,
            position: false,
            bio: false,
            imageLink: false,
            redirectLink: false,
            openInSameTab: false,
        });

        const dataArray = [];

        for(let i = 0; i < content.data.length; i++) {
            dataArray.push({
                startYear: content.data[i]["startYear"] || "",
                endYear: content.data[i]["endYear"] || "",
                rank: content.data[i]["rank"] || "",
                name: content.data[i]["name"] || "",
                position: content.data[i]["position"] || "",
                bio: content.data[i]["bio"] || "",
                imageLink: content.data[i]["imageLink"] || "",
                redirectLink: content.data[i]["redirectLink"] || "",
                openInSameTab: content.data[i]["openInSameTab"] || "",
            });
        }

        setData(dataArray);
        setIsPageDisabled(false);
    }, [content]);

    const validateData = () => {
        console.log("called")

        setIsPageDisabled(true);

        let errors = {
            startYear: false,
            endYear: false,
            rank: false,
            name: false,
            position: false,
            bio: false,
            imageLink: false,
            redirectLink: false,
            openInSameTab: false,
        };

        let hasErrors = false;
        let errorString = "Error: ";

        Object.keys(data).forEach((key) => {
            if(data[key].length < 1) {
                errors[key] = true;
                hasErrors = true;
                errorString = "Error: all fields are required; ";
            }
        });

        setDataErrors(errors);
        setIsPageDisabled(false);

        if(!hasErrors) onSaveCallback(data);
        else handleSnackbar({open: true, message: errorString});
    }

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
                                    label={input.label}
                                    value={data[0][input.name]}
                                    placeholder={input.label}
                                    variant="outlined"
                                    className={classes.root}
                                    onChange={(event) => {
                                        setData({ ...data, [input.name]: event.target.value });
                                    }}
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
                        onClickCallback={validateData}
                    />
                    <h2 className="title">Board Members</h2>
                    <Button 
                        text="+ Add New Member"
                        className="add-member-button"
                        style={{
                            backgroundColor: "var(--lightpurple)",
                            borderRadius: 5,
                            width: 250,
                            height: 40,
                            fontWeight: "lighter",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    />
                </div>
                <div className="committee-grid-right">
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