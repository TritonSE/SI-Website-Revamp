/**
 * Renders the responsive Footer component for the general website. Footer is coded to always exist at the end of
 * the page, regardless of how much content exists within the page. This constraint can be seen in PageLayout.js for
 * further information, or when the the height of the Footer is updated in the future.
 *
 * This component has no dependencies (aside from constraint in PageLayout.js), and works independently.
 *
 * @author Amrit Kaur Singh
 */
import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { SITE_PAGES } from "../../constants/links";
import "../../css/Footer.css";

export default function Footer() {
    return (
        <div className="Footer-Main-Container">
            {/* all linked pages in website  */}
            <section className="Footer-Pages">
                <a href={SITE_PAGES.HOME}> Home </a>
                <a href={SITE_PAGES.CONFERENCES}> Conferences </a>
                <a href={SITE_PAGES.RESOURCES_LANDING}> Resouces </a>
                <a href={SITE_PAGES.ABOUT_US}> About Us </a>
                <a href={SITE_PAGES.CONTACT_US}> Contact Us </a>
            </section>
            <section className="Footer-Bottom">
                {/* social media icons + links */}
                <section className="Footer-Social-Media">
                    {/* facebook */}
                    <a href="https://www.facebook.com/">
                        <AiOutlineFacebook
                            style={{ color: "white", borderRadius: "100px" }}
                            onMouseOut={({ target }) => {
                                target.style.color = "white";
                            }}
                            onMouseOver={({ target }) => {
                                target.style.color = "#EA8644";
                            }}
                        />
                    </a>
                    {/* instagram */}
                    <a href="https://www.instagram.com/">
                        <AiOutlineInstagram
                            style={{ color: "white" }}
                            onMouseOut={({ target }) => {
                                target.style.color = "white";
                            }}
                            onMouseOver={({ target }) => {
                                target.style.color = "#EA8644";
                            }}
                        />
                    </a>
                </section>
                {/* site logo */}
                <p> logo </p>
            </section>
        </div>
    );
}
