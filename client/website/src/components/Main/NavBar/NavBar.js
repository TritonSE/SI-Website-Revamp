/**
 * Sticky Navbar for all pages. Contains the Sakyadhita logo, branding, and a
 * hamburger icon to expand the navigation panel. Darkens other page content
 * when navigation is toggled.
 *
 * @summary     Navbar containing hamburger button to toggle navigation.
 * @author      Aaron Kirk
 */

import React, { useState } from "react";

import "../../../css/NavBar.css";
// import Logo from "../../../media/logo.png";
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

    return (
        <div className="NavBar">
            {/* The actual Navigation Bar */}
            {/* Overlay and Nav Panel are outside to allow sticky positioning */}
            <div className="navBar">
                {/* Logo and Branding */}
                <a href="/home" className="nav-left">
                    <img src="" alt="Logo" id="logo" />
                    <div className="branding">
                        <h3 id="title">sakyadhita</h3>
                        <span id="subtitle">international association of buddhist women</span>
                    </div>
                </a>

                {/* Hamburger Button to Toggle Navigation */}
                <button type="button" id="nav-toggle" onClick={toggleNav} onKeyDown={toggleNav}>
                    <img src={Hamburger} alt="Toggle Navigation" />
                </button>
            </div>

            {/* Conditionally Rendered Navigation Panel */}
            {navToggled ? <Nav visible="visible" toggle={toggleNav} /> : <Nav toggle={toggleNav} />}

            {/* Overlay to darken website content when toggled */}
            {navToggled ? <div className="nav-overlay visible" /> : <div className="nav-overlay" />}
        </div>
    );
}
