/**
 * This file creates a component for the resources header with an image, title, and description text.
 *
 * @summary Creates a component for resources header
 * @author Dhanush Nanjunda Reddy
 */
import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import "../css/ResourcesHeader.css";

export default function ResourcesHeader({ image, height, width, title, text, showArrow = true }) {
    return (
        <div
            className="header-div"
            style={{
                backgroundImage: `url("${image}")`,
                height,
                width,
            }}
        >
            {/* Purple box with a title and description */}
            <div className="header-info-div">
                {title ? <h1 className="header-text">{title}</h1> : null}
                {text ? <p className="header-info">{text}</p> : null}
            </div>
            {/* Displays white arrow on bottom left of slide */}
            {showArrow ? (
                <div className="circle-arrow">
                    <FiArrowDownCircle />
                </div>
            ) : null}
        </div>
    );
}
