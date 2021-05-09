/**
 * renders an EPub Card given the title, author name, image_url, and redirect link
 */
import React from "react";
import "../../css/EPubCard.css";

export default function EPubSection({ title, author, image_url, redirect_link }) {
    return (
        <div className="EPubCard">
            <a href={redirect_link}>
                <img alt={title} src={image_url} className="EPubCard_image" />
            </a>
            <div className="EPubCard_title">{title}</div>
            <div className="EPubCard_author">{author}</div>
        </div>
    );
}
