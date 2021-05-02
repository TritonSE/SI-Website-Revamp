import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { SITE_PAGES } from "../../constants/links";

export default function NavBar(props) {
    return (
        <div>
            <Navbar expand="lg" style={{ backgroundColor: "#EA8644" }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="mr-auto justify-content-center"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        <Nav.Link href={SITE_PAGES.RESOURCES_NEWSLETTERS}>Newsletters</Nav.Link>
                        <Nav.Link href={SITE_PAGES.RESOURCES_EPUBS}>E-Publications</Nav.Link>
                        <Nav.Link href={SITE_PAGES.RESOURCES_BUDDHIST_CULTURE}>
                            Buddhist Culture
                        </Nav.Link>
                        <Nav.Link href={SITE_PAGES.RESOURCES_ORDINATION_ISSUE}>
                            Ordination Issue
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* Allows for remanining page content to be rendered */}
            {props.children}
        </div>
    );
}
