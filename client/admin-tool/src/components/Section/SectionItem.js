/**
 * Reusable button for the admin page. Allows for customization
 * as needed.
 *
 * By default, renders as orange with white text.
 *
 * @summary Customizable Button Component
 * @author  Amrit Singh
 */
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Snackbar } from "@material-ui/core";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import TextEditor from "../TextEditor";
import SectionPopover from "../PopOver";
import Button from "../Button";

import "../../css/SectionItem.css";

/**
 *
 * @param {string} text - Button content as it will be shown to the user
 * @param {function} onClickCallback - Function will be callbacked whenever the button is clicked
 * @param {JSON} style - Any in-line css customizations on the button
 * @returns
 */
export default function SectionItem({ content, newSection, onDeleteCallback, onSaveCallback }) {
    const asterisk = () => <span className="asterisk"> * </span>;
    const [data, setData] = React.useState({
        title: "",
        content: "",
        isPublished: false,
    });

    const [dataErrors, setDataErrors] = React.useState({
        title: false,
    });

    const [isPageDisabled, setIsPageDisabled] = React.useState(false);

    // error message displays
    const [snackbar, handleSnackBar] = React.useState({
        open: false,
        message: "",
    });

    // re-initializes states for each dialogue usage
    React.useEffect(() => {
        if (!content) return;

        // reset any errors
        setDataErrors({
            title: false,
        });

        // reset form content
        setData({
            title: content["title"] || "",
            content: content["content"] || "",
            isPublished: content["isPublished"] || false,
        });

        // enable form
        setIsPageDisabled(false);
    }, [content]);

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

    const validateData = () => {
        setIsPageDisabled(true);

        let hasErrors = false;
        const errors = { title: false };

        Object.keys(errors).forEach((key) => {
            if (data[key].length < 1) {
                errors[key] = true;
                hasErrors = true;
            }
        });

        setDataErrors(errors);
        setIsPageDisabled(false);

        if (!hasErrors) onSaveCallback(data);
        else handleSnackBar({ open: true, message: "Error: Missing required fields." });
    };

    const ColoredSwitch = styled(Switch)(() => ({
        "& .MuiSwitch-switchBase.Mui-checked": {
            color: "var(--darkpurple)",
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "var(--darkpurple)",
        },
    }));

    const classes = useHelperTextStyles();

    const handleHtmlInitial = () => {
        if (!content || !content["content"]) return "<p></p>";
        return content["content"];
    };

    return (
        <div style={{ marginLeft: "60px" }}>
            <span className="title"> Section Title </span> {asterisk()}
            <TextField
                margin="dense"
                value={data.title}
                disabled={isPageDisabled}
                error={dataErrors.title}
                placeholder="Insert Title"
                fullWidth
                variant="outlined"
                className={classes.root}
                onChange={(event) => setData({ ...data, title: event.target.value })}
            />
            <br />
            <br />
            <br />
            <div className="section-actions">
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Draft</Typography>
                    <ColoredSwitch
                        disabled={isPageDisabled}
                        checked={data.isPublished}
                        onChange={(event) =>
                            setData({ ...data, isPublished: event.target.checked })
                        }
                    />
                    <Typography>Published</Typography>
                </Stack>
                <div className="section-actions-right">
                    <SectionPopover>
                        <b> Header Style: </b>
                        <ul>
                            <li> Font Family: Libre Baskerville </li>
                            <li>  Font Size: 32 pt </li>
                        </ul>
                        <b> Content Style: </b>
                        <ul>
                            <li> Font Family: Nunito </li>
                            <li>  Font Size: 16 pt </li>
                        </ul>
                    </SectionPopover>
                    {!newSection && (
                        <Button
                            disabled={isPageDisabled}
                            text="Delete"
                            style={{ marginRight: "10px", backgroundColor: "#EA4444" }}
                            onClickCallback={onDeleteCallback}
                        />
                    )}
                    <Button
                        disabled={isPageDisabled}
                        text={newSection ? "Post" : "Update"}
                        onClickCallback={validateData}
                    />
                </div>
            </div>
            <TextEditor
                isDisabled={isPageDisabled}
                initialHtmlLoadStr={handleHtmlInitial()}
                editorUpdateCallback={(updatedHtml) => setData({ ...data, content: updatedHtml })}
            />
            {/* Snackbar for Error Displays */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackBar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    );
}
