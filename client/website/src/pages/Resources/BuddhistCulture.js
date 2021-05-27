/**
 * The Buddhist culture page contains information
 * about Buddhism and relevant information that the
 * organization wants to display
 *
 * This page requires a single prop:
 *  data - array - the data needed to render the
 *  information
 *
 * The array will contain objects of the following form:
 *  title - string - the title of the paragraph
 *  text - string - the text to display
 *  image - string - url for the image to render
 *
 * @summary     Buddhist Culture
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import "../../css/Buddhist.css";

import Header from "../../media/Lotus_Header.png";
import LotusPink from "../../media/Lotus_Flower.png";

// dummy data
const obj1 = {
    title: "Mission & Activities",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, distinctio
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
    molestiae blanditiis ducimus!`,
    image: LotusPink,
};

const obj2 = {
    title: "Buddhist History",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, distinctio
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
    molestiae blanditiis ducimus!`,
    image: LotusPink,
};

const obj3 = {
    title: "Life and Activities",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, distinctio
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
    molestiae blanditiis ducimus!`,
    image: LotusPink,
};

const data = [obj1, obj2, obj3];

export default function BuddhistCulture() {
    // Keeps track of the current location for the sticky navbar
    const [scrollLocation, setScrollLocation] = useState(data[0].title.replaceAll(" ", ""));

    // Effect to update the sticky nav on scroll
    useEffect(() => {
        document.querySelector("#page-layout").addEventListener("scroll", () => {
            // create an object to keep track of dynamically added divs
            const documentObjects = {};
            data.forEach((item) => {
                // generate an id which is the title of the paragraph, no spaces
                const id = item.title.replaceAll(" ", "");
                // add the location reference to the object
                documentObjects[id] = document.getElementById(id).getBoundingClientRect().top;
            });

            // go through the documentObjects object
            Object.entries(documentObjects).forEach(([key, item]) => {
                // if the top of the div is less than one,
                // then set the scroll location
                if (item < 1) {
                    setScrollLocation(key);
                }
            });
        });
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

    return (
        <div className="buddhist-container">
            {/* Page header with image and title */}
            <div className="buddhist-header">
                <div className="buddhist-title">Buddhist Culture</div>
                <img src={Header} alt="Lotus Header" />
            </div>

            {/* Sticky Nav */}
            <div className="buddhist-slider-wrapper">
                <div className="buddhist-slider">
                    {/* generate the nav item links dynamically */}
                    <ul className="buddhist-slider-nav">
                        {data.map((item) => (
                            <li className={computeNavUnderline(item.title.replaceAll(" ", ""))}>
                                <a href={`#${item.title.replaceAll(" ", "")}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="buddhist-vbar" />
                </div>
            </div>

            {/* The contents for buddhist culture */}
            <div className="buddhist-contents">
                {/* Generate the seperate divs dynamically */}
                {data.map((item) => (
                    <div className="buddhist-contents-div">
                        <div className="buddhist-section">
                            {/* This div is used for scrolling to the specific spot */}
                            <div className="buddhist-scroll" id={item.title.replaceAll(" ", "")} />

                            {/* The title of the paragraph */}
                            <h1>{item.title}</h1>
                            {/* The text of the div */}
                            <p>{item.text}</p>
                            {/* The image associated with the div */}
                            <img src={item.image} alt="Buddhist_Culture_Image" />
                        </div>

                        {/* The orange divider at the bottom of the page */}
                        <div className="buddhist-divider" />
                    </div>
                ))}
            </div>
        </div>
    );
}
