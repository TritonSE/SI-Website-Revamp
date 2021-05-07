import React from "react";
import "../../../css/Conferences.css";

export default function ConferenceTheme(props) {
    const redirect = () => {
        window.location.href(props.redirect);
    };
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
        </div>
    );
}
