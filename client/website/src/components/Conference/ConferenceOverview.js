/**
 * The ConferenceOverview page only renders the 'overview' information
 * This is a component of the Conferences page
 *
 * Takes in the following props:
 *  - title: required, string
 *  - item: required, object consisting of:
 *      - url: required, string
 *      - description: required, string
 *
 * @summary     conferences theme component
 * @author      Amitesh Sharma
 */

import React from "react";
import "../../css/Conferences.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ConferenceOverview(props) {
    const items = props.info;

    // Convert each item in the props.info to a <a> tag
    const itemList = (item) => (
        <div className="program-divider">
            {item.map((program) => (
                <a href={program.url} download className="program">
                    <FontAwesomeIcon icon={faDownload} />
                    <p>{program.description}</p>
                </a>
            ))}
        </div>
    );

    return (
        <div className="conference-info">
            {/* The title of the conference */}
            <section className="conference-info-title">
                <h1>{props.title}</h1>
            </section>

            {/* Header section for file downloads */}
            <section className="conference-info-resource-title">
                <h4>Conference resources are available for download as a PDF.</h4>
            </section>

            <div className="conference-info-divider">Programs</div>
            {itemList(items.programs)}

            <div className="conference-info-divider">Presentations</div>
            {itemList(items.presentations)}

            <div className="conference-info-divider">Abstracts</div>
            {itemList(items.abstracts)}
        </div>
    );
}
