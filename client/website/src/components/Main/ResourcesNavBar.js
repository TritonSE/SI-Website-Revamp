/**
 * Additional Navbar rendered only for the Resources page.
 * 
 * @summary     Additional Navbar rendered only for the Resources page.
 * @author      Aaron Kirk
 */

import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SITE_PAGES} from "../../constants/links";

import "../../css/ResourcesNavBar.css";
import LeftArrow from "../../media/left-arrow.svg";
import Cross from "../../media/cross.svg";

export default function ResourcesNavBar(props) {

    const newsletters = SITE_PAGES.RESOURCES_NEWSLETTERS;
    const epub = SITE_PAGES.RESOURCES_EPUBS;
    const culture = SITE_PAGES.RESOURCES_BUDDHIST_CULTURE;
    const ordination = SITE_PAGES.RESOURCES_ORDINATION_ISSUE;

    // On mobile, tells the navigation panel whether or not to render
    // Toggles when the slider icon is clicked
    const [navToggled, setNavToggled] = useState(false);

    // Controls the z-index of the entire component so that the navigation panel
    // renders on top of the normal navbar
    const [divStyle, setDivStyle] = useState({zIndex: "auto"});


    /**
     * Handles toggling the navToggled state. Because the slide animation
     * takes 500ms, the divStyle is returned back to normal 500ms after
     * actually closing the Nav.
     */
    function toggleNav() {
        setNavToggled(!navToggled);

        if(!navToggled) setDivStyle({zIndex: "3", position: "relative"});
        else setTimeout(() => {
            setDivStyle({zIndex: "auto"});
        }, 500);
    }

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
        <div style={divStyle}>
            {/* Button to toggle menu on mobile */}
            <div id="left-arrow">
                <img src={LeftArrow} alt="Toggle Resources Navigation" onClick={toggleNav}></img>
            </div>

            <div class={`resources-nav ${navToggled ? "toggled" : ""}`}>
                <img id="cross" src={Cross} onClick={toggleNav} alt="Close Resources Navigation"></img>
                <a class={`resources-link ${isPageActive(newsletters)}`} href={newsletters}>
                    <text>Newsletters</text>
                </a>
                <a class={`resources-link ${isPageActive(epub)}`} href={epub}>
                    <text>E-Publications</text>
                </a>
                <a class={`resources-link ${isPageActive(culture)}`} href={culture}>
                    <text>Buddhist Culture</text>
                </a>
                <a class={`resources-link ${isPageActive(ordination)}`} href={ordination}>
                    <text>Oridnation Issue</text>
                </a>
            </div>

            {/* Allows for remanining page content to be rendered */}
            {props.children}
        </div>
    );
};