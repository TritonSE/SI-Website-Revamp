/**
 * renders a newsletter Card given information about that newsletter.
 * This information includes the title of the newsletter, the year it was published,
 * the image url, and the redirect link
 *
 * @author PatrickBrown1
 */
import React from "react";
import "../../css/NewsletterCard.css";

export default function NewsletterCard({ title, year, image_url, redirect_link }) {
    // props title, year, image_url, redirect link
    return (
        <div className="NewsletterCard">
            <a
                href={redirect_link}
                target="_blank"
                rel="noreferrer noopener"
                className="NewsletterCard_link"
            >
                <img alt={title} src={image_url} className="NewsletterCard_image" />
                <span className="NewsletterCard_year">{year}</span>
                <span className="NewsletterCard_title">{title}</span>
            </a>
        </div>
    );
}
