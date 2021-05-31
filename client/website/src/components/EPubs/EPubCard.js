/**
 * renders an EPub Card given information about the publication.
 * Props include title, author, image_url, redirect_link, isMobile.
 *
 * @Author PatrickBrown1
 */
import React, { Fragment } from "react";
import "../../css/EPubCard.css";

export default function EPubCard({ title, author, image_url, redirect_link, isMobile }) {
    // props title, author name, image_url, redirect link, isMobile
    return (
        <Fragment>
            {!isMobile ? (
                <div className="EPubCard">
                    <a href={redirect_link} target="_blank" rel="noreferrer noopener">
                        <img alt={title} src={image_url} className="EPubCard_image" />
                    </a>
                    <div className="EPubCard_title">{title}</div>
                    <div className="EPubCard_author">{author}</div>
                </div>
            ) : (
                <div className="EPubCard--mobile">
                    <a href={redirect_link} target="_blank" rel="noreferrer noopener">
                        <img alt={title} src={image_url} className="EPubCard_image--mobile" />
                    </a>
                    <div className="EPubCard_title--mobile">{title}</div>
                    <div className="EPubCard_author--mobile">By {author}</div>
                </div>
            )}
        </Fragment>
    );
}
