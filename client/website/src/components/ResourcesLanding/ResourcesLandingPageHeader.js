/**
 * This file creates a component for the resources header with an image, title, and description text.
 *
 * @summary Creates a component for resources header
 * @author Dhanush Nanjunda Reddy
 */
import React from "react";
import "../../css/ResourcesLanding/ResourcesLandingPageHeader.css";

export default function ResourcesLandingPageHeader({ image, height, width, title, text }) {
    return (
        <div
            className="resources-landing-page-header-div"
            style={{
                backgroundImage: `url("${image}")`,
                height,
                width,
            }}
        >
            {/* Purple box with a title and description */}
            <div className="resources-landing-page-header-info-div">
                {title ? <h1 className="resources-landing-page-header-text">{title}</h1> : null}
                {text ? <p className="resources-landing-page-header-info">{text}</p> : null}
            </div>
        </div>
    );
}
