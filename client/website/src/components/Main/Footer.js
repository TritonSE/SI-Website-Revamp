/**
 * Renders the responsive Footer component for the general website. Footer is coded to display after end of all content,
 * but is not guranteed to be always at the bottom of the page for small content pages.
 *
 * This component has no dependencies, and works independently.
 *
 * @author Amrit Kaur Singh
 */
import React, { useEffect, useState } from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import Brand from "./Brand";
import { SITE_PAGES } from "../../constants/links";
import "../../css/Footer.css";

export default function Footer() {
    const FACEBOOK_LINK = "https://www.facebook.com/";
    const INSTAGRAM_LINK = "https://www.instagram.com/";

    // max width size that mobile view will be rendered
    const MAX_MOBILE_VIEW_WIDTH = 750;

    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    // track window resizes to determine rerender
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    // desktop rendering
    if (windowSize.width > MAX_MOBILE_VIEW_WIDTH) {
        return (
            // outer relative div is needed so navbar can function properly
            <div style={{ position: "relative" }}>
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
                            <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
                                <AiOutlineFacebook
                                    style={{ color: "white", borderRadius: "20px" }}
                                    onMouseOut={({ target }) => {
                                        target.style.color = "white";
                                    }}
                                    onMouseOver={({ target }) => {
                                        target.style.color = "#EA8644";
                                    }}
                                />
                            </a>
                            {/* instagram */}
                            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
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
                        <Brand location="footer" />
                    </section>
                </div>
            </div>
        );
    }

    // mobile rendering

    return (
        // outer relative div is needed so navbar can function properly
        <div style={{ position: "relative" }}>
            <div className="Footer-Main-Container">
                <section className="Footer-Bottom">
                    {/* all linked pages in website  */}
                    <section className="Footer-Pages">
                        <a href={SITE_PAGES.HOME}> Home </a>
                        <a href={SITE_PAGES.CONFERENCES}> Conferences </a>
                        <a href={SITE_PAGES.RESOURCES_LANDING}> Resources </a>
                        <a href={SITE_PAGES.ABOUT_US}> About Us </a>
                        <a href={SITE_PAGES.CONTACT_US}> Contact Us </a>
                    </section>

                    {/* social media icons + links */}
                    <section className="Footer-Social-Media">
                        {/* facebook */}
                        <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
                            <AiOutlineFacebook
                                style={{ color: "white", borderRadius: "20px" }}
                                onMouseOut={({ target }) => {
                                    target.style.color = "white";
                                }}
                                onMouseOver={({ target }) => {
                                    target.style.color = "#EA8644";
                                }}
                            />
                        </a>
                        {/* instagram */}
                        <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
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
                </section>
                {/* site logo */}
                <Brand location="footer" />
            </div>
        </div>
    );
}
