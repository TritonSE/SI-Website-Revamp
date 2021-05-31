/**
 * This file creates a component for the resources header with an image, title, and description text.
 *
 * @summary Creates a component for resources header
 * @author Dhanush Nanjunda Reddy
 */
import React from "react";
import "../css/ResourcesHeader.css";

export default function ResourcesHeader(props) {
    return (
        <div
            className="header-div"
            style={{
                backgroundImage: `url("${props.image}")`,
                height: props.height,
                width: props.width,
            }}
        >
            {/* Purple box with a title and description */}
            <div className="header-info-div">
                {props.title ? <h1 className="header-text">{props.title}</h1> : null}
                {props.text ? <p className="header-info">{props.text}</p> : null}
            </div>
        </div>
    );
}
