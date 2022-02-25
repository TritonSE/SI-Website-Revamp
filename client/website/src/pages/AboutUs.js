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
// import LotusPink from "../media/lotus-pink.svg";
import DownArrow from "../media/down-arrow.svg";
import Link from "../media/link.svg";

import { fetchExecCommittees, fetchSection } from "../util/requests";
import Loader from "../components/Main/Loader";

const CommitteeSelector = ({
    committees,
    toggleDropdown,
    dropdownOn,
    clickDropdown,
    committeeIndex,
}) => {
    if (committees.length === 0) return null;
    return (
        <div className="dropdown">
            <button type="button" id="dropdown-button" onClick={() => toggleDropdown()}>
                <span>
                    {committees[committeeIndex].startYear}-{committees[committeeIndex].endYear}
                </span>
                <img src={DownArrow} alt="dropdown arrow" />
            </button>
            <div id="dropdown" style={dropdownOn ? null : { display: "none" }}>
                {committees.map((committee, index) => (
                    <button type="button" onClick={() => clickDropdown(committee.startYear, index)}>
                        {committee.startYear}-{committee.endYear}
                    </button>
                ))}
            </div>
        </div>
    );
};

const CommitteeProfiles = ({ committees, year, computeProfileDisplay }) => {
    if (committees.length === 0) return <p id="committee-err">No Committees to Show</p>;
    const data = committees.find((x) => x.startYear === year);
    if (data === undefined) return null;
    const committee = data.data;
    return (
        <div className="profiles" style={computeProfileDisplay(year)}>
            {committee
                .slice(0)
                .reverse()
                .map((member) => (
                    <div className="profile">
                        <img className="headshot" src={member.imageLink} alt="Exec Headshot" />
                        <h2>{member.name}</h2>
                        <div className="position">
                            <div className="link-holder">
                                <a
                                    href={member.redirectLink}
                                    target={member.openInSameTab ? "" : "_blank"}
                                    rel="noreferrer"
                                >
                                    {member.redirectLink === null ? null : (
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    )}
                                </a>
                            </div>
                            <h3>{member.position}</h3>
                        </div>
                        <p>{member.bio}</p>
                    </div>
                ))}
        </div>
    );
};

export default function AboutUs() {
    // Keeps track of the current location for the sticky navbar
    const [scrollLocation, setScrollLocation] = useState("mission");
    // Toggles the dropdown menu for different executive committees
    const [dropdownOn, setDropdownOn] = useState(false);
    // Currently viewed year's executive committee
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const introSection = React.createRef();
    const [committeesSections, setCommitteesSections] = React.useState([]);

    const [year, setYear] = useState();
    const [committees, setCommittees] = useState([]);
    const [committeeIndex, setCommitteeIndex] = useState(0);
    const [loadingCommittees, setLoadingCommittees] = useState(true);

    // fetch committees from backend
    useEffect(async () => {
        setIsLoading(true);
        await (async () => {
            setLoadingCommittees(true);
            const response = await fetchExecCommittees();
            const sections = await fetchSection("AboutUs");

            setCommittees(response);
            setCommitteesSections(sections);

            console.log(response);
            console.log(sections);
            console.log(committeesSections);
            if (response[0]) setYear(response[0].startYear);
            setLoadingCommittees(false);
        })();
        setIsLoading(false);
    }, []);

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
            for(let i = 0; i < committeesSections.length; i++) {
                const idString = committeesSections[i].title.replace(/\s+/g, '-').replace(/:/g,'').replace(/[^a-z0-9]/gi, '').toLowerCase()
                const selected = document.querySelector(`#${idString}`);

                if(selected <= 1)
                    setScrollLocation(committeesSections[i].title)
            }
        });
    }, [committeesSections]);

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
    function clickDropdown(newYear, index) {
        setYear(newYear);
        setCommitteeIndex(index);
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

    function makeIdURLFriendly(idString) {
        return idString.replace(/\s+/g, '-').replace(/:/g,'').replace(/[^a-z0-9-]/gi, '').toLowerCase()
    }

    if(isLoading) {
        return (
            <div
                style={
                    {
                        width: "100vw",
                        height: "100vh",
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                }
            >
                <Loader />
            </div>
        )
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
                        {
                            committeesSections.map(section => 
                                <li className={computeNavUnderline(makeIdURLFriendly(section.title))}>
                                    <a href={`#${makeIdURLFriendly(section.title)}`}> {section.title} </a>
                                </li>
                            )
                        }
                        <li className={computeNavUnderline("exec")}>
                            <a href="#exec"> Excutive Committee </a>
                        </li>
                    </ul>
                    <div className="vbar" />
                </div>
            </div>

            {/* Contents of page */}
            <div className="contents">
                {
                    committeesSections.map(section => 
                        <div className="section">
                            <div className="scroll" id={makeIdURLFriendly(section.title)} />
                            <h1>{section.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: `${section.content}` }} />
                        </div>
                    )
                }

                <div className="divider" />

                {/* Executive Committee Section */}
                <div className="section" id="exec">
                    {/* Anchor for navigation */}
                    <div className="scroll" id="committee" />

                    <h1>Executive Committee</h1>

                    {/* Committee Profiles */}
                    {/* Each year has a different set of profiles */}
                    {/* Profiles will have to be put in reverse order (President goes last) */}

                    {loadingCommittees ? (
                        <Loader />
                    ) : (
                        <>
                            <CommitteeSelector
                                committees={committees}
                                toggleDropdown={toggleDropdown}
                                dropdownOn={dropdownOn}
                                clickDropdown={clickDropdown}
                                committeeIndex={committeeIndex}
                            />
                            <CommitteeProfiles
                                committees={committees}
                                year={year}
                                computeProfileDisplay={computeProfileDisplay}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
