/**
 * Individual commitee item with TextFields to edit information
 *
 * @summary     edit individual committee information
 * @author      Navid Boloorian
 */

import React from "react";

import { makeStyles, TextField, Snackbar } from "@material-ui/core";
import Button from "../Button";

import "../../css/CommitteeItem.css";

export default function CommitteeItem({
    content,
    newCommittee,
    clickExec,
    handleAddCommittee,
    handleDeleteCommittee,
    setCommitteeYear,
}) {
    const [data, setData] = React.useState([
        {
            startYear: "",
            endYear: "",
        },
    ]);

    const [dataErrors, setDataErrors] = React.useState([
        {
            startYear: false,
            endYear: false,
        },
    ]);

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
        });

        const dataArray = [];

        dataArray.push({
            startYear: content.data[0]["startYear"] || "",
            endYear: content.data[0]["endYear"] || "",
        });

        setData(dataArray);
        setIsPageDisabled(false);
    }, [content]);

    const validateData = () => {
        setIsPageDisabled(true);
        setCommitteeYear(data[0]);
        handleSnackbar({ open: true, message: "Years active succesfully set" });

        if (newCommittee) {
            const temporaryMember = {
                startYear: data[0].startYear,
                endYear: data[0].endYear,
                rank: 1,
                name: "Sample Member",
                position: "President",
                bio: "",
                imageLink: "https://assets.ucsd.edu/img/icon/headshot.jpg",
                redirectLink: "https://google.com",
                openInSameTab: false,
            };

            handleAddCommittee(temporaryMember);
        }
        setIsPageDisabled(false);
    };

    const asterisk = () => (
        <span className="asterisk" style={{ marginRight: 10 }}>
            *
        </span>
    );

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
        { title: "Years Active", name: "startYear", label: "Start Year" },
        { title: "", name: "endYear", label: "End Year" },
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
                                    disabled={isPageDisabled}
                                    label={input.label}
                                    value={data[0][input.name]}
                                    placeholder={input.label}
                                    variant="outlined"
                                    className={classes.root}
                                    onChange={(event) => {
                                        let dataObj = { ...data };
                                        let dataRow = { ...data[0] };
                                        dataRow[input.name] = event.target.value;
                                        dataObj[0] = dataRow;

                                        setData(dataObj);
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
                        text={newCommittee ? "Post" : "Update"}
                        style={{
                            justifySelf: "center",
                            marginRight: "10px",
                        }}
                        onClickCallback={validateData}
                    />
                    {!newCommittee ? (
                        <Button
                            text="Delete"
                            style={{
                                justifySelf: "center",
                                backgroundColor: "var(--red)",
                            }}
                            onClickCallback={handleDeleteCommittee}
                        />
                    ) : (
                        ""
                    )}
                    <h2 className="title">Board Members</h2>
                    <div onClick={() => clickExec(null, true)}>
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
                </div>
                <div className="committee-grid-right"></div>
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackbar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    );
}
