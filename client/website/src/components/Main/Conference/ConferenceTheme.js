import React, { useState } from "react";
import Modal from "../Modal";
import "../../../css/Conferences.css";

export default function ConferenceTheme(props) {
    const [open, setOpen] = useState(false);

    const redirect = () => {
        setOpen(!open);
    };

    const hide = () => setOpen(false);

    return (
        <div className="conference-info">
            <section className="conference-info-title">
                <h1>{props.title}</h1>
            </section>

            <section className="conference-info-location">
                <h3>{props.location}</h3>
            </section>

            <section className="conference-info-signup">
                <button onClick={() => redirect()} type="button">
                    Sign Up
                </button>
            </section>

            <p>{props.theme} </p>

            <Modal open={open} hide={hide} />
        </div>
    );
}
