import React from "react";
import { TextField } from "@material-ui/core";
import ListViewImages from "./ListViewImages";

import "../../css/Conferences.css";

const Theme = ({ classes, conferenceItem, handleChange }) => (
    <section className="conferences-theme-section">
        <div className="conferences-title">
            <TextField
                name="title"
                value={conferenceItem.title.value}
                error={conferenceItem.title.error}
                onChange={(e) => handleChange(e)}
                placeholder="Title"
                InputProps={{
                    classes: {
                        input: classes.resizeTitle,
                    },
                }}
                style={{ fontSize: "36px", width: "100%" }}
                // disabled={isFormDisabled}
                variant="outlined"
            />
        </div>

        <div className="conferences-num-location">
            <TextField
                name="confNum"
                value={conferenceItem.confNum.value}
                error={conferenceItem.confNum.error}
                onChange={(e) => handleChange(e)}
                placeholder="Conference number"
                InputProps={{
                    classes: {
                        input: classes.resizeDetails,
                    },
                }}
                style={{ width: "45%" }}
                // disabled={isFormDisabled}
                variant="outlined"
            />

            <TextField
                name="location"
                value={conferenceItem.location.value}
                error={conferenceItem.location.error}
                onChange={(e) => handleChange(e)}
                placeholder="Location"
                InputProps={{
                    classes: {
                        input: classes.resizeDetails,
                    },
                }}
                style={{ width: "45%" }}
                // disabled={isFormDisabled}
                variant="outlined"
            />
        </div>

        <div className="conferences-theme-div">
            <h2>Theme</h2>

            <TextField
                name="theme"
                value={conferenceItem.theme.value}
                rows={8}
                multiline
                error={conferenceItem.theme.error}
                onChange={(e) => handleChange(e)}
                placeholder="Start writing here "
                InputProps={{
                    classes: {
                        input: classes.resizeDetails,
                    },
                }}
                style={{ width: "100%" }}
                // disabled={isFormDisabled}
                variant="outlined"
            />
        </div>

        <div className="conferences-signup-div">
            <div className="conferences-signup-header">
                <h2>Sign-up Redirect</h2>
                <p>Leave black if there is no sign up link</p>
            </div>

            <TextField
                name="theme"
                value={conferenceItem.signUpLink.value}
                error={conferenceItem.signUpLink.error}
                onChange={(e) => handleChange(e)}
                placeholder="Start writing here "
                InputProps={{
                    classes: {
                        input: classes.resizeDetails,
                    },
                }}
                style={{ width: "100%" }}
                // disabled={isFormDisabled}
                variant="outlined"
            />
        </div>

        <div className="conferences-images">
            <div className="conferences-images-header">
                <h2>Images</h2>
            </div>
            <ListViewImages
                items={conferenceItem.slideShowImages.value.urls}
                classes={classes}
                handleChange={handleChange}
            />
        </div>
    </section>
);

export default Theme;
