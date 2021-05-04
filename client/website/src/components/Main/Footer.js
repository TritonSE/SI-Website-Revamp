import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { SITE_PAGES } from "../../constants/links";
import "../../css/Footer.css";

export default function Footer() {
    return (
        <div className="Footer-Main-Container">
            <section className="Footer-Pages">
                <a href={SITE_PAGES.HOME}> Home </a>
                <a href={SITE_PAGES.CONFERENCES}> Conferences </a>
                <a href={SITE_PAGES.RESOURCES_LANDING}> Resouces </a>
                <a href={SITE_PAGES.ABOUT_US}> About Us </a>
                <a href={SITE_PAGES.CONTACT_US}> Contact Us </a>
            </section>
            <section className="Footer-Bottom">
                <section className="Footer-Social-Media">
                    <a href="https://material-ui.com/components/icons/">
                        <AiOutlineFacebook
                            style={{ color: "white" }}
                            // onMouseOut={({ target }) => (target.style.color = "white")}
                            // onMouseOver={({ target }) => (target.style.color = "#EA8644")}
                        />
                    </a>
                    <a href="https://material-ui.com/components/icons/">
                        <AiOutlineInstagram
                            style={{ color: "white" }}
                            // onMouseOut={({ target }) => (target.style.color = "white")}
                            // onMouseOver={({ target }) => (target.style.color = "#EA8644")}
                        />
                    </a>
                </section>
                <p> logo </p>
            </section>
        </div>
    );
}
