/**
 * Navigation panel for main site pages. Slides in and out from the right side
 * of the screen on toggle.
 * 
 * @summary     Navigation panel for main site pages.
 * @author      Aaron Kirk
 */

import React from "react";
import "../../../css/Nav.css";
import {SITE_PAGES} from "../../../constants/links";
 
export default function Nav(props) {

    const home = SITE_PAGES.HOME;
    const conferences = SITE_PAGES.CONFERENCES;
    const resources = SITE_PAGES.RESOURCES_LANDING;
    const about = SITE_PAGES.ABOUT_US;
    const contact = SITE_PAGES.CONTACT_US;

    // check current page directly to change color of active nav link
    function isPageActive(pageToCheck) { 
        return pageToCheck === window.location.pathname ? "current" : "";
    }

    return(
        <div class={`navigation ${props.visible}`}>
            <a class={`nav-option ${isPageActive(home)}`} href={home}>
                Home
            </a>
            <a class={`nav-option ${isPageActive(conferences)}`} href={conferences}>
                Conferences
            </a>
            <a class={`nav-option ${isPageActive(resources)}`} href={resources}>
                Resources
            </a>
            <a class={`nav-option ${isPageActive(about)}`} href={about}>
                About Us
            </a>
            <a class={`nav-option ${isPageActive(contact)}`} href={contact}>
                Contact Us
            </a>
        </div>
    );
};