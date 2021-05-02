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

    const [navToggled, setNavToggled] = useState(false);

    function toggleNav() {
        setNavToggled(!navToggled);
    }

    // check page path from props to change color of active nav link
    function isPageActive(pageToCheck) { 
        return pageToCheck === window.location.pathname ? "current" : "";
    }

    // controls the z-index of the entire component so that the navigation panel
    // renders on top of the normal navbar
    var divStyle = {zIndex: "auto"};

    if(navToggled) divStyle = {zIndex: "3", position: "relative"};

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