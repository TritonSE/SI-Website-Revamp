/**
 * Renders the responsive Footer component for the general website. Footer is coded to display after end of all content,
 * but is not guranteed to be always at the bottom of the page for small content pages.
 *
 * This component has no dependencies, and works independently.
 *
 * @author Amrit Kaur Singh
 */
import React, { useEffect, useState } from "react";
import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { FaGoodreads, FaBloggerB } from "react-icons/fa";
import Brand from "./Brand";
import { SITE_PAGES } from "../../constants/links";
import "../../css/Footer.css";

const FACEBOOK_LINK = "https://www.facebook.com/sakyadhita.international";
const YOUTUBE_LINK = "https://www.youtube.com/channel/UCLOIc4vqaqPKcjaRqmn6-yg/playlists";
const PINTEREST_LINK = "https://www.pinterest.com/sakyadhita/";
const ABW_BLOG_LINK = "http://awakeningbuddhistwomen.blogspot.com/";
const GOODREADS_LINK = "https://www.goodreads.com/group/show/94269-women-in-buddhism";

export default function Footer() {
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

    const facebook = (
        <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
            <AiOutlineFacebook
                title="Facebook"
                style={{ color: "white" }}
                onMouseOut={({ target }) => {
                    target.style.color = "white";
                    target.style.backgroundColor = null;
                }}
                onMouseOver={({ target }) => {
                    target.style.backgroundColor = "#3b5998";
                }}
            />
        </a>
    );

    const youtube = (
        <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
            <AiOutlineYoutube
                title="YouTube"
                style={{ color: "white", borderRadius: "10px" }}
                onMouseOut={({ target }) => {
                    target.style.color = "white";
                    target.style.backgroundColor = null;
                }}
                onMouseOver={({ target }) => {
                    target.style.backgroundColor = "#c4302b";
                }}
            />
        </a>
    );

    const pinterest = (
        <a href={PINTEREST_LINK} target="_blank" rel="noreferrer">
            <ImPinterest2
                title="Pinterest"
                style={{ color: "white", borderRadius: "20px" }}
                onMouseOut={({ target }) => {
                    target.style.color = "white";
                    target.style.backgroundColor = null;
                }}
                onMouseOver={({ target }) => {
                    target.style.backgroundColor = "#E60023";
                }}
            />
        </a>
    );

    const blog = (
        <a href={ABW_BLOG_LINK} target="_blank" rel="noreferrer">
            <FaBloggerB
                title="ABW Blog"
                style={{ color: "white", borderRadius: "20px" }}
                onMouseOut={({ target }) => {
                    target.style.color = "white";
                }}
                onMouseOver={({ target }) => {
                    target.style.color = "#EA8644";
                }}
            />
        </a>
    );

    const goodreads = (
        <a href={GOODREADS_LINK} target="_blank" rel="noreferrer">
            <FaGoodreads
                title="goodreads"
                style={{ color: "white" }}
                onMouseOut={({ target }) => {
                    target.style.color = "white";
                }}
                onMouseOver={({ target }) => {
                    target.style.color = "#e9e5cd";
                }}
            />
        </a>
    );

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
                        <a href={SITE_PAGES.RESOURCES_LANDING}> Resources </a>
                        <a href={SITE_PAGES.ABOUT_US}> About Us </a>
                        <a href={SITE_PAGES.CONTACT_US}> Contact Us </a>
                    </section>
                    <section className="Footer-Bottom">
                        {/* social media icons + links */}
                        <section className="Footer-Social-Media">
                            {facebook}
                            {/* youtube */}
                            {youtube}
                            {/* pinterest */}
                            {pinterest}
                            {/* Blog */}
                            {blog}
                            {/* GoodReads */}
                            {goodreads}
                        </section>
                        {/* site logo */}
                        <Brand location="footer" />
                    </section>
                    <br />
                    <p className="cc-notice">
                        <img src="https://licensebuttons.net/l/by-nc-nd/3.0/80x15.png" />
                        &nbsp; This and all other work by Sakyadhita International Association of
                        Buddhist Women, a registered U.S. 501(c)3 non-profit, is licensed under a{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.en_US"
                        >
                            {" "}
                            Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License
                        </a>
                        . Contact us if inquiries.{" "}
                    </p>
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
                        <div>{facebook}</div>

                        <div>{youtube}</div>

                        <div>{pinterest}</div>

                        <div>{blog}</div>

                        <div>{goodreads}</div>
                    </section>
                </section>
                {/* site logo */}
                <Brand location="footer" />
            </div>
        </div>
    );
}
