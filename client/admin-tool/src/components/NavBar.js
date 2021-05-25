import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { SITE_PAGES } from "../constants/links";
import "../css/NavBar.css";

export default function NavBar() {
    return (
        <Navbar expand="lg" className="nav-bar-container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Home" id="basic-nav-dropdown">
                        <NavDropdown.Item href={SITE_PAGES.HOME_NEWS_AND_EVENTS_SLIDER}>
                            News & Events Slider
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.HOME_INTRODUCTION}>
                            Introduction
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.HOME_BRANCHES_CHAPTERS}>
                            Branches & Chapters
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.HOME_ADD_SECTION}>
                            + Section
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <Nav.Link href={SITE_PAGES.CONFERENCES} className="nav-item">
                        Conferences
                    </Nav.Link>
                    <NavDropdown title="Resources" id="basic-nav-dropdown">
                        <NavDropdown.Item href={SITE_PAGES.RESOURCE_NEWSLETTERS}>
                            Newsletters
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.RESOURCE_EPUBS}>
                            E-Publications
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.RESOURCE_BUDDHIST_CULTURE}>
                            Buddhist Culture
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.RESOURCE_ORDINATION_ISSUE}>
                            Ordination Issue
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown title="About Us" id="basic-nav-dropdown">
                        <NavDropdown.Item href={SITE_PAGES.ABOUT_EDIT_SECTION}>
                            About Us - All
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.ABOUT_EXEC_COMMITTEE}>
                            Executive Committee
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
