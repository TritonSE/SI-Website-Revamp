/**
 * Displays Home Screen of website, inclusive of Slideshow component and interactive map for
 * global branches/chapters. The page dynamically rerenders css as screen width changes, adjusting
 * for mobile/tablet views. It has sub-components for the Slideshow, Interactive Map, and each of
 * the Be Involved sections.
 *
 * @summary Renders and formats Home Page.
 *
 * @author Amrit Kaur Singh
 */

import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import InteractiveMap from "../components/Home/InteractiveMap";
import Slideshow from "../components/Slideshow";
import NewsEventsSlide from "../components/Home/NewsEventsSlide";
import BeInvolved from "../components/Home/BeInvolved";
import Loader from "../components/Main/Loader";
import CustomButton from "../components/CustomButton";

import { SITE_PAGES } from "../constants/links";
import { fetchBranchesAndChapters, fetchNewsAndEvents, fetchSection } from "../util/requests";

import "../css/Home.css";

// Mobile Screens
const MAX_HEIGHT_HORIZONTAL_MOBILE = 500; // Landscape Layout
const MAX_MOBILE_WIDTH = 750;

// Tablet Screens - Portrait Layout
const TABLET_MIN_WIDTH = 756;
const TABLET_MAX_WIDTH = 1050;
const TABLET_MIN_HEIGHT = 1000;
const TABLET_MAX_HEIGHT = 2500;

