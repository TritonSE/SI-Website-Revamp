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
import ReactTooltip from "react-tooltip";
import InteractiveMap from "../components/Home/InteractiveMap";
import Slideshow from "../components/Slideshow";
import NewsEventsSlide from "../components/Home/NewsEventsSlide";
import BeInvolved from "../components/Home/BeInvolved";
import Loader from "../components/Main/Loader";

import { SITE_PAGES } from "../constants/links";
import { fetchBranchesAndChapters, fetchNewsAndEvents } from "../util/requests";

// import PinkFlower from "../media/Lotus_Flower.png";
// import PurpleFlower from "../media/JoinUs_Header.png";

import "../css/Home.css";

// Mobile Screens
const MAX_HEIGHT_HORIZONTAL_MOBILE = 500; // Landscape Layout
const MAX_MOBILE_WIDTH = 750;

// Tablet Screens - Portrait Layout
const TABLET_MIN_WIDTH = 756;
const TABLET_MAX_WIDTH = 1050;
const TABLET_MIN_HEIGHT = 1000;
const TABLET_MAX_HEIGHT = 2500;

// Donate Button Redirect Link
const DONATE_REDIRECT_LINK =
    "https://www.paypal.com/donate?token=n4Ck5RvK_epLMZQxmIloFbLpby9p3_H9lVfDuvDpLJljY9dxYbwORh3UJCEaI7C9jXyWD8ajukVhKAaa";

export default function Home() {
    // tracks layout of screen
    const [newsAndEvents, setNewsAndEvents] = useState([]);
    const [branchesAndChapters, setBranchesAndChapters] = useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [isMobile, setMobileView] = useState(false);
    const [isHorizontalMobile, setHorizontalMobile] = useState(false);
    const [isTabletVertical, setTebletVertical] = useState(false);
    const introTitle = React.createRef();

    // handler to call on window resize
    useEffect(async () => {
        function handleResize() {
            // check if now in mobile mode
            if (window.innerWidth <= MAX_MOBILE_WIDTH) {
                setMobileView(true);
            } else {
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

        setNewsAndEvents(await fetchNewsAndEvents());
        setBranchesAndChapters(await fetchBranchesAndChapters());
        setIsPageLoading(false);

        console.log(newsAndEvents);
        console.log(branchesAndChapters);

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
                block: "nearest",
            });
        }
    };

    // dummy slideshow data
    // const slideData = [
    //     {
    //         openInSameTab: true,
    //         redirect_link: "https://www.google.com/",
    //         title: "News & Events",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet.",
    //         image_url: PinkFlower,
    //     },
    //     {
    //         openInSameTab: false,
    //         title: "Upcoming Hawaii Conference!",
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet.",
    //         redirect_link: "https://www.google.com/",
    //         image_url: PurpleFlower,
    //     },
    // ];

    function getSlideshowHeight() {
        if (isHorizontalMobile) return "500px";
        if (isMobile) return "95vh";
        if (isTabletVertical) return "55vh";
        return "85vh";
    }
    return (
        <div className="Home">
            {/* Slideshow component */}
            {isPageLoading ? (
                <Loader />
            ) : (
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
            )}
            {/* Body of Page - Everthing below slideshow */}
            <section className="home-body">
                {/* Introduction */}
                <section id="home-intro">
                    <h1 ref={introTitle}>Introduction </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis
                        condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula
                        eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat
                        arcu, in efficitur sem tortor vel lectus. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet
                        lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed
                        porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem
                        tortor vel lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed.
                        Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales,
                        orci neque volutpat arcu, in efficitur sem tortor vel lectus.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum
                        massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut
                        laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in
                        efficitur sem tortor vel lectus.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia
                        massa commodo sed.
                    </p>
                </section>

                {/* Mini Divider */}
                <hr className="divider" />

                {/* Branches & Chapters Section */}
                <section id="branches-and-chapters">
                    {/* Interactive Map */}
                    {isPageLoading ? <Loader /> : <InteractiveMap markers={branchesAndChapters} />}
                    {/* Custom Tooltip for Interactive Map */}
                    {isPageLoading ? null : (
                        <ReactTooltip
                            place="left"
                            effect="solid"
                            type="light"
                            border="true"
                            globalEventOff="click"
                            id="soclose"
                            getContent={(dataTip) => (
                                <div>
                                    <a
                                        href={branchesAndChapters[Math.floor(dataTip)].siteLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {branchesAndChapters[Math.floor(dataTip)].name}
                                        <FiExternalLink />
                                    </a>
                                    <br />
                                    {branchesAndChapters[Math.floor(dataTip)].email}
                                </div>
                            )}
                        />
                    )}

                    {/* Branch/Chapter Information  */}
                    <div className="branch-info">
                        <h1>Branches </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            {"\n\n\n"}
                            Click on a pin for more information about the branch!
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
                            openInSameTab={false}
                            redirect_link={DONATE_REDIRECT_LINK}
                            button_title="Donate"
                        />
                    </div>
                </section>
            </section>
        </div>
    );
}
