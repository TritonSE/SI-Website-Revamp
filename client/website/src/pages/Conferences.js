/**
 * The conferences page on the website
 *
 * @summary     conferences page
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import VerticalStepper from "../components/Main/Conference/VerticalStepper";
import ConferenceOverview from "../components/Main/Conference/ConferenceOverview";
import ConferenceTheme from "../components/Main/Conference/ConferenceTheme";
import Slideshow from "../components/Slideshow";

import "../css/Conferences.css";

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

const arr = [];
for (let i = 0; i < 13; i++) {
    if (i % 2 === 0) {
        arr.push(obj);
    } else {
        arr.push(obj1);
    }
}

export default function Conferences() {
    const [isInfo, setIsInfo] = useState(true);
    const [index, setIndex] = useState(0);
    const [item, setItem] = useState(arr[index]);
    const [itemList] = useState(arr);

    useEffect(() => {
        setItem(itemList[index]);
    }, []);

    const updateInformation = () => {
        setIsInfo(!isInfo);
    };

    const setParentIndex = (step) => {
        setIndex(step);
        setItem(itemList[step]);
    };

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

        return <ConferenceOverview info={item.info} title={item.title} />;
    };

    const slideshowVideo = () => {
        if (isInfo) {
            return (
                <Slideshow height="450px" width="42.5vw">
                    {obj.info.slideShowImages.map((image) => (
                        <div>
                            <img
                                style={{ width: "calc(100vw)", height: "400px" }}
                                alt="cat"
                                src={image}
                            />
                        </div>
                    ))}
                </Slideshow>
            );
        }

        return <ReactPlayer url={obj.info.video} height="450px" width="42.5vw" />;
    };

    return (
        <div className="conference-container">
            <div className="component-display">
                <VerticalStepper items={arr} color="#6652A0" setParentIndex={setParentIndex} />
                <div className="conference-container">{displayInformation()}</div>

                <section className="slideshow-section">
                    <div className="slideshow-section-tabs">
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

                    {slideshowVideo()}
                </section>
            </div>
        </div>
    );
}
