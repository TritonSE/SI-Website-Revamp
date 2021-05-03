/**
 * Contains the Sakyadhita logo, name, and subtitle for navbar and footer.
 * By default renders starting from the left for the navbar. If "footer" is
 * passed in for props.location, renders from the right for the footer.
 *
 * @summary     Contains the Sakyadhita logo, name, and subtitle.
 * @author      Aaron Kirk
 */

import React from "react";

import "../../css/Brand.css";
import Logo from "../../media/logo.svg";

export default function Brand(props) {
    let brandStyle = {};
    let textStyle = {};

    // If used in the footer, renders elements in reverse and text from the right
    if (props.location === "footer") {
        brandStyle = { justifyContent: "flex-end", flexDirection: "row-reverse" };
        textStyle = { textAlign: "right" };
    }

    return (
        <a href="/home" className="nav-left" style={brandStyle}>
            <img src={Logo} alt="Logo" id="logo" />
            <div className="branding" style={textStyle}>
                <h3 id="title">sakyadhita</h3>
                <span id="subtitle">international association of buddhist women</span>
            </div>
        </a>
    );
}
