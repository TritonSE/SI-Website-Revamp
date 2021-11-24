/**
 * About page containing content on the mission, history, committees, and
 * founding of Sakyadhita. Also includes a stickied navbar that updates
 * as you scroll through the page.
 *
 * @summary     About page with mission, history, committee, and founding sections.
 * @author      Aaron Kirk
 */

import React, { useState, useEffect } from "react";
import ResourcesHeader from "../components/ResourcesHeader";
import "../css/About.css";
import "../css/animations.css";

import Header from "../media/lotus-header.svg";
import LotusPink from "../media/lotus-pink.svg";
// import Navid from "../media/navid.jpg";
import Amrit from "../media/amrit.jpg";
import Aaron from "../media/sexy.jpg";
import Founders from "../media/founders.png";
import DownArrow from "../media/down-arrow.svg";
import Link from "../media/link.svg";

// demo links
const PRESIDENT_IMG =
    "https://s3-alpha-sig.figma.com/img/a3bc/8780/30eed8e741a683a30ed8f7a9fad07b98?Expires=1623628800&Signature=OaN0W7TZtsx4LnvVr7DeUvQfLPIBAyeIRP0SNgdgpX7ieSWW22bcnoXm2YXtkhdE9iFlDdGIW18bqjsr1U7SD5gcO8lyKTwC0F2Bryyn0Gt8cVFAPYf8lX-bu6U7BK6zjOcfFRNyXwwydGndW04Y4bD6OsHGXF5925jAWpq6fJvfmVPYScYC2kVb4LI3gYglQT40meeltkXJ-Pg-zlzL2OsBFolRB6FFGPPXJYwdbDYOk8tVKUHjEfWbpRrDL-3jV1sIoTTvduFw3q85NL4mPRfYxr2vMx~gggL56hHeI-tLT5BYjTcmD0wjW3oeLAX5C~tZ6qk2v4J67QDpDV8~yA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
const VP_IMG =
    "https://s3-alpha-sig.figma.com/img/49a4/fb12/3a4bca3b8038a0b4e1f514a1e63864a1?Expires=1623628800&Signature=Vg5ZEjaIXJ4knj6MlegNcGeDJv4q5XadiMCp-afOvdsLSdJWna25F3mmrQYT23MNPwPvyZRI7Ga0L5kd3oIJHvlZPgewxDFvoCbVPQDkmOhGI64S1c~8K5pz0CxjUL4nBCp0S0qr0Ynl2Nje-izgVN-X3xh8CktUoT5g-ynQ5J1~IElZoP0HSLP6UlEaRae6Y2SQFz3bHOhUK~5OIeWXHPHHDMAXcgr-uAPbsBI6Rv2jdrZAvIbTKGEBxEOOgCZ3F390zObOcrTFhZjI2jRoYC2A42FhGhL3nEUPPa-PzsUSB2DiASgPyKnVQtwLSqqAiDw3-4AlpdzY58AEhcbULw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
const SECRETARY_IMG =
    "https://s3-alpha-sig.figma.com/img/1ea9/b253/1f1c11ec63457da2fb702e9d13d83625?Expires=1623628800&Signature=MNohndscPkfd2rhPOWuyX1Fygg6DMlnIWa6W3l4OlPsvzvjNEEiY6z6YaXRZ1H5s9KoJCsNkedcsxE0FLAVJwrIBWURQFl2k0Tjk8-uTScVGs6tV~sHC4GKT7PCRjvSsTyaehacDT8iTRX5akL3fgVGou~evJL5kZe46SPLUCXQNGegbbSNubvlTwPFPpJlEuwU8eK5yHTcrjZ90LZhoR9GXpliFVLb-t2Mcm~uIQH2hWWXNSok9IOQF4GCYH9P5uA9Rbf9VmoKp9H2ZQ5DHRd5dRdw8D1jbkPdMSHfN78Af1bpuHB~FYHQQet~PjFpShm0ByfdasRtg3ZlRkSKrtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
const TREASURER_IMG =
    "https://s3-alpha-sig.figma.com/img/6389/021f/c830549123e26f5691128675beaec067?Expires=1623628800&Signature=BEkaqzUNySmevf57u~MwcY5yypfviX-cAFEDm3wc7bELKbP2lkgSt~nNv89fjDZQEDtiTgP9fINJ6wF0J~yLK1ev0S6Z0ODiQoWhfh7YyR-uWJE0ma9sAcnaJuwz9J1ivcud0N9vT19QELV~fORiBQ3HFizCMTEKLIUE4l8DTiJn3ysEKXy2Y6s0jW9hqxZJR3IaJZJUVRV-4qsdj8BkYBVgv9BxhqOQ467UyRcSvmTe8KQVdcWqbPQ2LrfE-8Hjuk0cDKyjPuQRr8LIZ3KZjLUXjkWxC2zCENa3OnAdN-0RCmH95KsObiUh6dddZDcmjqIJbTGdaRsJaCRLjq1Yfg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

