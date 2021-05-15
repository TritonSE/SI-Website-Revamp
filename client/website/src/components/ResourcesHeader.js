/**
 * This file creates a component for the resources header with an image, title, and description text.
 *
 * @summary Creates a component for resources header
 * @author Dhanush Nanjunda Reddy
 */
import React, { useState, useEffect } from "react";
import "../css/ResourcesHeader.css";

export default function ResourcesHeader(props) {
    const [isMobile, setIsMobile] = useState(false);

    // modifies isMobile state when window resizes
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 600);
        }

        // event listener for resize
        window.addEventListener("resize", handleResize);
        handleResize();

        // Removes event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="header-div">
            <img src={isMobile ? props.mobileImage : props.image} alt="Header Image" id="Header" />
            <div className="header-info-div">
                <h1 className="header-text">{props.title}</h1>
                <p className="header-info">{props.text}</p>
            </div>
        </div>
    );
}
