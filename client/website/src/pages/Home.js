import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import InteractiveMap from "../components/Home/InteractiveMap";
import "../css/Home.css";

export default function Home() {
    const [content, setTooltipContent] = useState({
        country: "",
        email: "",
        urlLink: "",
    });

    return (
        <div className="Home">
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
                                <button> Join Us </button>
                            </div>
                        </div>
                        <div id="volunteer" className="involve-section">
                            <div className="overlay">
                                <p>
                                    Interested in helping us with anything from writing content to
                                    building?
                                </p>
                                <button> Volunteer </button>
                            </div>
                        </div>
                        <div id="donate" className="involve-section">
                            <div className="overlay">
                                <p>
                                    Help us grow and continue to connect by donating in any amount{" "}
                                </p>
                                <button> Donate </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}
