/**
 * renders an EPub Card given the title, subtitle, image_url, and redirect link
 */
import React from "react";
import "../../css/EPubCard.css";

export default function EPubSection({ title, subtitle, image_url, redirect_link }) {
    return (
        <div>
            <a to={redirect_link}>
                <img alt={title} src={image_url} />
            </a>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    );
}
