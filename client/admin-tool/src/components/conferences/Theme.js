import React from "react";
import { TextField } from "@material-ui/core";
import ListViewImages from "./ListViewImages";
import TextEditor from "../TextEditor";

import "../../css/Conferences.css";

const Theme = ({ classes, conferenceItem, handleChange, formDisabled, handleThemeChange }) => {
    console.log(conferenceItem.theme.value);

    return (
        <section className="conferences-theme-section">
            <div className="conferences-conference-title">
                <TextField
                    name="title"
                    value={conferenceItem.title.value}
                    error={conferenceItem.title.error}
                    onChange={(e) => handleChange(e)}
                    disabled={formDisabled}
                    placeholder="Title"
                    InputProps={{
                        classes: {
                            input: classes.resizeTitle,
                        },
                    }}
                    style={{ fontSize: "36px", width: "100%" }}
                    variant="outlined"
                />
                <span className="required-asterisk">*</span>
            </div>

            <div className="conferences-num-location">
                <TextField
                    name="confNum"
                    value={conferenceItem.confNum.value}
                    error={conferenceItem.confNum.error}
                    onChange={(e) => handleChange(e)}
                    placeholder="Conference number"
                    disabled={formDisabled}
                    InputProps={{
                        classes: {
                            input: classes.resizeDetails,
                        },
                    }}
                    style={{ width: "48%" }}
                    variant="outlined"
                />
                <span className="required-asterisk-conf-num"> * </span>

                <TextField
                    name="location"
                    value={conferenceItem.location.value}
                    error={conferenceItem.location.error}
                    onChange={(e) => handleChange(e)}
                    placeholder="Location"
                    disabled={formDisabled}
                    InputProps={{
                        classes: {
                            input: classes.resizeDetails,
                        },
                    }}
                    style={{ width: "48%" }}
                    variant="outlined"
                />
                <span className="required-asterisk-location"> * </span>
            </div>

            <div className="confNum-location-labels">
                <div className="confNum-label">
                    <label>Enter a number for conference Number. Ex) 10</label>
                </div>
                <div className="location-label">
                    <label>
                        Enter the location as comma-seperated items. Ex) University, Beijing, China
                    </label>
                </div>
            </div>

            <div className="conferences-theme-div">
                <h2>Theme</h2>
                <TextEditor
                    editorUpdateCallback={handleThemeChange}
                    initialLoadEditorState={conferenceItem.theme.value}
                    isImagesAllowed={false}
                />
            </div>

            <div className="conferences-signup-div">
                <div className="conferences-signup-header">
                    <h2>Sign-up Redirect</h2>
                    <p>Leave blank if there is no sign up link</p>
                </div>

                <TextField
                    name="signUpLink"
                    value={conferenceItem.signUpLink.value}
                    error={conferenceItem.signUpLink.error}
                    onChange={(e) => handleChange(e)}
                    placeholder="Start writing here "
                    disabled={formDisabled}
                    InputProps={{
                        classes: {
                            input: classes.resizeDetails,
                        },
                    }}
                    style={{ width: "100%" }}
                    variant="outlined"
                />
            </div>

            <div className="conferences-images">
                <div className="conferences-images-header">
                    <h2>Images</h2>
                    <p>One image is required</p>
                </div>
                <ListViewImages
                    items={conferenceItem.slideShowImages.value.urls}
                    error={conferenceItem.slideShowImages.error}
                    classes={classes}
                    handleChange={handleChange}
                    formDisabled={formDisabled}
                />
            </div>
        </section>
    );
};

export default Theme;
