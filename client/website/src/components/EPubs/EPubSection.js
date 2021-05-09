/**
 *
 */
import React, { useEffect, useState } from "react";
import EPubCard from "./EPubCard";
import "../../css/EPubSection.css";

// Renders the mobile version of a given EPub section, which includes left/right arrows
const EPubSectionMobile = () => <div />;

// desktop render
const EPubSectionDesktop = () => (
    <div>
        <div>
            <h1>Section Title</h1>
            <p>view all</p>
        </div>
        <div>
            <EPubCard />
        </div>
        <div>render orange bar</div>
    </div>
);
export default function EPubSection() {
    // max width size that mobile view will be rendered
    const MAX_MOBILE_VIEW_WIDTH = 750;

    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    // track window resizes to determine rerender
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (
        <>{windowSize.width > MAX_MOBILE_VIEW_WIDTH ? EPubSectionDesktop() : EPubSectionMobile()}</>
    );
}