export default function Home() {
    // tracks layout of screen
    const [newsAndEvents, setNewsAndEvents] = useState([]);
    const [branchesAndChapters, setBranchesAndChapters] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [disableZoom, setDisableZoom] = useState(false);

    const [isMobile, setMobileView] = useState(false);
    const [isHorizontalMobile, setHorizontalMobile] = useState(false);
    const [isTabletVertical, setTebletVertical] = useState(false);
    const introTitle = React.createRef();

    const [additionalSections, setAdditionalSections] = React.useState({});

    // handler to call on window resize
    useEffect(async () => {
        function handleResize() {
            // check if now in mobile mode
            if (window.innerWidth <= MAX_MOBILE_WIDTH) {
                setDisableZoom(false);
                setMobileView(true);
            } else {
                setDisableZoom(true);
                setMobileView(false);
            }

            // mobile landscape mode
            if (window.innerHeight <= MAX_HEIGHT_HORIZONTAL_MOBILE) {
                setHorizontalMobile(true);
            } else {
                setHorizontalMobile(false);
            }

            // portrait tablet screen mode
            if (
                window.innerWidth >= TABLET_MIN_WIDTH &&
                window.innerWidth <= TABLET_MAX_WIDTH &&
                window.innerHeight >= TABLET_MIN_HEIGHT &&
                window.innerHeight <= TABLET_MAX_HEIGHT
            ) {
                setTebletVertical(true);
            } else {
                setTebletVertical(false);
            }
        }

        // backend calls to get page content
        setNewsAndEvents(await fetchNewsAndEvents());
        setBranchesAndChapters(await fetchBranchesAndChapters());

        const data = await fetchSection("Home");

        setAdditionalSections(data);
        setIsPageLoading(false);

        // add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToIntro = () => {
        // only scrolls if element has been rendered on the screen by DOM first
        if (introTitle.current) {
            introTitle.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    function getSlideshowHeight() {
        if (isHorizontalMobile) return "500px";
        if (isMobile) return "95vh";
        if (isTabletVertical) return "55vh";
        return "85vh";
    }

    const formatLoader = (
        <div className="loader-wrapper">
            <Loader />
        </div>
    );

    const renderSlideshow =
        newsAndEvents.length > 0 ? (
            <Slideshow height={getSlideshowHeight()} width="100%" isMobile={isMobile}>
                {/* All Slides mapped here with display information  */}
                {newsAndEvents.map((slideInfo) => (
                    <NewsEventsSlide
                        height={getSlideshowHeight()}
                        showButton="true"
                        openInSameTab={slideInfo.openInSameTab}
                        redirect_link={slideInfo.redirectLink}
                        title={slideInfo.title}
                        description={slideInfo.description}
                        image_url={slideInfo.imageLink}
                        arrowClickCallback={scrollToIntro}
                    />
                ))}
            </Slideshow>
        ) : null;

    if(isPageLoading) {
        return formatLoader
    }
    return (
        <div className="Home">
            {/* Slideshow component */}
            {isPageLoading ? formatLoader : renderSlideshow}
            {/* Body of Page - Everthing below slideshow */}
            <section className="home-body">
                {/* Introduction */}
                <section id="home-intro">
                    <h1 ref={introTitle}> Upcoming 17th Conference! </h1>
                    <div className="home-section-body">
                        <img
                            width={isMobile ? "100%" : "65%"}
                            height="auto"
                            alt="17th Conference Promo"
                            src="https://www.dropbox.com/s/rdeyizxkm2bwqcq/17th_Conference_Promotional.jpeg?raw=1"
                        />
                        <br />
                        <CustomButton
                            text="Register Now"
                            redirect_link="https://sakyadhita-international-association-of-buddhist.heysummit.com/"
                        />
                    </div>
                </section>

                {/* Mini Divider */}
                <hr className="divider" />

                {/* Branches & Chapters Section */}
                <section id="branches-and-chapters">
                    {/* Interactive Map */}
                    {isPageLoading ? (
                        formatLoader
                    ) : (
                        <InteractiveMap
                            disableZooming={disableZoom}
                            markers={branchesAndChapters}
                        />
                    )}
                    {/* Custom Tooltip for Interactive Map */}
                    {isPageLoading ? null : (
                        <ReactTooltip
                            place="left"
                            effect="solid"
                            type="light"
                            border="true"
                            data-iscapture="false"
                            event="mouseover mouseenter"
                            globalEventOff="click scroll mousewheel blur"
                            id="tooltip"
                            getContent={(dataTip) =>
                                branchesAndChapters.length > 0 ? (
                                    <div>
                                        {/* Display name (with hyperlink if given) */}
                                        {branchesAndChapters[Math.floor(dataTip)].siteLink ? (
                                            <a
                                                href={
                                                    branchesAndChapters[Math.floor(dataTip)]
                                                        .siteLink
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {branchesAndChapters[Math.floor(dataTip)].name}
                                                <FiExternalLink />
                                            </a>
                                        ) : (
                                            branchesAndChapters[Math.floor(dataTip)].name
                                        )}
                                        <br />
                                        {/* Display email if it given */}
                                        {branchesAndChapters[Math.floor(dataTip)].email ? (
                                            <div>
                                                <MdEmail />
                                                &nbsp;
                                                {branchesAndChapters[Math.floor(dataTip)].email}
                                            </div>
                                        ) : null}
                                    </div>
                                ) : (
                                    <div> </div>
                                )
                            }
                        />
                    )}

                    {/* Branch/Chapter Information  */}
                    <div className="branch-info">
                        <h1>Branches </h1>
                        <p>
                            The benefits of the National Branches is immediately obvious. The number
                            of women who can afford or set aside time to attend the Sakyadhita
                            International Conferences on Buddhist Women are limited. Activities on
                            the national and local level are far easier to organize and more
                            affordable for larger numbers of people. Designated contact persons for
                            the national branches are listed on the Sakyadhita website and serve the
                            important role of disseminating information about Sakyadhita’s goals and
                            activities to large numbers of people on the national and local level.
                            {"\n\n"}
                            The national branches help raise awareness of Sakyadhita’s mission by
                            distributing publicity materials and organizing activities on the
                            national level. They serve an important function in helping publicize
                            the Sakyadhita International Conferences on Buddhist Women. They have
                            also been very helpful in coordinating the registrations for conferences
                            on the national level in the local currency, booking group flights, and
                            translating conference materials (abstracts, papers, etc.) into national
                            languages. Sakyadhita Taiwan has done exceptional work in cultivating
                            and training translators who are qualified to translate abstracts,
                            papers, and publicity materials on Buddhism and issues of Buddhist women
                            into Chinese.
                            {"\n\n\n"}
                            Click on a pin for more information about the branch!
                            {isMobile ? " Pinch the screen to zoom in and out of the map." : null}
                            {"\n\n"}
                        </p>
                        {/* Mini Color Legend  */}
                        <section className="legend-container">
                            <div className="label">
                                <div className="color-box" style={{ backgroundColor: "#EA8644" }} />
                                <div className="tag"> Branch </div>
                            </div>

                            <div className="label">
                                <div className="color-box" style={{ backgroundColor: "#8477B9" }} />
                                <div className="tag"> Chapter </div>
                            </div>
                        </section>
                    </div>
                </section>

                {/* Be Involved Section  */}
                <section id="home-be-involved">
                    <h1>Be Involved </h1>
                    <div className="involve-sections-container">
                        {/* Join Us  */}
                        <BeInvolved
                            description="Become a member of Sakyadhita!"
                            image_url="https://d.wattpad.com/story_parts/271116779/images/161bdd205bbf18fb307084307993.jpg"
                            openInSameTab="true"
                            redirect_link={SITE_PAGES.JOIN_US}
                            button_title="Join Us"
                        />
                        {/* Volunteer  */}
                        <BeInvolved
                            description="Interested in helping us with anything from writing content to
                            building?"
                            image_url="https://lh3.googleusercontent.com/tVonHCrVh7igUJjFPyZ9-Cpa9eZBQXsSHGOh0_XHioRJtwK-AWFN4nH5B12qVdn1Kw8VRe_5nvegTgVu=w1080-h608-p-no-v0"
                            openInSameTab="true"
                            redirect_link={SITE_PAGES.VOLUNTEER}
                            button_title="Volunteer"
                        />
                        {/* Donate  */}
                        <BeInvolved
                            description="Help us grow and continue to connect by donating in any amount"
                            image_url="https://cdn9.dissolve.com/p/D1024_57_273/D1024_57_273_1200.jpg"
                            openInSameTab="true"
                            redirect_link={SITE_PAGES.DONATE}
                            button_title="Donate"
                        />
                    </div>
                </section>

                <section className="home-section">
                    {/* Mini Divider */}
                    <div className=".divider-wrapper">
                        <hr className="divider" />
                    </div>
                    {
                        additionalSections.map(section => 
                            section.isPublished ? (
                                <>
                                    <h1 className="home-section-title">{section.title}</h1>
                                    <div className="home-section-body" dangerouslySetInnerHTML={{ __html: `${section.content}` }} />
                                </>    
                            ) : (
                                ""
                            )
                        )
                    }
                </section>
            </section>
        </div>
    );
}
