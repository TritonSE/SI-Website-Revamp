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
// import LotusPink from "../media/lotus-pink.svg";
import DownArrow from "../media/down-arrow.svg";
import Link from "../media/link.svg";

import { fetchExecCommittees } from "../util/requests";
import Loader from "../components/Main/Loader";

const Cat =
    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1";

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
    if (committees.length === 0) return <h2 id="committee-err">No Executive Committees to Show</h2>;
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
    const [year, setYear] = useState();
    const [committees, setCommittees] = useState([]);
    const [committeeIndex, setCommitteeIndex] = useState(0);
    const [loadingCommittees, setLoadingCommittees] = useState(true);

    // Effect to update the sticky nav on scroll
    useEffect(() => {
        document.querySelector("#page-layout").addEventListener("scroll", () => {
            const mission = document.querySelector("#mission").getBoundingClientRect().top;
            const grassroots = document.querySelector("#grassroots").getBoundingClientRect().top;
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
            } else if (grassroots <= 1) {
                setScrollLocation("grassroots");
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
            if (response[0]) setYear(response[0].startYear);
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
                            <a href="#mission"> Mission & Vision </a>
                        </li>
                        <li className={computeNavUnderline("grassroots")}>
                            <a href="#grassroots"> Grassroots Efforts </a>
                        </li>
                        <li className={computeNavUnderline("history")}>
                            <a href="#history"> A Brief History </a>
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

                    <h1> Mission & Vision </h1>
                    <p>
                        Since 1987, Sakyadhita: International Association of Buddhist Women has been
                        working to benefit Buddhist women around the world. Established at the
                        conclusion of the 1st Sakyadhita Conference in Bodhgaya, India, in 1987, the
                        organization has nearly 2,000 members in 45 countries worldwide.
                        <br />
                        <br />
                        Laywomen and monastics from around the world come together every two years
                        to share their experiences and encourage projects that improve conditions
                        for Buddhist women, especially in developing countries.
                        <br />
                        <br />
                        The 13th Sakyadhita International Conference on Buddhist Women was held in
                        early January 2013, in Vaishali, Bihar, India, where the Buddha&apos;s
                        aunt/stepmother Mahapajapati Gotami became the first woman to receive
                        ordination.
                        <br />
                        <br />
                        Sakyadhita&apos;s objectives are:
                    </p>
                    <p style={{ width: "90%" }}>
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

                    <img
                        src="https://www.dropbox.com/s/v7nzzd4efi25z34/Mission.jpg?raw=1"
                        height="500px"
                        alt="History & Goals"
                    />
                    <figcaption>
                        {" "}
                        <i>
                            {" "}
                            Jetsunma Tenzin Palmo at the 13th Sakyadhita International Conference,
                            2013
                        </i>
                    </figcaption>
                </div>

                <div className="divider" />

                <div className="section">
                    {/* Anchor for navigation */}
                    <div className="scroll" id="grassroots" />

                    <h1>Grassroots Efforts </h1>
                    <p>
                        Working at the grassroots level, Sakyadhita provides a communications
                        network among Buddhist women internationally. We promote research and
                        publications on Buddhist women&apos;s history and other topics of interest.
                        Our members strive to create equal opportunities for women in all Buddhist
                        traditions. We work to empower the world&apos; 300 million Buddhist women to
                        work for peace and social justice through local branches, the content we
                        offer free of charge online, and through our biannual conferences.
                        <br />
                        <br />
                        This website provides information on Buddhist women and a forum for sharing
                        research, ideas, and experiences.{" "}
                        <b>
                            {" "}
                            Working together Buddhist women are realizing their tremendous potential
                            for social and spiritual transformation!{" "}
                        </b>
                        <br />
                        <br />
                        Since 1987, Sakyadhita: International Association of Buddhist Women has been
                        working to benefit Buddhist women around the world. Established at the
                        conclusion of the 1st Sakyadhita Conference in Bodhgaya, India, in 1987, the
                        organization has nearly 2,000 members in 45 countries worldwide.
                    </p>
                    <img
                        src="https://www.dropbox.com/s/d4rx1j2c5y0b0mq/Grassroots%20Efforts.jpg?raw=1"
                        height="500px"
                        alt="Mission & Activities"
                    />
                    <figcaption>
                        {" "}
                        <i> 13th International Sakyadhita Conference in Vaishali, India in 2013 </i>
                    </figcaption>
                </div>

                {/* History / Goals Section */}

                <div className="divider" />

                <div className="section">
                    {/* Anchor for navigation */}
                    <div className="scroll" id="history" />

                    <h1>A Brief History </h1>
                    <p>
                        The name Sakyadhita means “Daughter of the Buddha.” Based on Pali and
                        Sanskrit, two ancient Buddhist languages, the term was coined at the first
                        international gathering of Buddhist women held in Bodhgaya, India, in 1987.
                        <br />
                        <br />
                        Sakyadhita International was formed that year, at the conclusion of a truly
                        historic gathering, as an independent non-governmental organization. The aim
                        was to work together to benefit Buddhist women, to reduce gender injustice,
                        and awaken women to their potential for awakening the world.
                        <br />
                        <br />
                        Since 1987, through a series of biennial international conferences,
                        Sakyadhita has worked for gender equity in Buddhist communities, focusing
                        especially on improving opportunities for women in education, health,
                        spiritual practice, and ordination. Encouraged by Sakyadhita, members have
                        established retreat centers, education projects, women’s shelters, and
                        initiated translation, research, and publication projects.
                        <br />
                        <br />
                        Sakyadhita links Buddhist women with similar initiatives in other countries
                        around the world to encourage cooperation and cultural and educational
                        exchange. Firmly grounded at the grassroots, Sakyadhita seeks to empower
                        women who have previously been neglected in international development. As a
                        result of these initiatives, Buddhist women are gaining confidence and
                        recognition as scholars, teachers, artists, writers, counselors, and
                        mentors, tackling the problems of poverty, malnutrition, sex trafficking,
                        and the other social ills that beset their communities.
                        <br />
                        <br />
                        In addition to becoming a world leader in Buddhist social activism and
                        gender development, Sakyadhita provides training in conflict resolution,
                        environmental ethics, healthcare, and human rights to girls and women of all
                        ages in vulnerable communities. We are the core of a global movement to end
                        gender injustice and work for better health and education services for the
                        world’s 300 to 600 million Buddhist women.
                        <br />
                        <br />
                        <i>
                            {" "}
                            For a PDF file of Sakyadhitas history click{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.dropbox.com/s/jy4or5eihhw68cg/Sakyadhita%20Brief%20History.pdf?raw=1"
                            >
                                {" "}
                                here{" "}
                            </a>
                        </i>
                    </p>
                    <img
                        src="https://www.dropbox.com/s/z4gytwllla3o5yp/A%20Brief%20History.jpg?raw=1"
                        height="500px"
                        alt="Mission & Activities"
                    />
                    <figcaption>
                        {" "}
                        <i>
                            {" "}
                            Founding members of Sakyadhita International who read the Bhiksuni
                            Pratimoksa on the full moon night, January 15, 1987. Back row (left to
                            right): Bhikshunis Karuna Dharma, Yi Hang, Jenhua Shih, Miao Kwang
                            Sudharma, Pema Chodron, and Yi Hang. Front row: Bhikshunis Karma Lekshe
                            Tsomo, Jampa Tsedroen, Yung Kai Shih, and Thubten Chodron.
                        </i>
                    </figcaption>
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

                <div className="divider" />

                {/* Founding Section */}
                <div className="section" id="founding">
                    {/* Anchor for navigation */}
                    <div className="scroll" id="founders" />

                    <h1>Founding Members</h1>
                    <img id="founding-img" height="500px" src="https://www.dropbox.com/s/645ctixcxgxlvfs/Founding%20Members.png?raw=1" alt="Founding Members" />
                    <figcaption>
                        {" "}
                        <i> 1st Sakyadhita International Conference Participants, 1987 </i>
                    </figcaption>
                    <h2 id="founding-subtitle-1">1st Sakyadhita Conference, 1987</h2>
                    <p>
                        Sakyadhita International Association of Buddhist Women is a global alliance
                        founded at the conclusion of the first International Conference on Buddhist
                        Women, held in Bodhgaya, India, in 1987, under the patronage of the Dalai
                        Lama. The initiative for the conference came from the German nun Ayya Khema;
                        the American nun Karma Lekshe Tsomo; and the Thai professor Chatsumarn
                        Kabilsingh (now Bhikkhuni Dhammananda). The organization aims to unite
                        Buddhist women of various countries and traditions, to promote their
                        welfare, and to facilitate their work for the benefit of humanity.
                        Sakyadhita now has nearly 2,000 members in 45 countries around the world.
                        Biennial international conferences bring laywomen and nuns from various
                        countries and traditions together to share their research and experience and
                        to encourage projects to improve conditions for Buddhist women, especially
                        in developing countries. Sakyadhita has been registered as a 501(c)3
                        non-profit in the State of California since 1988.
                    </p>

                    {/* Founding Members */}
                    {/* Members must be entered in reverse order */}
                    <div className="founding-profiles" style={computeProfileDisplay(year)}>
                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://www.sylvia-wetzel.de/">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Sylvia Wetzel</h2>
                            </div>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://www.zeninstitute.org/en/iziae/tradition/zenji.html">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Gesshin Myoko Prabhasa Dharma</h2>
                            </div>
                            <h3>(1931-1999)</h3>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://pemachodronfoundation.org/">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Bhikshuni Pema Chodron</h2>
                            </div>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://en.wikipedia.org/wiki/Preah_Maha_Ghosananda">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Bhikkhu Mahaghosananda</h2>
                            </div>
                            <h3>(1929-2007)</h3>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://ayyakhematalks.org/">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Ayya Khema Bhikkhuni</h2>
                            </div>
                            <h3>(1923-1997)</h3>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://www.karunadharma.info/">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Bhikshuni Karuna Dharma</h2>
                            </div>
                            <h3>(?-2014)</h3>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://www.sandiego.edu/cas/theo/faculty/biography.php?ID=296">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Bhikshuni Karma Lekshe Tsomo</h2>
                            </div>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://www.thaibhikkhunis.org/old/eng/index.php?option=com_content&task=view&id=121&Itemid=3">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Bhikkhuni Dhammananda</h2>
                            </div>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://www.carolaroloff.de/">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Bhikshuni Jampa Tsedroen</h2>
                            </div>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <div className="title">
                                <div className="link-holder">
                                    <a href="http://www.bhikkhunikusuma.info/">
                                        <img
                                            className="profile-link"
                                            src={Link}
                                            alt="Profile Link"
                                        />
                                    </a>
                                </div>
                                <h2>Bhikkhuni Kusuma</h2>
                            </div>
                        </div>

                        <div className="profile">
                            <img className="headshot" src={Cat} alt="Exec Headshot" />
                            <h2>Ranjani de Silva</h2>
                        </div>
                    </div>

                    <h2 id="founding-subtitle-2">
                        <span id="conference">Were you a founding member?</span>
                    </h2>

                    <img
                        height="400px"
                        src="https://www.dropbox.com/s/tf52qbak6wibyxs/Were%20you%20a%20founding%20member.jpg?raw=1"
                        alt="Founding Members"
                    />
                    <figcaption>
                        {" "}
                        <i>
                            {" "}
                            Bhikshuni Karma Lekshe Tsomo and Chatsumarn Kabilsingh (now Bhikkhuni
                            Dhammananda), 1st Sakyadhita International Conference, 1987{" "}
                        </i>
                    </figcaption>

                    <p>
                        <br />
                        <b>
                            {" "}
                            <i> Thank you! </i>{" "}
                        </b>
                        <br />
                        <i>
                            Because of your dedication to gender equality in Buddhism, a movement
                            was started that would become Sakyadhita.
                        </i>
                        <br />
                        <br />
                        Were you there for the first International Conference on Buddhist Nuns? This
                        conference paved the path for future generations, so we would like to hear
                        from you! Please email us with photos and stories. If you&apos;d like to set
                        up an interview for the{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://awakeningbuddhistwomen.blogspot.com/"
                        >
                            {" "}
                            Awakening Buddhist Women blog{" "}
                        </a>{" "}
                        please contact the blog&apos;s coordinators at this{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://sakyadhita.org/home/awakeningwomen@sakyadhita.org"
                        >
                            {" "}
                            link{" "}
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
