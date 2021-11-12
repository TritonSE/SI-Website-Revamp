import React from "react";
import { TextField } from "@material-ui/core";
import ListView from "./ListView";
import "../../css/Conferences.css";

const Overview = ({ classes, conferenceItem, handleChange, formDisabled }) => (
    <section className="conferences-overview-section">
        <div className="conferences-brochures">
            <div className="conferences-brochures-header">
                <h2>Brochures</h2>
            </div>

            <ListView
                items={conferenceItem.brochures.value.data}
                classes={classes}
                handleChange={handleChange}
                keyword="brochures"
                formDisabled={formDisabled}
            />
        </div>

        <div className="conferences-programs">
            <div className="conferences-programs-header">
                <h2>Programs</h2>
            </div>

            <ListView
                items={conferenceItem.programs.value.data}
                classes={classes}
                handleChange={handleChange}
                keyword="programs"
                formDisabled={formDisabled}
            />
        </div>

        <div className="conferences-abstracts">
            <div className="conferences-abstracts-header">
                <h2>Abstracts</h2>
            </div>

            <ListView
                items={conferenceItem.abstracts.value.data}
                classes={classes}
                handleChange={handleChange}
                keyword="abstracts"
                formDisabled={formDisabled}
            />
        </div>

        <div className="conferences-presentations">
            <div className="conferences-presentations-header">
                <h2>Presentations</h2>
            </div>

            <ListView
                items={conferenceItem.presentations.value.data}
                classes={classes}
                handleChange={handleChange}
                keyword="presentations"
                formDisabled={formDisabled}
            />
        </div>

        <div className="conferences-video-div">
            <h2>Video</h2>

            <TextField
                name="video"
                value={conferenceItem.video.value}
                error={conferenceItem.video.error}
                onChange={(e) => handleChange(e)}
                disable={formDisabled}
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
    </section>
);

export default Overview;
