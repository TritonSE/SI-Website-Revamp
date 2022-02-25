/**
 * Renders exactly one section component, including a title textfield, Text Editor,
 * and corresponding actions.
 *
 * This is used in conjunction with SectionWrapper, which is responsible for
 * populating this component with relevent data.
 *
 * @summary Renders One Section Component
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
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import TextEditor from "../TextEditor";
import SectionPopover from "../PopOver";
import Button from "../Button";

import "../../css/SectionItem.css";

/**
 * All params are required
 * @param {JSON} content - A JSON object representing all information to populate this component, including TextEditor
 * @param {bool} newSection - True if this section is a 'Add New' section, false otherwise
 * @param {function} onDeleteCallback - Callback whenever the user wants to delete this section
 * @param {function} onSaveCallback - Callback whenever the user wants to save any changes made to this section. Only called if all required fields are validated first
 *
 * @returns
 */
export default function SectionItem({ content, newSection, onDeleteCallback, onSaveCallback }) {
    /** React States */

    // holds section data
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
    // error message displays
    const [snackbar, handleSnackBar] = React.useState({
        open: false,
        message: "",
    });

    /** Initialization */

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

    /** Functions/Validators */

    // clicked when the user wants to save this section, validating section information and only triggering
    // a callback if information is valid
    const validateData = () => {
        // freeze section, user cannot edit while validation is in progress
        setIsPageDisabled(true);

        let hasErrors = false;
        const errors = { title: false };

        let tempData = {
            title: data["title"],
            content: data["content"],
            isPublished: data["isPublished"],
        };

        tempData.content = draftToHtml(convertToRaw(data["content"].getCurrentContent()));

        // check if all required fields are valid
        Object.keys(errors).forEach((key) => {
            if (tempData[key].length < 1) {
                errors[key] = true;
                hasErrors = true;
            }
        });

        console.log(tempData);

        // update section based on errors encountered
        setDataErrors(errors);
        setIsPageDisabled(false);

        // no errors --> callback with section information passed as a JSON
        if (!hasErrors) onSaveCallback(tempData);
        // errors --> display an error for the user
        else handleSnackBar({ open: true, message: "Error: Missing required fields." });
    };

    // determines which starter HTML code to pass to the TextEditor (buggy otherwise)
    const handleHtmlInitial = () => {
        if (!content || !content["content"]) return EditorState.createEmpty();
        return content["content"];
    };

    /** Styling/Formatting */

    const asterisk = () => <span className="asterisk"> * </span>;

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

    const ColoredSwitch = styled(Switch)(() => ({
        "& .MuiSwitch-switchBase.Mui-checked": {
            color: "var(--darkpurple)",
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "var(--darkpurple)",
        },
    }));

    const classes = useHelperTextStyles();

    return (
        <div style={{ marginLeft: "60px" }}>
            {/* Section Title Field */}
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
            {/* Action Buttons/Clickable For Section */}
            <div className="section-actions">
                {/* Draft/Publish Slider  */}
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
                    {/* Style Infomation  */}
                    <SectionPopover>
                        <b> Header Style: </b>
                        <ul>
                            <li> Font Family: Libre Baskerville </li>
                            <li> Font Size: 32 pt </li>
                        </ul>
                        <b> Content Style: </b>
                        <ul>
                            <li> Font Family: Nunito </li>
                            <li> Font Size: 16 pt </li>
                        </ul>
                    </SectionPopover>
                    {/* Delete Button */}
                    {!newSection && (
                        <Button
                            disabled={isPageDisabled}
                            text="Delete"
                            style={{ marginRight: "10px", backgroundColor: "#EA4444" }}
                            onClickCallback={onDeleteCallback}
                        />
                    )}
                    {/* Save Button  */}
                    <Button
                        disabled={isPageDisabled}
                        text={newSection ? "Post" : "Update"}
                        onClickCallback={validateData}
                    />
                </div>
            </div>
            {/* TextEditor  */}
            <TextEditor
                isDisabled={isPageDisabled}
                initialLoadEditorState={handleHtmlInitial()}
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
