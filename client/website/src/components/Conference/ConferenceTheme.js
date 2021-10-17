/**
 * The ConferenceTheme page only renders the 'theme' information
 * This is a component of the Conferences page
 *
 * Takes in the following props:
 *  - title: required, string
 *  - location: required, string
 *  - redirect: required, string
 *  - theme: required, string
 *
 * @summary     conferences theme component
 * @author      Amitesh Sharma
 */

import React, { useState } from "react";
import Modal from "../Modal";
import "../../css/Conferences.css";

export default function ConferenceTheme(props) {
    // used to control the state of the CustomModal
    const [open, setOpen] = useState(false);

    /**
     * function to set the view state of the modal.
     */
    const redirect = () => setOpen(!open);

    /**
     * Sets the modal view state to false and closes it.
     */
    const hide = () => setOpen(false);

    // determine the height of text depeding on the signup button
    const determineHeight = props.signup ? { maxHeight: "304px" } : { maxHeight: "370px" };

    return (
        <div className="conference-info">
            {/* The title of the conference */}
            {props.title ? (
                <section className="conference-info-title">
                    <h1>{props.title}</h1>
                </section>
            ) : null}

            {/* The location of the conference */}
            <section className="conference-info-location">
                <h3>{props.location}</h3>
            </section>

            {/* Button that opens the modal */}
            {props.signup && !props.isMobile ? (
                <section className="conference-info-signup">
                    {/* When button is clicked, it will render the modal */}
                    <button onClick={() => redirect()} type="button">
                        Sign Up
                    </button>
                </section>
            ) : null}

            {/* The text describing the specific conference */}
            <div
                className="conference-theme-paragraph-div"
                style={props.isMobile ? null : determineHeight}
            >
                <p className="conference-theme-paragraph">{props.theme}</p>
            </div>

            {/* Button that opens the modal */}
            {props.signup && props.isMobile ? (
                <section className="conference-info-signup">
                    {/* When button is clicked, it will render the modal */}
                    <button onClick={() => redirect()} type="button">
                        Sign Up
                    </button>
                </section>
            ) : null}

            {/* The Modal that renders if the signup button is clicked under 'overview' 
            on conferences */}
            <Modal
                open={open}
                hide={hide}
                text="You will be redirected to a new link to sign up for the conference. Do you want to be redirected?"
                url={props.redirect}
            />
        </div>
    );
}
