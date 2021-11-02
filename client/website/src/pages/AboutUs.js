/**
 * About page containing content on the mission, history, committees, and
 * founding of Sakyadhita. Also includes a stickied navbar that updates
 * as you scroll through the page.
 *
 * @summary     About page with mission, history, committee, and founding sections.
 * @author      Aaron Kirk
 */

import React, { useState, useEffect } from "react";
import "../css/About.css";

import Header from "../media/lotus-header.svg";
import LotusPink from "../media/lotus-pink.svg";
import DownArrow from "../media/down-arrow.svg";
import Link from "../media/link.svg";
import Founders from "../media/founders.png";

import { fetchExecCommittees } from "../util/requests";
import Loader from "../components/Main/Loader";

const CommitteeSelector = ({committees, toggleDropdown, dropdownOn, clickDropdown, committeeIndex}) => {
    console.log(committees);
    if(committees.length === 0) return null;
    return (
        <div className="dropdown">
            <button type="button" id="dropdown-button" onClick={() => toggleDropdown()}>
                <span>{committees[committeeIndex].startYear}-{committees[committeeIndex].endYear}</span>
                <img src={DownArrow} alt="dropdown arrow" />
            </button>
            <div id="dropdown" style={dropdownOn ? null : { display: "none" }}>
                {
                    committees.map((committee, index) => 
                        <button type="button" onClick={() => clickDropdown(committee.startYear, index)}>
                            {committee.startYear}-{committee.endYear}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

const CommitteeProfiles = ({committees, year, computeProfileDisplay}) => {
    if(committees.length === 0) return null;
    const data = committees.find(x => x.startYear === year);
    if(data === undefined) return null;
    const committee = data.data;
    return (
        <div className="profiles" style={computeProfileDisplay(year)}>
            {
                committee.slice(0).reverse().map(member =>
                    <div className="profile">
                        <img className="headshot" src={member.imageLink} alt="Exec Headshot" />
                        <h2>{member.name}</h2>
                        <h3>{member.position}</h3>
                        <div className="profile-paragraph">
                            <a href={member.redirectLink} target={member.openInSameTab ? "" : "_blank"} rel="noreferrer">
                                {member.redirectLink === null ? null : <img className="profile-link" src={Link} alt="Profile Link" />}
                            </a>
                            <p>{member.bio}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default function AboutUs() {
    // Keeps track of the current location for the sticky navbar
    const [scrollLocation, setScrollLocation] = useState("mission");
    // Toggles the dropdown menu for different executive committees
    const [dropdownOn, setDropdownOn] = useState(false);
    // Currently viewed year's executive committee
    const [year, setYear] = useState("2021");
    const [committees, setCommittees] = useState([]);
    const [committeeIndex, setCommitteeIndex] = useState(0);
    const [loadingCommittees, setLoadingCommittees] = useState(true);

    // Effect to update the sticky nav on scroll
    useEffect(() => {
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

    // fetch committees from backend
    useEffect(async () => {
        await (async () => {
            const response = await fetchExecCommittees();
            setCommittees(response);
            setYear(response[0].startYear);
            setLoadingCommittees(false);
        })();
    }, []);

    /**
     * Compares the desired location to the current scrollLocation to change
     * selected location on sticky nav
     *
     * @param {String} location - desired location to compare against
     * @returns {String} - underline class if desired location matches current
     */
    function computeNavUnderline(location) {
        if (location === scrollLocation) return "underline";
        return "";
    }

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

    return (
        <div className="page">
            {/* Page header with image and title */}
            <div className="header">
                <div className="page-title">About Us</div>
                <img src={Header} alt="Lotus Header" />
            </div>

            {/* Sticky Nav */}
            <div className="slider-wrapper">
                <div className="slider">
                    <ul className="slider-nav">
                        <li className={computeNavUnderline("mission")}>
                            <a href="#mission">Mission & Activities</a>
                        </li>
                        <li className={computeNavUnderline("history")}>
                            <a href="#history">History & Goals</a>
                        </li>
                        <li className={computeNavUnderline("committee")}>
                            <a href="#committee">Executive Committee</a>
                        </li>
                        <li className={computeNavUnderline("founders")}>
                            <a href="#founders">Founding Members</a>
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

                    <h1>Mission & Activities</h1>
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

                    {/* Committee Profiles */}
                    {/* Each year has a different set of profiles */}
                    {/* Profiles will have to be put in reverse order (President goes last) */}

                    {loadingCommittees ? (<Loader />)
                     : (
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