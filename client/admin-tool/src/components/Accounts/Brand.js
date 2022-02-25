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
    return (
        <a className="brand" href="#">
            <img src={Logo} alt="Logo" id="logo" width="250px" />
            <div className="branding">
                <h1 id="title">sakyadhita</h1>
                <span id="subtitle">international association of buddhist women</span>
            </div>
        </a>
    );
}
