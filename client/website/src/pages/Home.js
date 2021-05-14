import React, {useState} from "react";
import InteractiveMap from "../components/Home/InteractiveMap";
import ReactTooltip from "react-tooltip";
import "../css/Home.css";
import { FiExternalLink } from "react-icons/fi";

export default function Home() {
    const [content, setTooltipContent] = useState({
        country: "",
        email: "",
        urlLink: ""
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
                    {/* <p  data-tip="hover me"> Hello </p>
                    <p  data-tip="check me"> Hello </p> */}
                    <a data-tip='custom show' data-event='click focus'>( •̀д•́)</a>
                    <InteractiveMap setTooltipContent={setTooltipContent} />
                    <ReactTooltip place="left" effect="solid" type="dark" delayUpdate={1} globalEventOff='click' >
                        <a href={content.urlLink} target="_blank">
                            {content.country}
                            <FiExternalLink/>
                        </a>
                        <br/>
                        {content.email}
                    </ReactTooltip>
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
