/**
 * Displays News & Events Slider Dialogue on admin tool. It is a reusable dialogue that contains a form
 * structure of the architecture of a News & Event object. It allows a user to either add in a new news & event,
 * or edit an existing one.
 *
 * The component is designed to be customizable, allowing for all form fields to be injected with pre-populated values
 * in case of editing an existing event. It does do form validation once a user
 * attempts to submit (either POST a new event, or UPDATE an existing one), and once validated, it triggers a callback
 * function - passing in the form fields that the user would like to submit.
 *
 *
 * @summary     Allows for event adding/editing.
 * @author      Amrit Kaur Singh
 */

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { Snackbar } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Button from "../../Button";

import "../../../css/NewsEventInfoDialogue.css";

const TITLE_MAX_CHARS = 40;
const DESCRIPTION_MAX_CHARS = 200;

/**
 * All of the following params are required.
 *
 * @param {JSON} content - All information for a particular event. This information is injected to form fields, thereby useful for editing functionality.
 * @param {string} buttonText - The name of the button at the bottom of the dialogue.
 * @param {int} index - The index of the event that is being looked at. Useful for determining slide #.
 * @param {boolean} open - Controls dialogue visibility. True indicates show, false indicates hide.
 * @param {function} handleClose - Callback function called whenever the user wants to close/hide the dialogue.
 * @param {function} buttonClickCallBack - Callback function called whenever the user clicks the form button. Only called if form fields are validated.
 *
 * @returns {Dialogue Object}
 */
export default function NewsEventInfoDialogue({
    content,
    buttonText,
    index,
    open,
    handleClose,
    buttonClickCallBack,
}) {
    // tracks form information
    const [formContent, updateFormContent] = React.useState({
        title: "",
        description: "",
        imageLink: "",
        redirectLink: "",
        openInSameTab: false,
    });

    // true if form is disabled, false if enabled
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);
    // error message displays
    const [snackbar, handleSnackBar] = React.useState({
        open: false,
        message: "",
    });

    // tracks if form has any errors in required fields, and in which fields
    const [formErrors, updateFormErrors] = React.useState({
        title: false,
        imageLink: false,
        redirectLink: false,
    });

    // re-initializes states for each dialogue usage
    React.useEffect(() => {
        // reset any errors
        updateFormErrors({
            title: false,
            imageLink: false,
            redirectLink: false,
        });

        // reset form content
        updateFormContent({
            title: content["title"] || "",
            description: content["description"] || "",
            imageLink: content["imageLink"] || "",
            redirectLink: content["redirectLink"] || "",
            openInSameTab: content["openInSameTab"] || false,
        });

        // enable form
        setIsFormDisabled(false);
    }, [content]);

    const asterisk = () => <span className="asterisk"> * </span>;
    const useHelperTextStyles = makeStyles(() => ({
        helperText: {
            textAlign: "right !important",
            color: "var(--darkorange) !important",
        },
        form: {
            // input field - general layout
            "& .MuiTextField-root": {
                width: "95%",
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

    // tracks form information by updating React State
    const handleFormContentChange = (key) => (event) => {
        if (key === "openInSameTab")
            updateFormContent({ ...formContent, [key]: event.target.checked });
        // checkbox
        else updateFormContent({ ...formContent, [key]: event.target.value });
    };

    // validates form, triggering callback if all fields are valid. otherwise displays error
    const handleFormValidation = async () => {
        // disable form
        setIsFormDisabled(true);

        // tracker for required fields
        const errors = {
            title: false,
            imageLink: false,
            redirectLink: false,
        };

        // loop through all required fields and check if they values
        let doesFormHaveErrors = false;
        Object.keys(errors).forEach((key) => {
            const value = formContent[key];
            if (value.length < 1) {
                doesFormHaveErrors = true;
                errors[key] = true;
            }
        });

        // update errors (if any)
        updateFormErrors(errors);
        // enable form
        setIsFormDisabled(false);

        // callback if no errors were found
        if (!doesFormHaveErrors) {
            buttonClickCallBack(formContent);
        }
        // error message
        else handleSnackBar({ message: "Error: Missing Required Fields", open: true });
    };

    const helperTextStyles = useHelperTextStyles();

    return (
        <Dialog open={open} onClose={handleClose} id="news-event-info-dialogue">
            <DialogContent>
                <div className="info-header">
                    {/* Exit Button */}
                    <FontAwesomeIcon
                        className="slide-icon slide-icon-delete"
                        style={{ fontSize: "18px" }}
                        onClick={handleClose}
                        icon={faTimes}
                    />
                    {/* Slide # */}
                    <p className="slide-num"> Slide #{index + 1}</p>
                </div>

                {/* Form Fields */}
                <form className={helperTextStyles.form} autoComplete="off">
                    {/* Title Field */}
                    <span className="title"> Title </span>
                    {asterisk()}
                    <TextField
                        margin="dense"
                        placeholder="Insert Title"
                        fullWidth
                        variant="outlined"
                        disabled={isFormDisabled}
                        error={formErrors.title}
                        inputProps={{ maxLength: TITLE_MAX_CHARS }}
                        value={formContent.title}
                        helperText={`${formContent.title.length}/${TITLE_MAX_CHARS} charachters`}
                        onChange={handleFormContentChange("title")}
                        FormHelperTextProps={{
                            classes: {
                                root: helperTextStyles.helperText,
                            },
                        }}
                    />
                    {/* Description Field */}
                    <span className="title"> Description </span>
                    <TextField
                        multiline
                        rows={4}
                        margin="dense"
                        disabled={isFormDisabled}
                        placeholder="Type Description Here"
                        fullWidth
                        variant="outlined"
                        inputProps={{ maxLength: DESCRIPTION_MAX_CHARS }}
                        value={formContent.description}
                        helperText={`${formContent.description.length}/${DESCRIPTION_MAX_CHARS} charachters`}
                        onChange={handleFormContentChange("description")}
                        FormHelperTextProps={{
                            classes: {
                                root: helperTextStyles.helperText,
                            },
                        }}
                    />
                    {/* Image Link Field */}
                    <span className="title"> Image </span> {asterisk()}
                    <TextField
                        margin="dense"
                        value={formContent.imageLink}
                        disabled={isFormDisabled}
                        error={formErrors.imageLink}
                        placeholder="Insert Image Link"
                        fullWidth
                        variant="outlined"
                        onChange={handleFormContentChange("imageLink")}
                    />
                    {/* Redirect Link Field */}
                    <span className="title"> Redirect to </span> {asterisk()}
                    <TextField
                        margin="dense"
                        disabled={isFormDisabled}
                        error={formErrors.redirectLink}
                        placeholder="Website or PDF Link"
                        value={formContent.redirectLink}
                        fullWidth
                        variant="outlined"
                        helperText={`To link to a page on Sakyadhita's website, paste page's url link.`}
                        onChange={handleFormContentChange("redirectLink")}
                    />
                    {/* New Tab Open Checkbox */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formContent.openInSameTab}
                                onChange={handleFormContentChange("openInSameTab")}
                                disabled={isFormDisabled}
                                sx={{
                                    "&.Mui-checked": {
                                        color: "var(--darkorange)",
                                    },
                                }}
                            />
                        }
                        label="Open link in same tab"
                    />
                </form>
            </DialogContent>
            {/* Submit Button */}
            <DialogActions>
                <div className="Dialogue-Button">
                    <Button text={buttonText} onClickCallback={handleFormValidation} />
                </div>
            </DialogActions>

            {/* Snackbar for Error Displays */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackBar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </Dialog>
    );
}
