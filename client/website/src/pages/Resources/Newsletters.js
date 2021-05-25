/**
 *  This file renders the Newsletters section of the Resources page. It utilizes
 *  the NewsletterCard component, as well as the react-paginate package.
 *
 *  @author PatrickBrown1
 */
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import ResourcesHeader from "../../components/ResourcesHeader";
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
const renderPublicationGrid = (currentNewsletters, isMobile) => (
    <div className="NewsletterContainer">
        {currentNewsletters.map((newsletter) => (
            <NewsletterCard
                key={newsletter.title}
                title={newsletter.title}
                year={newsletter.year}
                image_url={newsletter.image_url}
                redirect_link={newsletter.redirect_url}
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

            if (window.innerWidth <= 400) {
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

    return (
        <>
            {isMobile ? (
                <ResourcesHeader
                    title="Sakyadhita Newsletters"
                    text=""
                    image="https://s3-alpha-sig.figma.com/img/2632/7b67/21741a7000235fce33b207b71e8da1cd?Expires=1622419200&Signature=NaKrOXhTogZlNaWaE-kcQHGyv7cZL745P19PBIu3a~8UWgMEh0wqj3bAmfbhisl4j91lMJQei5kgDCFq4KIUeqRX39BNJxg7qt8CKrpx1Hw-kdUaaTz-10Rqp6tw~vxCma9x19Ry~JIhDTRyAjyn2zN21NTYCNvF1Xpc2BgzzavRdZsW22cFD66fde8NG-Sqq85fT4QwvDxStiavUn0EqvAYPvYDxJ2uhghbnI6U07n5MmEI~nrUzV2IamBqywS-B5TMo7Qqxnajzf1H6WgNKrFRVFok5jNVy4J4HNXYJLp7lQFXZ1yzs9YD~bapJXBg1Yo9R6KTWsv58zxvtw2M6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    height="40%"
                    width="100%"
                />
            ) : (
                <ResourcesHeader
                    title="Sakyadhita Newsletters"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus. "
                    image="https://s3-alpha-sig.figma.com/img/2632/7b67/21741a7000235fce33b207b71e8da1cd?Expires=1622419200&Signature=NaKrOXhTogZlNaWaE-kcQHGyv7cZL745P19PBIu3a~8UWgMEh0wqj3bAmfbhisl4j91lMJQei5kgDCFq4KIUeqRX39BNJxg7qt8CKrpx1Hw-kdUaaTz-10Rqp6tw~vxCma9x19Ry~JIhDTRyAjyn2zN21NTYCNvF1Xpc2BgzzavRdZsW22cFD66fde8NG-Sqq85fT4QwvDxStiavUn0EqvAYPvYDxJ2uhghbnI6U07n5MmEI~nrUzV2IamBqywS-B5TMo7Qqxnajzf1H6WgNKrFRVFok5jNVy4J4HNXYJLp7lQFXZ1yzs9YD~bapJXBg1Yo9R6KTWsv58zxvtw2M6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    height="100%"
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
                {renderPublicationGrid(
                    calculateCards(newsletterList, currentPage, numPerPage),
                    isMobile
                )}
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    pageCount={maxPages}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={(e) => setCurrentPage(e.selected)}
                    containerClassName="newsletter__pagination"
                    activeClassName="newsletter__pagination--active"
                />
            </div>
        </>
    );
}
