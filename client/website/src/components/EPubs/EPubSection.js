/**
 *
 */
import React, { useEffect, useState } from "react";
import EPubCard from "./EPubCard";
import "../../css/EPubSection.css";

// Renders the mobile version of a given EPub section, which includes left/right arrows
const EPubSectionMobile = () => <div />;

// desktop render
const EPubSectionDesktop = (publication_list) => (
    <div>
        <div>
            <h1>Section Title</h1>
            <p>view all</p>
        </div>
        <div>
            {publication_list.slice(0, 5).map((pub) => (
                <EPubCard
                    title={pub.title}
                    author={pub.author}
                    image_url={pub.image_url}
                    redirect_link={pub.redirect_link}
                />
            ))}
        </div>
        <div>render orange bar</div>
    </div>
);
export default function EPubSection() {
    const publication_list = [
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
    ];
    // max width size that mobile view will be rendered
    const MAX_MOBILE_VIEW_WIDTH = 750;

    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    // track window resizes to determine rerender
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return (
        <>
            {windowSize.width > MAX_MOBILE_VIEW_WIDTH
                ? EPubSectionDesktop(publication_list)
                : EPubSectionMobile()}
        </>
    );
}
