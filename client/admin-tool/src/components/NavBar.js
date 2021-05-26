import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { SITE_PAGES } from "../constants/links";
import "../css/NavBar.css";

/**
 * Checks first path from props and returns if this is the current first path
 *
 * @param {String} pageToCheck - URL of site to check
 * @returns {boolean} - True if currently on the first path
 */
function isPageActive(pageToCheck) {
    return pageToCheck === window.location.pathname.toLowerCase().split("/")[2];
}

export default function NavBar() {
    const [expanded, setExpanded] = useState("");
    const navRef = useRef(null);

    useEffect(() => {
        // reset expanded if click outside of nav
        function handleClickOutsideNav(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setExpanded("");
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutsideNav);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutsideNav);
        };
    }, [navRef]);

    return (
        <Navbar expand="lg" className="nav-bar-container" ref={navRef}>
            <Container>
                {/* Home Button */}
                <Navbar.Toggle
                    collapseOnSelect
                    aria-controls="responsiv-navbar-nav"
                    onClick={() => {
                        setExpanded(expanded === "home" ? "" : "home");
                    }}
                    className={isPageActive("home") ? "selectedToggleContainer" : ""}
                >
                    Home
                    {expanded === "home" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="28"
                            viewBox="0 0 24 28"
                            fill="none"
                            className="navOrangeArrow"
                        >
                            <path
                                d="M1.90798e-07 14L24 0.143593L24 27.8564L1.90798e-07 14Z"
                                fill="#EA8644"
                            />
                        </svg>
                    )}
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    {expanded === "home" && (
                        <Nav>
                            <Nav.Link href={SITE_PAGES.HOME_NEWS_AND_EVENTS_SLIDER}>
                                News & Events Slider
                            </Nav.Link>
                            <Nav.Link href={SITE_PAGES.HOME_INTRODUCTION}>Introduction</Nav.Link>
                            <Nav.Link href={SITE_PAGES.HOME_BRANCHES_CHAPTERS}>
                                Branches & Chapters
                            </Nav.Link>
                            <Nav.Link href={SITE_PAGES.HOME_ADD_SECTION}>+ Section</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>

                {/* Conferences Button */}
                <Nav.Link
                    href={SITE_PAGES.CONFERENCES}
                    className={isPageActive("conferences") ? "selectedToggleContainer" : ""}
                >
                    Conferences
                </Nav.Link>

                {/* Resources Button */}
                <Navbar.Toggle
                    collapseOnSelect
                    aria-controls="responsiv-navbar-nav"
                    onClick={() => {
                        setExpanded(expanded === "resources" ? "" : "resources");
                    }}
                    className={isPageActive("resources") ? "selectedToggleContainer" : ""}
                >
                    Resources
                    {expanded === "resources" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="28"
                            viewBox="0 0 24 28"
                            fill="none"
                            className="navOrangeArrow"
                        >
                            <path
                                d="M1.90798e-07 14L24 0.143593L24 27.8564L1.90798e-07 14Z"
                                fill="#EA8644"
                            />
                        </svg>
                    )}
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    {expanded === "resources" && (
                        <Nav>
                            <Nav.Link href={SITE_PAGES.RESOURCE_NEWSLETTERS}>Newsletters</Nav.Link>
                            <Nav.Link href={SITE_PAGES.RESOURCE_EPUBS}>E-Publications</Nav.Link>
                            <Nav.Link href={SITE_PAGES.RESOURCE_BUDDHIST_CULTURE}>
                                Buddhist Culture
                            </Nav.Link>
                            <Nav.Link href={SITE_PAGES.RESOURCE_ORDINATION_ISSUE}>
                                Ordination Issue
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>

                {/* About Us Button */}
                <Navbar.Toggle
                    collapseOnSelect
                    aria-controls="responsiv-navbar-nav"
                    onClick={() => {
                        setExpanded(expanded === "aboutus" ? "" : "aboutus");
                    }}
                    className={isPageActive("about") ? "selectedToggleContainer" : ""}
                >
                    About Us
                    {expanded === "aboutus" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="28"
                            viewBox="0 0 24 28"
                            fill="none"
                            className="navOrangeArrow"
                        >
                            <path
                                d="M1.90798e-07 14L24 0.143593L24 27.8564L1.90798e-07 14Z"
                                fill="#EA8644"
                            />
                        </svg>
                    )}
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    {expanded === "aboutus" && (
                        <Nav>
                            <Nav.Link href={SITE_PAGES.ABOUT_EDIT_SECTION}>About Us - All</Nav.Link>
                            <Nav.Link href={SITE_PAGES.ABOUT_EXEC_COMMITTEE}>
                                Executive Committee
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>

                {/* Log Out Button */}
                <Nav.Link className="logout_button">Log Out</Nav.Link>
            </Container>
        </Navbar>
    );
}
