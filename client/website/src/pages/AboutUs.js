import React from "react";
// import { SITE_PAGES } from "../constants/links";

import "../css/About.css";
import Header from "../media/lotus-header.svg";
import LotusPink from "../media/lotus-pink.svg";
import Navid from "../media/navid.jpg";

export default function AboutUs() {
    return (
        <div className="page">
            <div className="header">
                <div className="page-title">About Us</div>
                <img src={Header} alt="Lotus Header" />
            </div>

            <div className="slider-wrapper">
                <div className="slider">
                    <ul className="slider-nav">
                        <li className="underline">Mission & Activities</li>
                        <li>History & Goals</li>
                        <li>Executive Committee</li>
                        <li>Founding Members</li>
                    </ul>
                    <div className="vbar" />
                </div>
            </div>

            <div className="contents">
                <div className="section">
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

                <div className="section">
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

                <div className="section">
                    <h1>Executive Committee</h1>
                    <div className="profiles">
                        <div className="profile">
                            <img src={Navid} alt="Exec Headshot" />
                            <h2>Navid Boloorian</h2>
                            <h2>Cavs Fan 1</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                nesciunt rem quo dolor voluptas magnam aliquam iusto consequuntur
                                nostrum est?
                            </p>
                        </div>
                        <div className="profile">
                            <img src={Navid} alt="Exec Headshot" />
                            <h2>Navid Boloorian</h2>
                            <h2>Cavs Fan 2</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                nesciunt rem quo dolor voluptas magnam aliquam iusto consequuntur
                                nostrum est?
                            </p>
                        </div>
                        <div className="profile">
                            <img src={Navid} alt="Exec Headshot" />
                            <h2>Navid Boloorian</h2>
                            <h2>Cavs Fan 3</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                nesciunt rem quo dolor voluptas magnam aliquam iusto consequuntur
                                nostrum est?
                            </p>
                        </div>
                        <div className="profile">
                            <img src={Navid} alt="Exec Headshot" />
                            <h2>Navid Boloorian</h2>
                            <h2>Cavs Fan 4</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                nesciunt rem quo dolor voluptas magnam aliquam iusto consequuntur
                                nostrum est?
                            </p>
                        </div>
                        <div className="profile">
                            <img src={Navid} alt="Exec Headshot" />
                            <h2>Navid Boloorian</h2>
                            <h2>Cavs Fan 5</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                nesciunt rem quo dolor voluptas magnam aliquam iusto consequuntur
                                nostrum est?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="divider" />

                <div className="section">
                    <h1>Founding Members</h1>
                </div>
            </div>
        </div>
    );
}
