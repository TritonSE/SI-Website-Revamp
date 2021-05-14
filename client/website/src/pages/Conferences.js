/**
 * The conferences page on the website. This is a template page
 * and will be served dynamically. It will take in an array of
 * objects containing information for each conference.
 *
 * It consists of the following components:
 *  - VerticalStepper
 *  - ConferenceOverview
 *  - ConferenceTheme
 *  - Slideshow
 *
 * @summary     conferences page
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import VerticalStepper from "../components/Conference/VerticalStepper";
import HorizontalStepper from "../components/Conference/HorizontalStepper";
import ConferenceOverview from "../components/Conference/ConferenceOverview";
import ConferenceTheme from "../components/Conference/ConferenceTheme";
import useWindowSize from "../util/ScreenListener";
import Slideshow from "../components/Slideshow";

import "../css/Conferences.css";

// testing data
const obj = {
    title: "Signup for the Why Navid is a loser conference",
    number: 1,
    location: "San Fransisco, California",
    info: {
        slideShowImages: [
            "https://api.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg?w=1024",
            "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg",
            "https://28qs4b33l1o7458ep2hwzyw1-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/Ring-tail-Lemur-1550x700.jpg",
        ],
        programs: [
            { description: "program 1", url: "url.com/download1" },
            { description: "program 2", url: "url.com/download2" },
        ],
        presentations: [
            { description: "presentation 1", url: "url.com/download1" },
            { description: "presentation 2", url: "url.com/download2" },
            { description: "presentation 3", url: "url.com/download2" },
        ],
        abstracts: [{ description: "abstract 1", url: "url.com/downloadabstract1" }],
        video: "https://www.youtube.com/watch?v=Ny_v-W2SkCk",
        theme:
            "Etiam non sem semper enim posuere mattis vel id dolor. Vivamus laoreet ultrices metus non maximus. Nunc ut erat tristique, consequat eros et, accumsan mauris. Praesent cursus ullamcorper efficitur. Etiam viverra ut nisl et vestibulum. Phasellus tellus lacus, molestie in faucibus ac, dapibus quis massa. Nunc urna mi, maximus nec ligula ac, hendrerit tincidunt metus. Praesent et tempus magna. Quisque pellentesque sollicitudin nibh at tempor. Vivamus cursus dignissim eros, ultrices faucibus urna porta vel. Pellentesque quam massa, bibendum ut consectetur sed, hendrerit non risus. ",
        signUpLink: "https://www.google.com",
    },
};

// testing data
const obj1 = {
    title: "Signup for the new life here conference",
    number: 2,
    location: "San Diego, California",
    info: {
        slideShowImages: [
            "https://api.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg?w=1024",
            "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg",
            "https://28qs4b33l1o7458ep2hwzyw1-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/Ring-tail-Lemur-1550x700.jpg",
        ],
        programs: [
            { description: "program 1", url: "url.com/download1" },
            { description: "program 2", url: "url.com/download2" },
        ],
        presentations: [
            { description: "presentation 1", url: "url.com/download1" },
            { description: "presentation 2", url: "url.com/download2" },
        ],
        abstracts: [
            { description: "abstract 1", url: "url.com/downloadabstract1" },
            { description: "abstract 2", url: "url.com/downloadabstract2" },
        ],
        video: "https://www.youtube.com/watch?v=Ny_v-W2SkCk",
        theme:
            "Etiam non sem semper enim posuere mattis vel id dolor. Vivamus laoreet ultrices metus non maximus. Nunc ut erat tristique, consequat eros et, accumsan mauris. Praesent cursus ullamcorper efficitur. Etiam viverra ut nisl et vestibulum. Phasellus tellus lacus, molestie in faucibus ac, dapibus quis massa. Nunc urna mi, maximus nec ligula ac, hendrerit tincidunt metus. Praesent et tempus magna. Quisque pellentesque sollicitudin nibh at tempor. Vivamus cursus dignissim eros, ultrices faucibus urna porta vel. Pellentesque quam massa, bibendum ut consectetur sed, hendrerit non risus. ",
        signUpLink: "https://www.google.com",
    },
};

// testing data
const arr = [];
for (let i = 0; i < 13; i++) {
    if (i % 2 === 0) {
        arr.push(obj);
    } else {
        arr.push(obj1);
    }
}

export default function Conferences() {
    // switch used to toggle theme and overview state
    const [isInfo, setIsInfo] = useState(true);
    // keep track of the conference
    const [index, setIndex] = useState(0);
    // update screen with spceific conference information
    const [item, setItem] = useState(arr[index]);
    // list of all conferences
    const [itemList] = useState(arr);
    // listener for the
    const listener = useWindowSize();

    // initalially set the page to render the first conference
    useEffect(() => {
        setItem(itemList[index]);
    }, []);

    /**
     * Switch between the theme and overview tabs depending on the previous state
     */
    const updateInformation = () => {
        setIsInfo(!isInfo);
    };

    /**
     * Updates the current index and information rendered
     * when clicked on in VerticalStepper
     * @param {number} step - the index clicked on the vertical stepper
     */
    const setParentIndex = (step) => {
        setIndex(step);
        setItem(itemList[step]);
    };

    /**
     * Rendersthe conference theme information
     * title - the title of the conference
     * location - location of the conference
     * redirect - redirect url for registration
     * theme - information about the conference
     * info - overview of conference, files
     * @returns Node - component to render
     */
    const displayInformation = () => {
        if (isInfo) {
            return (
                <ConferenceTheme
                    title={item.title}
                    location={item.location}
                    redirect={item.info.signUpLink}
                    theme={item.info.theme}
                />
            );
        }

        // if it is not the info tab, then render the overview tab
        return <ConferenceOverview info={item.info} title={item.title} />;
    };

    /**
     * Renders a slideshow or video depending on the tab
     * If theme, slideshow, otherwise video
     * @returns Node - component to render
     */
    const slideshowVideo = () => {
        if (isInfo) {
            return (
                <Slideshow
                    height={listener.width > 1200 ? "396px" : "450px"}
                    width={listener.width > 1200 ? "100%" : "calc(85vw)"}
                >
                    {/* Loop through all the images associated with the conference */}
                    {obj.info.slideShowImages.map((image) => (
                        <div>
                            {/* Set styling on the img */}
                            <img
                                style={{
                                    width: listener.width > 1200 ? "100%" : "calc(85vw)",
                                    height: listener.width > 1200 ? "396px" : "450px",
                                }}
                                alt="Event Visual"
                                src={image}
                            />
                        </div>
                    ))}
                </Slideshow>
            );
        }

        // if it is the overivew tab, render the associated video
        return (
            <ReactPlayer
                url={obj.info.video}
                height={listener.width > 1200 ? "396px" : "450px"}
                width={listener.width > 1200 ? "100%" : "calc(85vw)"}
            />
        );
    };

    return (
        <div className="conferences-outer-container">
            <div className="component-display">
                {/* The vertical stepper */}
                <div className="conference-vertical-stepper">
                    {listener.width > 767 ? (
                        <VerticalStepper
                            items={arr}
                            color="#6652a0"
                            setParentIndex={setParentIndex}
                        />
                    ) : (
                        <div className="horizontal-stepper">
                            <HorizontalStepper
                                items={arr}
                                color="#6652a0"
                                setParentIndex={setParentIndex}
                            />
                        </div>
                    )}
                </div>

                {/* Display the information for either theme or ovwerview */}
                <div className="conference-container">{displayInformation()}</div>

                {/* The tabs to switch between theme and overview */}
                <div className="slideshow-section">
                    <div className="slideshow-section-tabs">
                        {/* The 'theme' tab button */}
                        <button
                            className={
                                isInfo
                                    ? "slideshow-section-theme-active"
                                    : "slideshow-section-theme"
                            }
                            onClick={() => updateInformation()}
                            type="button"
                        >
                            Theme
                        </button>
                        {/* The 'overview' tab button */}
                        <button
                            className={
                                isInfo
                                    ? "slideshow-section-overview"
                                    : "slideshow-section-overview-active"
                            }
                            onClick={() => updateInformation()}
                            type="button"
                        >
                            Overview
                        </button>
                    </div>

                    {/* Render either the associated video or the slideshow of images */}
                    <div style={{ width: "100%" }}>{slideshowVideo()}</div>
                </div>
            </div>
        </div>
    );
}
