/**
 * The conferences page on the website. This is a template page
 * and will be served dynamically. It will take in an array of
 * objects containing information for each conference.
 *
 * It consists of the following components:
 *  - HorizontalStepper
 *  - ConferenceOverview
 *  - ConferenceTheme
 *  - Slideshow
 *
 * @summary     conferences page
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import HorizontalStepper from "./HorizontalStepper";
import ConferenceOverview from "./ConferenceOverview";
import ConferenceTheme from "./ConferenceTheme";
import Slideshow from "../Slideshow";

import "../../css/Conferences.css";

export default function MobileConferences(props) {
    // keep track of the conference
    const [index, setIndex] = useState(0);
    // update screen with spceific conference information
    const [item, setItem] = useState(props.data[index]);
    // list of all conferences
    const [itemList] = useState(props.data);

    /**
     * On rendering of page, set the current item to be the first item on stepper
     */
    useEffect(() => {
        // initalially set the page to render the first conference
        setItem(itemList[index]);
    }, []);

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
    const displayInformation = () => (
        <div>
            <div className="theme-header-mobile">
                <h2>Theme</h2>
            </div>
            <ConferenceTheme
                redirect={item.info.signUpLink}
                theme={item.info.theme}
                signup={false}
                location={item.location}
            />
            <div className="overview-header-mobile">
                <h2>Overview</h2>
            </div>
            <ConferenceOverview info={item.info} />
        </div>
    );

    /**
     * Renders a slideshow or video depending on the tab
     * If theme, slideshow, otherwise video
     * @param {boolean} - display video or slideshow
     * @returns Node - component to render
     */
    const slideshowVideo = (isInfo) => {
        if (isInfo) {
            return (
                <Slideshow height="400px" width="100%" isMobile>
                    {/* Loop through all the images associated with the conference */}
                    {item.info.slideShowImages.map((image) => (
                        <div>
                            {/* Set styling on the img */}
                            <div className="mobile-slideshow-label">
                                <h1>{item.title}</h1>
                                <h3>{item.location}</h3>
                            </div>
                            <img
                                style={{
                                    height: "400px",
                                    width: "100%",
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
        return <ReactPlayer url={item.info.video} height="450px" width="100%" />;
    };

    return (
        <div className="conferences-outer-container">
            <div className="component-display">
                {/* Render either the associated video or the slideshow of images */}
                <div style={{ width: "100%" }}>{slideshowVideo(true)}</div>

                {/* The vertical stepper */}
                <div className="conference-vertical-stepper">
                    <div className="horizontal-stepper">
                        <HorizontalStepper
                            items={props.data}
                            color="#6652a0"
                            setParentIndex={setParentIndex}
                        />
                    </div>
                </div>

                {/* The tabs to switch between theme and overview */}
                {displayInformation()}

                {/* Render either the associated video or the slideshow of images */}
                <div style={{ width: "100%" }}>{slideshowVideo(false)}</div>
            </div>
        </div>
    );
}