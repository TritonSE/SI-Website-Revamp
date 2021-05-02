import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { SITE_PAGES } from "../../constants/links";

export default function NavBar() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "#8477B9", color: "black" }}>
            <Navbar.Brand href="/">Sakyadhita</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href={SITE_PAGES.HOME}>Home</Nav.Link>
                    <Nav.Link href={SITE_PAGES.CONFERENCES}>Conferences</Nav.Link>
                    <NavDropdown title="Resources" id="basic-nav-dropdown">
                        <NavDropdown.Item href={SITE_PAGES.RESOURCES_LANDING}>
                            General
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.RESOURCES_NEWSLETTERS}>
                            Newsletters
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.RESOURCES_EPUBS}>
                            E-Publications
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.RESOURCES_BUDDHIST_CULTURE}>
                            Buddhist Culture
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={SITE_PAGES.RESOURCES_ORDINATION_ISSUE}>
                            Ordination Issue
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href={SITE_PAGES.ABOUT_US}>About Us</Nav.Link>
                    <Nav.Link href={SITE_PAGES.CONTACT_US}>Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
