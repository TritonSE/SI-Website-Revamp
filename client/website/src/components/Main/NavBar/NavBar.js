/**
 * Sticky Navbar for all pages. Contains the Sakyadhita logo, branding, and a
 * hamburger icon to expand the navigation panel. Darkens other page content
 * when navigation is toggled.
 * 
 * @summary     Navbar containing hamburger button to toggle navigation.
 * @author      Aaron Kirk
 */

import React, {useState} from "react";

import "../../../css/NavBar.css";
//import Logo from "../../../media/logo.png";
import Hamburger from "../../../media/hamburger.svg";

import Nav from "./Nav";

export default function NavBar() {

    // Tells the navigation panel whether or not to render
    // toggles when the hamburger icon is clicked
    const [navToggled, setNavToggled] = useState(false);

    /**
     * Handles toggling the navToggled state
     */
    function toggleNav() {
        setNavToggled(!navToggled);
    }

    return(
        <div class="NavBar">
            {/* The actual Navigation Bar */}
            {/* Overlay and Nav Panel are outside to allow sticky positioning */}
            <div class="navBar">
                {/* Logo and Branding */}
                <a href="/home" class="nav-left">
                    <img src="" alt="Logo" id="logo"></img>
                    <div class="branding">
                        <h3 id="title">sakyadhita</h3>
                        <span id="subtitle">international association of buddhist women</span>
                    </div>
                </a>

                {/* Hamburger Button to Toggle Navigation */}
                <img src={Hamburger} alt="Toggle Navigation" id="nav-toggle" onClick={toggleNav}></img>
            </div>

            {/* Conditionally Rendered Navigation Panel */}
            {navToggled ? <Nav visible="visible" toggle={toggleNav}></Nav> : <Nav toggle={toggleNav}></Nav>}

            {/* Overlay to darken website content when toggled */}
            {navToggled ? <div class="nav-overlay visible"></div> : <div class="nav-overlay"></div>}
        </div>
    );
};