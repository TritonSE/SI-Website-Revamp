/**
 * Additional Navbar rendered only for the Resources page.
 * 
 * @summary     Additional Navbar rendered only for the Resources page.
 * @author      Aaron Kirk
 */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../css/ResourcesNavBar.css";
import {SITE_PAGES} from "../../constants/links";

export default function ResourcesNavBar(props) {

    const newsletters = SITE_PAGES.RESOURCES_NEWSLETTERS;
    const epub = SITE_PAGES.RESOURCES_EPUBS;
    const culture = SITE_PAGES.RESOURCES_BUDDHIST_CULTURE;
    const ordination = SITE_PAGES.RESOURCES_ORDINATION_ISSUE;

    // check page path from props to change color of active nav link
    function isPageActive(pageToCheck) { 
        return pageToCheck === window.location.pathname ? "current" : "";
    }

    return(
        <div>
            <div class="resources-nav">
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