export default function AboutUs() {
    // Keeps track of the current location for the sticky navbar
    const [scrollLocation, setScrollLocation] = useState("mission");
    // Toggles the dropdown menu for different executive committees
    const [dropdownOn, setDropdownOn] = useState(false);
    // Currently viewed year's executive committee
    const [year, setYear] = useState("2021");
    const [isMobile, setIsMobile] = useState(false);
    const introSection = React.createRef();

    // Effect to update the sticky nav on scroll
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 600) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        document.querySelector("#page-layout").addEventListener("scroll", () => {
            const mission = document.querySelector("#mission").getBoundingClientRect().top;
            const history = document.querySelector("#history").getBoundingClientRect().top;
            const committee = document.querySelector("#committee").getBoundingClientRect().top;
            const founders = document.querySelector("#founders").getBoundingClientRect().top;

            // Using 1 instead of 0 because sometimes you get decimals when
            // directly moving to the section with anchor tag links
            if (founders <= 1) {
                setScrollLocation("founders");
            } else if (committee <= 1) {
                setScrollLocation("committee");
            } else if (history <= 1) {
                setScrollLocation("history");
            } else if (mission <= 1) {
                setScrollLocation("mission");
            }
        });
    });

    /**
     * Compares the desired location to the current scrollLocation to change
     * selected location on sticky nav
     *
     * @param {String} location - desired location to compare against
     * @returns {String} - underline class if desired location matches current
     */
    function computeNavUnderline(location) {
        if (location === scrollLocation) return "orange-underline";
        return "";
    }

    // Scroll to the first section when clicking arrow button on resource header
    const scrollToSection = () => {
        // only scrolls if element has been rendered on the screen by DOM first
        if (introSection.current) {
            introSection.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    /**
     * Toggles the dropdown state
     */
    function toggleDropdown() {
        setDropdownOn(!dropdownOn);
    }

    /**
     * Changes the currently viewed year for the committee section
     *
     * @param {String} newYear - desired year to view
     */
    function clickDropdown(newYear) {
        setYear(newYear);
        toggleDropdown();
    }

    /**
     * Choose whether or not to render a profile based on the current year
     *
     * @param {String} newYear - the year from which the profile in question belongs
     * @returns {?} - object containing display: none style if not the current year
     */
    function computeProfileDisplay(newYear) {
        if (newYear === year) return null;
        return { display: "none" };
    }

    return (
        <div className="page">
            {isMobile || window.innerHeight <= 500 ? (
                <ResourcesHeader
                    image={Header}
                    title="About Us"
                    height="max(40vh, 300px)"
                    width="100%"
                    showArrow={false}
                    arrowClickCallback={scrollToSection}
                />
            ) : (
                <ResourcesHeader
                    image={Header}
                    title="About Us"
                    text="Working at the grassroots level, Sakyadhita provides a communications network among Buddhist women internationally. We promote research and publications on Buddhist women's history and other topics of interest. Our members strive to create equal opportunities for women in all Buddhist traditions."
                    height="max(75vh, 400px)"
                    width="100%"
                    arrowClickCallback={scrollToSection}
                />
            )}

            {/* Sticky Nav */}
            <div className="slider-wrapper">
                <div className="slider">
                    <ul className="slider-nav">
                        <li>
                            <a href="#mission" ref={introSection}>
                                {" "}
                                <p
                                    className={`hover-underline-animation ${computeNavUnderline(
                                        "mission"
                                    )}`}
                                >
                                    {" "}
                                    Grassroots Efforts{" "}
                                </p>{" "}
                            </a>
                        </li>
                        <li>
                            <a href="#history">
                                {" "}
                                <p
                                    className={`hover-underline-animation ${computeNavUnderline(
                                        "history"
                                    )}`}
                                >
                                    {" "}
                                    History & Goals{" "}
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#committee">
                                <p
                                    className={`hover-underline-animation ${computeNavUnderline(
                                        "committee"
                                    )}`}
                                >
                                    {" "}
                                    Executive Committee{" "}
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#founders">
                                <p
                                    className={`hover-underline-animation ${computeNavUnderline(
                                        "founders"
                                    )}`}
                                >
                                    {" "}
                                    Founding Members{" "}
                                </p>
                            </a>
                        </li>
                    </ul>
                    <div className="vbar" />
                </div>
            </div>

            {/* Contents of page */}
            <div className="contents">
                {/* Mission / Activities Section */}
                <div className="section">
                    {/* Anchor for navigation */}
                    <div className="scroll" id="mission" />

                    <h1>Grassroots Efforts</h1>
                    <p>
                        Working at the grassroots level, Sakyadhita provides a communications
                        network among Buddhist women internationally. We promote research and
                        publications on Buddhist women&apos;s history and other topics of interest.
                        Our members strive to create equal opportunities for women in all Buddhist
                        traditions. We work to empower the world&apos;s 300 million Buddhist women
                        to work for peace and social justice through local branches, the content we
                        offer free of charge online, and through our biannual conferences.
                        <br />
                        <br />
                        This website provides information on Buddhist women and a forum for sharing
                        research, ideas, and experiences.{" "}
                        <b>
                            {" "}
                            Working together Buddhist women are realizing their tremendous potential
                            for social and spiritual transformation!
                        </b>
                        <br />
                        <br />
                        Since 1987, Sakyadhita: International Association of Buddhist Women has been
                        working to benefit Buddhist women around the world. Established at the
                        conclusion of the 1st Sakyadhita Conference in Bodhgaya, India, in 1987, the
                        organization has nearly 2,000 members in 45 countries worldwide.
                        <br />
                        <br />
                        Sakyadhita&apos;s objectives are:
                        <ul>
                            <li>
                                {" "}
                                <p> To establish an international alliance of Buddhist women </p>
                            </li>
                            <li>
                                {" "}
                                <p>
                                    {" "}
                                    To advance the spiritual and secular welfare of the world&apos;s
                                    women{" "}
                                </p>
                            </li>
                            <li>
                                {" "}
                                <p>
                                    {" "}
                                    To work for gender equity in Buddhist education, training
                                    institutional structures, and ordination{" "}
                                </p>
                            </li>
                            <li>
                                {" "}
                                <p>
                                    {" "}
                                    To promote harmony and dialogue among the Buddhist traditions
                                    and other religions{" "}
                                </p>
                            </li>
                            <li>
                                {" "}
                                <p>
                                    {" "}
                                    To encourage research and publications on topics of interest to
                                    Buddhist women{" "}
                                </p>
                            </li>
                            <li>
                                {" "}
                                <p>
                                    {" "}
                                    To foster compassionate social action for the benefit of
                                    humanity{" "}
                                </p>
                            </li>
                            <li>
                                {" "}
                                <p> To promote world peace through the teachings of the Buddha </p>
                            </li>
                        </ul>
                    </p>
                    <img src={LotusPink} alt="Mission & Activities" />
                </div>

                <div className="divider" />

                {/* History / Goals Section */}
                <div className="section">
                    {/* Anchor for navigation */}
                    <div className="scroll" id="history" />

                    <h1>History & Goals</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, distinctio
                        sequi? Ducimus qui, sequi nulla esse aperiam commodi, voluptates officiis
                        consequatur atque similique, velit provident dolor non eum possimus. Aut
                        unde tempora molestias nobis sunt. Pariatur nesciunt quae non adipisci unde
                        reiciendis, nulla perspiciatis temporibus aliquam tempora similique iure
                        quasi reprehenderit sed velit culpa porro est blanditiis fugit alias
                        necessitatibus quaerat quia. Aspernatur, repellat ad. Sunt repellendus
                        nostrum, ratione iste animi cum sint sit, maxime enim voluptate iure est
                        consequuntur atque ea. Nulla veniam voluptates amet placeat pariatur error
                        itaque ipsum libero obcaecati! Exercitationem laboriosam animi culpa! Quod
                        sit, accusamus inventore esse provident totam? Eum aperiam aliquid deleniti
                        incidunt aliquam. Rerum animi in deserunt nostrum, sapiente quis maxime
                        asperiores quos iusto adipisci, nam ipsum sequi! Asperiores deleniti
                        praesentium ad rem mollitia, eligendi ducimus saepe quisquam? Ratione
                        mollitia voluptate ipsum praesentium similique, consequatur asperiores
                        voluptatibus repellat aperiam a ipsa eaque earum harum aliquid nam,
                        perspiciatis numquam ullam odit cupiditate laudantium ab. Exercitationem
                        adipisci illo quos ea aliquam sed, id temporibus incidunt, tempora, laborum
                        molestiae blanditiis ducimus!
                    </p>
                    <img src={LotusPink} alt="History & Goals" />
                </div>

                <div className="divider" />

                {/* Executive Committee Section */}
                <div className="section" id="exec">
                    {/* Anchor for navigation */}
                    <div className="scroll" id="committee" />

                    <h1>Executive Committee</h1>

                    {/* Dropdown to view committees from different years */}
                    <div className="dropdown">
                        <button type="button" id="dropdown-button" onClick={() => toggleDropdown()}>
                            <span>{year}</span>
                            <img src={DownArrow} alt="dropdown arrow" />
                        </button>
                        <div id="dropdown" style={dropdownOn ? null : { display: "none" }}>
                            <button type="button" onClick={() => clickDropdown("2021")}>
                                2021
                            </button>
                            <button type="button" onClick={() => clickDropdown("2020")}>
                                2020
                            </button>
                            <button type="button" onClick={() => clickDropdown("2019")}>
                                2019
                            </button>
                            <button type="button" onClick={() => clickDropdown("2018")}>
                                2018
                            </button>
                        </div>
                    </div>

                    {/* Committee Profiles */}
                    {/* Each year has a different set of profiles */}
                    {/* Profiles will have to be put in reverse order (President goes last) */}

                    {/* 2021 Profiles */}
                    <div className="profiles" style={computeProfileDisplay("2021")}>
                        <div className="profile">
                            <img className="headshot" src={VP_IMG} alt="Exec Headshot" />
                            <h2>Alex Pot</h2>
                            <h3>Publicist</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={TREASURER_IMG} alt="Exec Headshot" />
                            <h2>Tori Vega</h2>
                            <h3>Treasurer</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={SECRETARY_IMG} alt="Exec Headshot" />
                            <h2>Cat Valentine</h2>
                            <h3>Secretary</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={VP_IMG} alt="Exec Headshot" />
                            <h2>Sam Puckett</h2>
                            <h3>Vice President</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={PRESIDENT_IMG} alt="Exec Headshot" />
                            <h2>Carly Shay</h2>
                            <h3>President</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2020 Profiles */}
                    <div className="profiles" style={computeProfileDisplay("2020")}>
                        <div className="profile">
                            <img className="headshot" src={Amrit} alt="Exec Headshot" />
                            <h2>Amrit K. Singh</h2>
                            <h3>Total Beast 1</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={Amrit} alt="Exec Headshot" />
                            <h2>Amrit K. Singh</h2>
                            <h3>Total Beast 2</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={Amrit} alt="Exec Headshot" />
                            <h2>Amrit K. Singh</h2>
                            <h3>Total Beast 3</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={Amrit} alt="Exec Headshot" />
                            <h2>Amrit K. Singh</h2>
                            <h3>Total Beast 4</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2019 Profiles */}
                    <div className="profiles" style={computeProfileDisplay("2019")}>
                        <div className="profile">
                            <img className="headshot" src={Aaron} alt="Exec Headshot" />
                            <h2>Too Lazy For</h2>
                            <h3>Originality</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={Aaron} alt="Exec Headshot" />
                            <h2>Too Lazy For</h2>
                            <h3>Originality</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={Aaron} alt="Exec Headshot" />
                            <h2>Too Lazy For</h2>
                            <h3>Originality</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2018 Profiles */}
                    <div className="profiles" style={computeProfileDisplay("2018")}>
                        <div className="profile">
                            <img className="headshot" src={Aaron} alt="Exec Headshot" />
                            <h2>Too Lazy For</h2>
                            <h3>Originality</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                        <div className="profile">
                            <img className="headshot" src={Aaron} alt="Exec Headshot" />
                            <h2>Too Lazy For</h2>
                            <h3>Originality</h3>
                            <div className="profile-paragraph">
                                <a href="/about">
                                    <img className="profile-link" src={Link} alt="Profile Link" />
                                </a>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                    nesciunt rem quo dolor voluptas magnam aliquam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider" />

                {/* Founding Section */}
                <div className="section" id="founding">
                    {/* Anchor for navigation */}
                    <div className="scroll" id="founders" />

                    <h1>Founding Members</h1>
                    <img src={Founders} alt="Founding Members" />
                    <h2>
                        <span id="year">
                            1987
                            <br />
                        </span>
                        <span id="conference">1st Sakyadhita Conference, 1987</span>
                        <span id="conference-mobile">1st Sakyadhita Conference</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis
                        condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula
                        eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat
                        arcu, in efficitur sem tortor vel lectus. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet
                        lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed
                        porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem
                        tortor vel lectus.
                    </p>
                </div>
            </div>
        </div>
    );
}
