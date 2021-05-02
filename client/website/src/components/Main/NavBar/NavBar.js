/**
 * Navbar for all pages. Contains the Sakyadhita logo, branding, and a
 * hamburger icon to expand the navigation panel.
 * 
 * @summary     Navbar containing hamburger button to toggle navigation.
 * @author      Aaron Kirk
 */

import React, {useState} from "react";
import {SITE_PAGES} from "../../../constants/links";

import "../../../css/NavBar.css";
//import Logo from "../../../media/logo.png";
import Hamburger from "../../../media/hamburger.svg";

import Nav from "./Nav";

export default function NavBar() {

    const [navToggled, setNavToggled] = useState(false);

    function toggleNav() {
        setNavToggled(!navToggled);
    }

    return(
        <div class="navBar">
            {/* Logo and Branding */}
            <div class="nav-left">
                <img src="" alt="Logo" id="logo"></img>
                <div class="branding">
                    <h3 id="title">sakyadhita</h3>
                    <span id="subtitle">international association of buddhist women</span>
                </div>
            </div>

            {/* Hamburger Button to Toggle Navigation */}
            <img src={Hamburger} alt="Toggle Navigation" id="nav-toggle" onClick={toggleNav}></img>

            {/* Conditionally Rendered Navigation Panel */}
            {navToggled ? <Nav visible="visible"></Nav> : <Nav></Nav>}

        </div>
    );
};