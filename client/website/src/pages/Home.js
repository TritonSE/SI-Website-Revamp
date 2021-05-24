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

import "../css/Home.css";

const MAX_MOBILE_WIDTH = 700;

export default function Home() {
    // tracks layout of screen
    const [isMobile, setMobileView] = useState(false);
    const introTitle = React.createRef();

    // handler to call on window resize
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= MAX_MOBILE_WIDTH) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        }
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
    const slideData = [
        {
            openInSameTab: true,
            redirect_link: "https://www.google.com/",
            title: "News & Events",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet.",
            image_url:
                "https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1622419200&Signature=A4Vo6ehJhS-InREAaHT0ia~wMkWJGgVgC722h3dzLQkgpRStx5G-QYzANTGLJQKMeCPJDn5p3wagEvGGxgJEpl693~h5Vu4kzlwSjdHVxJcDsaLRlisO83GREBNuKpsgWSwhiwCU3Ydh1UnFqIRIIzCSuc5oOlDdTD-ErpKAZ00fM447eSXZ5jobF6sDpjvE0IS0Kg1kw9GuEl9wvcN-B61zBb4X6~yvYG7-1GHx38-H5uKtkH3SVPjkX2HxHRCFqmP7MidfCzEfzRWm-seIYeGqM0jynk5XFllDXwHXkzB7R4QkQEEIAeosNSFFzHGtZBJz0Vr6Wr9ZQkT~qxIlAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
            openInSameTab: false,
            title: "Upcoming Hawaii Conference!",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet.",
            redirect_link: "https://www.google.com/",
            image_url:
                "https://s3-alpha-sig.figma.com/img/2632/7b67/21741a7000235fce33b207b71e8da1cd?Expires=1622419200&Signature=NaKrOXhTogZlNaWaE-kcQHGyv7cZL745P19PBIu3a~8UWgMEh0wqj3bAmfbhisl4j91lMJQei5kgDCFq4KIUeqRX39BNJxg7qt8CKrpx1Hw-kdUaaTz-10Rqp6tw~vxCma9x19Ry~JIhDTRyAjyn2zN21NTYCNvF1Xpc2BgzzavRdZsW22cFD66fde8NG-Sqq85fT4QwvDxStiavUn0EqvAYPvYDxJ2uhghbnI6U07n5MmEI~nrUzV2IamBqywS-B5TMo7Qqxnajzf1H6WgNKrFRVFok5jNVy4J4HNXYJLp7lQFXZ1yzs9YD~bapJXBg1Yo9R6KTWsv58zxvtw2M6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
    ];

    const markers = [
        {
            name: "Buenos Aires",
            coordinates: [-58.3816, -34.6037],
            isBranch: true,
            email: "kingnavid@awesome.com",
            urlLink: "https://www.instagram.com/navidisme/?hl=en",
        },
        {
            name: "La Paz",
            coordinates: [-68.1193, -16.4897],
            isBranch: true,
            email: "thomas@cat.com",
            urlLink:
                "https://tse.ucsd.edu/static/3122a8820897b8d1110b0840edc0944e/a41d1/Thomas_Garry.jpg",
        },
        {
            name: "Brasilia",
            coordinates: [-47.8825, -15.7942],
            isBranch: false,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
        {
            name: "Budapest",
            coordinates: [19.0402, 47.4979],
            isBranch: false,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
        {
            name: "Delhi",
            coordinates: [77.1025, 28.7041],
            isBranch: false,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
        {
            name: "California",
            coordinates: [-119.4179, 36.7783],
            isBranch: true,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
    ];

    return (
        <div className="Home">
            {/* Slideshow component */}
            <Slideshow height={isMobile ? "95vh" : "600px"} width="100%" isMobile={isMobile}>
                {/* All Slides mapped here with display information  */}
                {slideData.map((slideInfo) => (
                    <NewsEventsSlide
                        height={isMobile ? "95vh" : "600px"}
                        showButton="true"
                        openInSameTab={slideInfo.openInSameTab}
                        redirect_link={slideInfo.redirect_link}
                        title={slideInfo.title}
                        description={slideInfo.description}
                        image_url={slideInfo.image_url}
                        arrowClickCallback={scrollToIntro}
                    />
                ))}
            </Slideshow>
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
                    <InteractiveMap markers={markers} />

                    {/* Custom Tooltip for Interactive Map */}
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
                                    href={markers[Math.floor(dataTip)].urlLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {markers[Math.floor(dataTip)].name}
                                    <FiExternalLink />
                                </a>
                                <br />
                                {markers[Math.floor(dataTip)].email}
                            </div>
                        )}
                    />
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
                            image_url="https://s3-alpha-sig.figma.com/img/8f03/ef9f/36365dafe0acb50fa55cbb8064b6f29a?Expires=1621814400&Signature=RbXghI9GvSQ6DLOTXwZssXF6NxJlqaUzwIKuEdIKHPAhNMn6Pkp5D8xWgD5ofazmEKZMZIA8tNFSHk8Qpg8r9MDuy1R8c9WsLDFabDj-tYfuhmCJIJFljE1Rz6egir~a~cpoAUdPAKbTzsTGlqDrXo6OE~jLOw6OVsGwga~LepQao~5xcfpAqzDEiLQo5KEi75r4irxhNPJfcL4MKICBlnj0fLNEXeQJeY0~ahv0LdLmTSnoNZREjr7ZeUoQdpJwVJrWw187ouCb~oIwcoENMl8vJdAoAjKFwCZValYQpSPleKp2TIz8AJpjpuH-SaJNfHv60s0bg5DkMEaInm~kiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            openInSameTab="true"
                            redirect_link="/join"
                            button_title="Join Us"
                        />
                        {/* Volunteer  */}
                        <BeInvolved
                            description="Interested in helping us with anything from writing content to
                            building?"
                            image_url="https://s3-alpha-sig.figma.com/img/4a6e/7fbe/45cd7abf1fc865cac2ba9e2d073562ef?Expires=1621814400&Signature=Q7NGjVsyuJekpOfR3qlH8xZp0vgFzB3oK5JLgjNLH85aCmd8Q9-9UsyUn-rh1pYWMhCq-~0dpBJEQCRMRknnLht6Z9Rygc5OkTTWat-KpqrXamtLOOD9eqw9AO4ln--yH6~1CaLE6nzQRAHnVJh1VV~kM6PyqLYg6xGOVFXvpYjcM7dzfKjulGF01cYkX6t72ZWDFlhz3Vnl7bX~Rj9rAJ9SVoyOQBW67qInVlD454Osh3QzFIdU89KCWMUFvTyCPqU9pHciiSeg2mcAkh4OAhWLRbsDk9y4MifywFeH5DVGLN2y7cix9aPcQOfEaT7MfIa-u3KOCls-iQ6o~YNzXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            openInSameTab="true"
                            redirect_link="/volunteer"
                            button_title="Volunteer"
                        />
                        {/* Donate  */}
                        <BeInvolved
                            description="Help us grow and continue to connect by donating in any amount"
                            image_url="https://s3-alpha-sig.figma.com/img/7f47/8bb4/fe38c23cd82024eadf280d59fa5c3426?Expires=1621814400&Signature=QsXn3t5aa4RW5-T-akYPo60OJfYjbm4kqUNoHqI--XWejZYFx9gMJVH2w~CURZBEezTovdHGp68aZ48zvUde3n7vMZOoPjxTL77DuOF3qj8YAOajzMOB7wvdT1tv7pS30pC41X6zHa5XGybBOx5wBbHJdo1UCvZE3l4F3zibKI-NpvH844BSQXQDhGbe~6lM5uSB3YXtoONR1nl8v8g2KfJZ6Om09DAxKOOxvOIlfFRQGWy4jGY2Yd5KyFFEJofW-RV0dozZo0E2hBoA6NdYwkKbvlWWxStWCVaGLIm0gFZTuXhqbuUKe10B6q3So6VAmRTZy0gY~xikb~V1kiAqyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            openInSameTab="false"
                            redirect_link="https://www.paypal.com/donate?token=OHfoxPvmqn1U-GS2GQWfp-3meA63s0tE_fqAWoLmqyiGBh4SWJfZ0rM5jb63hTCsOYZQ_JJvWdyKgwHX"
                            button_title="Donate"
                        />
                    </div>
                </section>
            </section>
        </div>
    );
}
