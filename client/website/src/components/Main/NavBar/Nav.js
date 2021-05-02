/**
 * Navigation panel for main site pages. Slides in and out from the right side
 * of the screen on toggle.
 * 
 * @summary     Navigation panel for main site pages.
 * @author      Aaron Kirk
 */

import React from "react";
import {SITE_PAGES} from "../../../constants/links";

import "../../../css/Nav.css";
import Cross from "../../../media/cross.svg";
 
export default function Nav(props) {

    const home = SITE_PAGES.HOME;
    const conferences = SITE_PAGES.CONFERENCES;
    const resources = SITE_PAGES.RESOURCES_LANDING;
    const about = SITE_PAGES.ABOUT_US;
    const contact = SITE_PAGES.CONTACT_US;

    /**
     * Checks page path from props to change color of the active nav link.
     * 
     * @param {String} pageToCheck - URL of site to check
     * @returns {boolean} - True if currently on the desired page
     */
    function isPageActive(pageToCheck) { 
        return pageToCheck === window.location.pathname ? "current" : "";
    }

    return(
        <div class={`navigation ${props.visible}`}>

            {/* Cross icon to close panel on mobile */}
            <img id="cross" src={Cross} onClick={props.toggle} alt="Close Navigation"></img>

            {/* Nav Links */}
            <a class={`nav-option ${isPageActive(home)}`} href={home}>
                <text>Home</text>
            </a>
            <a class={`nav-option ${isPageActive(conferences)}`} href={conferences}>
                <text>Conferences</text>
            </a>
            <a class={`nav-option ${isPageActive(resources)}`} href={resources}>
                <text>Resources</text>
            </a>
            <a class={`nav-option ${isPageActive(about)}`} href={about}>
                <text>About Us</text>
            </a>
            <a class={`nav-option ${isPageActive(contact)}`} href={contact}>
                <text>Contact Us</text>
            </a>
        </div>
    );
};