/**
 *  This file renders the Newsletters section of the Resources page. It utilizes
 *  the NewsletterCard component, as well as the react-paginate package.
 *
 *  @author PatrickBrown1
 */
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import NewsletterCard from "../../components/Newsletters/NewsletterCard";
import "../../css/Newsletters.css";

// fill newsletterList
const newsletterList = [];
let i = 0;
for (i; i < 50; i++) {
    newsletterList.push({
        title: `Newsletter ${i}`,
        year: "2019",
        image_url:
            "https://cdn2.wanderlust.co.uk/media/1069/lists-the-worlds-most-awesome-giant-buddhas.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131482975350000000",
        redirect_url: "https://google.com",
    });
}

// calculates the correct newsletter cards to display given the newsletters, current page, and
// number of newsletters per page
const calculateCards = (newsletters, currentPage, numPerPage) =>
    newsletters.slice(currentPage * numPerPage, (currentPage + 1) * numPerPage);

// renders the current newsletters from props in a grid
const renderPublicationGrid = (currentNewsletters) => (
    <div className="NewsletterContainer">
        {currentNewsletters.map((newsletter) => (
            <NewsletterCard
                key={newsletter.title}
                title={newsletter.title}
                year={newsletter.year}
                image_url={newsletter.image_url}
                redirect_url={newsletter.redirect_url}
            />
        ))}
    </div>
);

export default function Newsletters() {
    const [maxPages, setMaxPages] = useState(9);
    const [numPerPage, setNumPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0);

    // track window resizes to determine rerender
    useEffect(() => {
        function handleResize() {
            // handle max newsletters per page
            // want 6 at 1052,
            // 4 at 746
            if (window.innerWidth <= 746) {
                setNumPerPage(4);
                setMaxPages(Math.ceil(newsletterList.length / 4));
            } else if (window.innerWidth <= 1167) {
                setNumPerPage(6);
                setMaxPages(Math.ceil(newsletterList.length / 6));
            } else {
                setNumPerPage(9);
                setMaxPages(Math.ceil(newsletterList.length / 9));
            }
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (
        <div className="NewsletterPage">
            <h1 className="NewsletterPage__title">Latest</h1>
            {renderPublicationGrid(calculateCards(newsletterList, currentPage, numPerPage))}
            <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                pageCount={maxPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={(e) => setCurrentPage(e.selected)}
                containerClassName="newsletter__pagination"
                activeClassName="newsletter__pagination--active"
            />
        </div>
    );
}
