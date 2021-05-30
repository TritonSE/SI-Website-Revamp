/**
 * This file creates a component for the resources header with an image, title, and description text.
 *
 * @summary Creates a component for resources header
 * @author Dhanush Nanjunda Reddy
 */
import React from "react";
import "../../css/ImageHeader.css";

export default function ImageHeader(props) {
    return (
        <div
            className="contact-image-header"
            style={{
                backgroundImage: `url("${props.image}")`,
                height: props.height,
                width: props.width,
            }}
        >
            {props.title ? (
                <div className="info-wrapper">
                    <h1 className="info-title">{props.title}</h1>
                </div>
            ) : null}
        </div>
    );
}
