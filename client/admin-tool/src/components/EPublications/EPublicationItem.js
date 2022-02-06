import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@material-ui/core";
import { Snackbar } from "@material-ui/core";

import Button from "../Button";

import "../../css/EPublicationItem.css";

export default function EPublicationItem({
    content,
    newPublication,
    onDeleteCallback,
    onSaveCallback,
}) {
    const [data, setData] = React.useState({

    });

    const [dataErrors, setDataErrors] = React.useState({

    });

    const [isPageDisabled, setIsPageDisabled] = React.useState(false);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    React.useEffect(() => {
        
    }, [content])

    const validateData = () => {

    }

    const asterisk = () => <span className = "required-asterisk">*</span>

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
        {title: "Details", name: "title", label: "Title"},
        {title: "", name: "author", label: "Author"},
        {title: "", name: "filter", label: "Filter"},
        {title: "Thumbnail Image", name: "imageLink", label: "Insert site link"},
        {title: "Redirect To", name: "pdfLink", label: "Insert PDF link"},
        {title: "", name: "feature", label: "Feature on header"},
        {title: "Description", name: "description", label: "Type description here"},
    ];

    return(
        <div>
            <div className="epublication-grid">
                <div classname="epublication-grid-left">
                    {inputLabels.map((input) => {
                        return (
                            <>
                                {input.title === "" ? "" : <h2 className="title">{input.title}</h2>}
                                {input.name === "feature" ? (
                                    <>
                                        <label>
                                            <Checkbox />
                                            {input.label}
                                        </label>
                                        <br />
                                    </>
                                ) : (
                                    <>
                                        <TextField
                                            margin="dense"
                                            value={data[input.name]}
                                            disabled={isPageDisabled}
                                            placeholder={input.label}
                                            // error={dataErrors[input.label]}
                                            select={input.name === "filter" ? true : false}
                                            multiline={input.name === "description" ? true : false}
                                            minRows={input.name === "description" ? 4 : 1}
                                            variant="outlined"
                                            className={classes.root}
                                            style={{
                                                minWidth: 400,
                                            }}
                                        />
                                        {input.name !== "description" ? asterisk() : ""}
                                        <br />
                                    </>
                                )}
                            </>
                        )
                    })}
                </div>
                <div className="epublication-grid-right">
                    <Button text = "Post" />
                </div>
            </div>
        </div>
    )

}