import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import InteractiveMap from "../components/Home/InteractiveMap";
import Slideshow from "../components/Slideshow";
import NewsEventsSlide from "../components/Home/NewsEventsSlide";
import CustomButton from "../components/CustomButton.js";
import "../css/Home.css";

export default function Home() {
    const [content, setTooltipContent] = useState({
        country: "",
        email: "",
        urlLink: "",
    });

    const isMobile = false;

    return (
        <div className="Home">
              <Slideshow
                        height={"600px"}
                        width="100%"
                        isMobile={isMobile}
                    >
                        <NewsEventsSlide
                        isMobile={isMobile}
                        openInSameTab={true}
                        redirect_link="https://stackoverflow.com/questions/48748645/conditional-rendering-of-css-style-in-elements-react"
                        title="News & Events"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet."
                        image_url="https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1622419200&Signature=A4Vo6ehJhS-InREAaHT0ia~wMkWJGgVgC722h3dzLQkgpRStx5G-QYzANTGLJQKMeCPJDn5p3wagEvGGxgJEpl693~h5Vu4kzlwSjdHVxJcDsaLRlisO83GREBNuKpsgWSwhiwCU3Ydh1UnFqIRIIzCSuc5oOlDdTD-ErpKAZ00fM447eSXZ5jobF6sDpjvE0IS0Kg1kw9GuEl9wvcN-B61zBb4X6~yvYG7-1GHx38-H5uKtkH3SVPjkX2HxHRCFqmP7MidfCzEfzRWm-seIYeGqM0jynk5XFllDXwHXkzB7R4QkQEEIAeosNSFFzHGtZBJz0Vr6Wr9ZQkT~qxIlAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        />
                        <NewsEventsSlide
                        isMobile={isMobile}
                        openInSameTab={false}
                        title="Upcoming Hawaii Conference!"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet."
                        image_url="https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1622419200&Signature=A4Vo6ehJhS-InREAaHT0ia~wMkWJGgVgC722h3dzLQkgpRStx5G-QYzANTGLJQKMeCPJDn5p3wagEvGGxgJEpl693~h5Vu4kzlwSjdHVxJcDsaLRlisO83GREBNuKpsgWSwhiwCU3Ydh1UnFqIRIIzCSuc5oOlDdTD-ErpKAZ00fM447eSXZ5jobF6sDpjvE0IS0Kg1kw9GuEl9wvcN-B61zBb4X6~yvYG7-1GHx38-H5uKtkH3SVPjkX2HxHRCFqmP7MidfCzEfzRWm-seIYeGqM0jynk5XFllDXwHXkzB7R4QkQEEIAeosNSFFzHGtZBJz0Vr6Wr9ZQkT~qxIlAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        redirect_link="https://stackoverflow.com/questions/48748645/conditional-rendering-of-css-style-in-elements-react"
                        image_url="https://s3-alpha-sig.figma.com/img/2632/7b67/21741a7000235fce33b207b71e8da1cd?Expires=1622419200&Signature=NaKrOXhTogZlNaWaE-kcQHGyv7cZL745P19PBIu3a~8UWgMEh0wqj3bAmfbhisl4j91lMJQei5kgDCFq4KIUeqRX39BNJxg7qt8CKrpx1Hw-kdUaaTz-10Rqp6tw~vxCma9x19Ry~JIhDTRyAjyn2zN21NTYCNvF1Xpc2BgzzavRdZsW22cFD66fde8NG-Sqq85fT4QwvDxStiavUn0EqvAYPvYDxJ2uhghbnI6U07n5MmEI~nrUzV2IamBqywS-B5TMo7Qqxnajzf1H6WgNKrFRVFok5jNVy4J4HNXYJLp7lQFXZ1yzs9YD~bapJXBg1Yo9R6KTWsv58zxvtw2M6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        />

            </Slideshow>
            <section className="home-body">
                <section id="home-intro">
                    <h1>Introduction </h1>
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
                <hr className="divider" />
                <section id="branches-and-chapters">
                    <InteractiveMap setTooltipContent={setTooltipContent} />
                    <ReactTooltip
                        place="left"
                        effect="solid"
                        type="dark"
                        delayUpdate={1}
                        globalEventOff="click"
                    >
                        <a href={content.urlLink} target="_blank" rel="noreferrer" >
                            {content.country}
                            <FiExternalLink />
                        </a>
                        <br />
                        {content.email}
                    </ReactTooltip>
                    <div className="branch-info">
                        <h1>Branches </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            {"\n\n\n"}
                            Hover over each pin for more information about each branch!
                        </p>
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
                <section id="home-be-involved">
                    <h1>Be Involved </h1>
                    <div className="involve-sections-container">
                        <div id="join-us" className="involve-section">
                            <div className="overlay">
                                <p> Become a member of Sakyadhita! </p>
                                <CustomButton
                                openInSameTab={true}
                                redirect_link="/join"
                                text="Join Us"
                                />
                            </div>
                        </div>
                        <div id="volunteer" className="involve-section">
                            <div className="overlay">
                                <p>
                                    Interested in helping us with anything from writing content to
                                    building?
                                </p>
                                <CustomButton
                                openInSameTab={true}
                                redirect_link="/volunteer"
                                text="Volunteer"
                                />
                            </div>
                        </div>
                        <div id="donate" className="involve-section">
                            <div className="overlay">
                                <p>
                                    Help us grow and continue to connect by donating in any amount{" "}
                                </p>
                                <CustomButton
                                openInSameTab={false}
                                redirect_link="https://www.paypal.com/donate?token=OHfoxPvmqn1U-GS2GQWfp-3meA63s0tE_fqAWoLmqyiGBh4SWJfZ0rM5jb63hTCsOYZQ_JJvWdyKgwHX"
                                text="Donate"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}
