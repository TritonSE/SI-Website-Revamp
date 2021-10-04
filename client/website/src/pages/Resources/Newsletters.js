/**
 *  This file renders the Newsletters section of the Resources page. It utilizes
 *  the NewsletterCard component, as well as the react-paginate package.
 *
 *  @author PatrickBrown1
 */
import React, { useState, useEffect, useMemo } from "react";
import ReactPaginate from "react-paginate";

import ResourcesHeader from "../../components/ResourcesHeader";
import NewsletterCard from "../../components/Newsletters/NewsletterCard";
import "../../css/Newsletters.css";

import Header from "../../media/Lotus_Header.png";

import { fetchNewsletters } from "../../util/requests";

// const useNewsletters = () => {
//     const [newsletters, setNewsletters] = useState([]);
//     const [loadingNewsletters, setLoadingNewsletters] = useState(true);

//     useEffect(async () => {
//         (async () => {
//             const d = await fetchNewsletters();
//             setNewsletters(d);
//         })();
//         setLoadingNewsletters(false);
//     }, []);
//     return [newsletters, loadingNewsletters];
// };

// fill newsletterList
// const newsletterList = [];
// let i = 0;
// for (i; i < 50; i++) {
//     newsletterList.push({
//         title: `Newsletter ${i}`,
//         year: "2019",
//         image_url:
//             "https://cdn2.wanderlust.co.uk/media/1069/lists-the-worlds-most-awesome-giant-buddhas.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131482975350000000",
//         redirect_url: "https://google.com",
//     });
// }

// calculates the correct newsletter cards to display given the newsletters, current page, and
// number of newsletters per page
// const calculateCards = (newsletters, currentPage, numPerPage) =>
//     newsletters.slice(currentPage * numPerPage, (currentPage + 1) * numPerPage);

// renders the current newsletters from props in a grid
const renderPublicationGrid = (currentNewsletters, isMobile) => (
    <div className="NewsletterContainer">
        {currentNewsletters.map((newsletter) => (
            <NewsletterCard
                key={newsletter.title}
                title={newsletter.volume}
                year={newsletter.year}
                image_url={newsletter.imageLink}
                redirect_link={newsletter.pdfLink}
                isMobile={isMobile}
            />
        ))}
    </div>
);

export default function Newsletters() {
    const [maxPages, setMaxPages] = useState(9);
    const [numPerPage, setNumPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const [newsletters, setNewsletters] = useState([]);
    const [loadingNewsletters, setLoadingNewsletters] = useState(true);
    const displayedNewsletters = useMemo(
        () => newsletters.slice(currentPage * numPerPage, (currentPage + 1) * numPerPage),
        [maxPages, numPerPage, currentPage, newsletters]
    );

    useEffect(async () => {
        (async () => {
            const d = await fetchNewsletters();
            console.log(d);
            setNewsletters(d);
        })();
        setLoadingNewsletters(false);
    }, []);

    // track window resizes to determine rerender
    useEffect(() => {
        function handleResize() {
            // handle max newsletters per page
            // want 6 at 1052,
            // 4 at 746
            if (window.innerWidth <= 746) {
                setNumPerPage(4);
                setMaxPages(Math.ceil(newsletters.length / 4));
            } else if (window.innerWidth <= 1167) {
                setNumPerPage(6);
                setMaxPages(Math.ceil(newsletters.length / 6));
            } else {
                setNumPerPage(9);
                setMaxPages(Math.ceil(newsletters.length / 9));
            }

            if (window.innerWidth <= 450) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    // make sure current page never exceeds maxPages
    useEffect(() => {
        if (currentPage >= maxPages && currentPage > 0) {
            setCurrentPage(maxPages - 1);
        }
    }, [currentPage, maxPages]);

    return (
        <>
            {isMobile || window.innerHeight <= 500 ? (
                <ResourcesHeader
                    title="Sakyadhita Newsletters"
                    text=""
                    image={Header}
                    height="max(40%, 300px)"
                    width="100%"
                />
            ) : (
                <ResourcesHeader
                    title="Sakyadhita Newsletters"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus. "
                    image={Header}
                    height="max(75vh, 400px)"
                    width="100%"
                />
            )}

            <div className="NewsletterPage">
                <h1
                    className={
                        !isMobile ? "NewsletterPage__title" : "NewsletterPage__title--mobile"
                    }
                >
                    Latest
                </h1>
                {loadingNewsletters ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {/* <div className="NewsletterContainer">
                            {displayedNewsletters.map((newsletter) =>
                                <NewsletterCard
                                    key={`newsletter-${newsletter.id}`}
                                    title={newsletter.volume}
                                    year={newsletter.year}
                                    image_url={newsletter.imageLink}
                                    redirect_link={newsletter.pdfLink}
                                    isMobile={isMobile}
                                />
                            )}
                        </div> */}
                        {renderPublicationGrid(displayedNewsletters, isMobile)}
                        <ReactPaginate
                            previousLabel="<"
                            nextLabel=">"
                            breakLabel="..."
                            pageCount={maxPages}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            forcePage={currentPage}
                            onPageChange={(e) => setCurrentPage(e.selected)}
                            containerClassName="newsletter__pagination"
                            activeClassName="newsletter__pagination--active"
                        />
                    </>
                )}
            </div>
        </>
    );
}
