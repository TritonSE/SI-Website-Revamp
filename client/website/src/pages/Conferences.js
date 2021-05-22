/**
 * The conferences page on the website. This is a template page
 * and will be served dynamically. It will take in an array of
 * objects containing information for each conference.
 *
 * It simply renders either the mobile version or the
 * desktop version of this page. The data can be fetched on this
 * page and sent to both components and render appropriately
 *
 * @summary     conferences page
 * @author      Amitesh Sharma
 */

import React from "react";
import useWindowSize from "../util/ScreenListener";
import ConferenceDesktop from "../components/Conference/ConferenceDesktop";
import MobileConference from "../components/Conference/MobileConference";

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
const obj2 = {
    title: "The Last Conference Ever",
    number: 4,
    location: "Denver, Colorado",
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
    if (i % 3 === 0) {
        arr.push(obj);
    } else if (i % 3 === 1) {
        arr.push(obj1);
    } else arr.push(obj2);
}

export default function Conferences() {
    // Needed to determine when to render the desktop or mobile version
    const listener = useWindowSize();

    // check is the screen size is either mobile or desktop
    return listener.width > 767 ? (
        <ConferenceDesktop data={arr} />
    ) : (
        <MobileConference data={arr} />
    );
}
