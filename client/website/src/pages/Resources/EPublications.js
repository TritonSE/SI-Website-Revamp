/**
 * renders the EPublication page that includes sections of publications
 * that can be expanded to show all publications in that section. This page
 * currently uses dummy data to display the publication list.
 *
 * Calls EPubCard.js, and EPubSection.js
 *
 * @Author PatrickBrown1
 */

import React, { useState, useEffect } from "react";
import Slideshow from "../../components/Slideshow";
import EPubSection from "../../components/EPubs/EPubSection";
import EPubCard from "../../components/EPubs/EPubCard";
import "../../css/EPublications.css";

// dummy data for each publication list
const page_data = {
    sections: [
        {
            section_title: "Section 1",
            section_list: [
                {
                    title: "title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "super duper long title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "even longer super duper long title that takes 3 lines",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 4",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 5",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 6",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
            ],
        },
        {
            section_title: "Section 2",
            section_list: [
                {
                    title: "title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "super duper long title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
            ],
        },
        {
            section_title: "Section 3",
            section_list: [
                {
                    title: "title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "super duper long title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "even longer super duper long title that takes 3 lines",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 4",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 5",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 6",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "super duper long title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "even longer super duper long title that takes 3 lines",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 4",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 5",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 6",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "super duper long title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "even longer super duper long title that takes 3 lines",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 4",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 5",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 6",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "super duper long title",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "even longer super duper long title that takes 3 lines",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 4",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 5",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
                {
                    title: "title 6",
                    author: "first last",
                    image_url: "https://m.media-amazon.com/images/I/51Xam3Ue3yL.jpg",
                    redirect_link: "https://google.com",
                },
            ],
        },
    ],
};

// renders selected section from state, including each card in that page,
// and a button to go back to the main EPublications screen
const renderSelectedSection = (selectedSection, setSelectedSection, isMobile) => {
    if (!isMobile) {
        // render desktop version
        return (
            <div className="EPub_SelectedSection">
                <div className="EPub_SelectedSection_header">
                    <h1 className="EPub_SelectedSection_header_title">
                        {selectedSection.section_title}
                    </h1>
                    <button
                        type="button"
                        className="EPub_SelectedSection_header_back"
                        onClick={() => {
                            setSelectedSection("");
                        }}
                    >
                        &lt; Back
                    </button>
                    <p className="EPub_SelectedSection_header_seeAll">
                        All <span>({selectedSection.section_list.length})</span>
                    </p>
                </div>
                <div className="EPub_SelectedSection_body">
                    {
                        // render each card based on data passed in
                        selectedSection.section_list.map((pub) => (
                            <EPubCard
                                title={pub.title}
                                author={pub.author}
                                image_url={pub.image_url}
                                redirect_link={pub.redirect_link}
                                isMobile={isMobile}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
    return (
        // render mobile version
        <div className="EPub_SelectedSection--mobile">
            <div className="EPub_SelectedSection_header--mobile">
                <h1 className="EPub_SelectedSection_header_title--mobile">
                    {selectedSection.section_title}
                </h1>
                <button
                    type="button"
                    className="EPub_SelectedSection_header_back--mobile"
                    onClick={() => {
                        setSelectedSection("");
                    }}
                >
                    &lt; Back to latest
                </button>
            </div>
            <div className="EPub_SelectedSection_body--mobile">
                {
                    // render each card based on data passed in
                    selectedSection.section_list.map((pub) => (
                        <div className="EPub_SelectedSection_body_cardcontainer">
                            <EPubCard
                                title={pub.title}
                                author={pub.author}
                                image_url={pub.image_url}
                                redirect_link={pub.redirect_link}
                                isMobile={isMobile}
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    window.open(pub.redirect_link, "_blank", "norefferer")
                                }
                                className="EPub_SelectedSection_body_readbutton--mobile"
                            >
                                Read
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
// No props
export default function EPublications() {
    const [selectedSection, setSelectedSection] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    // max width size that mobile view will be rendered
    const MAX_MOBILE_VIEW_WIDTH = 600;

    // track window resizes to determine rerender
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= MAX_MOBILE_VIEW_WIDTH);
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    useEffect(() => {
        // scroll to top whenever a new section is selected / left
        document.getElementById("page-layout").scrollTo({ top: 0, behavior: "smooth" });
    }, [selectedSection]);
    return (
        <div id="EPubPage">
            {selectedSection === "" ? (
                <>
                    <Slideshow
                        height={isMobile ? "530px" : "450px"}
                        width="100%"
                        isMobile={isMobile}
                    >
                        {/* Temp Slides */}
                        <div>
                            <div className="EPub_Slide">
                                <div className="EPub_Slide_body">
                                    <h1>E-Publications</h1>
                                    <h2>Author</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Maecenas facilisis condimentum massa, sit amet lacinia massa
                                        commodo sed. Praesent vehicula eget arcu ut laoreet. Sed
                                        porta, dui ut dapibus sodales, orci neque volutpat arcu, in
                                        efficitur sem tortor vel lectus.{" "}
                                    </p>
                                    <button
                                        type="button"
                                        className="EPub_Slide_body_readMoreButton"
                                    >
                                        Read More
                                    </button>
                                </div>
                                <img
                                    className="EPub_Slide_image"
                                    src="https://m.media-amazon.com/images/I/41Ht+tl9cCL._AC_UY218_.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div>
                            <div className="EPub_Slide">
                                <div className="EPub_Slide_body">
                                    <h1>E-Publications</h1>
                                    <h2>Author</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Maecenas facilisis condimentum massa, sit amet lacinia massa
                                        commodo sed. Praesent vehicula eget arcu ut laoreet. Sed
                                        porta, dui ut dapibus sodales, orci neque volutpat arcu, in
                                        efficitur sem tortor vel lectus.{" "}
                                    </p>
                                    <button
                                        type="button"
                                        className="EPub_Slide_body_readMoreButton"
                                    >
                                        Read More
                                    </button>
                                </div>
                                <img
                                    className="EPub_Slide_image"
                                    src="https://m.media-amazon.com/images/I/41Ht+tl9cCL._AC_UY218_.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Slideshow>
                    {/* Render a new publications section for each section in data, pass in each card */}
                    <div className={!isMobile ? "EPub_body" : "EPub_body--mobile"}>
                        {page_data.sections.map((section) => (
                            <EPubSection
                                publication_section={section}
                                setSelectedSection={setSelectedSection}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                </>
            ) : (
                renderSelectedSection(
                    page_data.sections.filter((e) => e.section_title === selectedSection)[0],
                    setSelectedSection,
                    isMobile
                )
            )}
        </div>
    );
}
