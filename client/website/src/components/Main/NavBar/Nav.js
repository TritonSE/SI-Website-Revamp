/**
 * Navigation panel for all pages. Contains the Sakyadhita logo, branding, and a
 * hamburger icon to expand the navigation panel.
 * 
 * @summary     Navbar containing hamburger button to toggle navigation.
 * @author      Aaron Kirk
 */

import React from "react";
import "../../../css/Nav.css";
import {SITE_PAGES} from "../../../constants/links";
 
export default function Nav(props) {

    return(
        <div class={`navigation ${props.visible}`}>
            <a class="nav-option" href={SITE_PAGES.HOME}>Home</a>
            <a class="nav-option" href={SITE_PAGES.CONFERENCES}>Conferences</a>
            <a class="nav-option" href="">Resources</a>
            <a class="nav-option" href={SITE_PAGES.ABOUT_US}>About Us</a>
            <a class="nav-option" href={SITE_PAGES.CONTACT_US}>Contact Us</a>
        </div>
    );
};