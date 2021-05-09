/**
 * renders an EPub Card given the title, author name, image_url, and redirect link
 */
import React from "react";
import "../../css/EPubCard.css";

export default function EPubCard({ title, author, image_url, redirect_link, isMobile }) {
    return (
        <>
            {!isMobile ? (
                <div className="EPubCard">
                    <a href={redirect_link}>
                        <img alt={title} src={image_url} className="EPubCard_image" />
                    </a>
                    <div className="EPubCard_title">{title}</div>
                    <div className="EPubCard_author">{author}</div>
                </div>
            ) : (
                <div className="EPubCard--mobile">
                    <a href={redirect_link}>
                        <img alt={title} src={image_url} className="EPubCard_image--mobile" />
                    </a>
                    <div className="EPubCard_title--mobile">{title}</div>
                    <div className="EPubCard_author--mobile">By {author}</div>
                </div>
            )}
        </>
    );
}
