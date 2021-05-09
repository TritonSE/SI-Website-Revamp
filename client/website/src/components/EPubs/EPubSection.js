/**
 *
 */
import React from "react";
import EPubCard from "./EPubCard";
import "../../css/EPubSection.css";

// Renders the mobile version of a given EPub section, which includes left/right arrows
const EPubSectionMobile = () => <div />;

// desktop render
const EPubSectionDesktop = (publication_section, setSelectedSection) => (
    <div className="EPubSection">
        <div className="EPubSection_header">
            <h1 className="EPubSection_header_title">{publication_section.section_title}</h1>
            <button
                type="button"
                className="EPubSection_header_seeAll"
                onClick={() => {
                    setSelectedSection(publication_section.section_title);
                }}
            >
                All <span>({publication_section.section_list.length})</span> &gt;
            </button>
        </div>
        <div className="EPubSection_body">
            {publication_section.section_list.slice(0, 5).map((pub) => (
                <EPubCard
                    title={pub.title}
                    author={pub.author}
                    image_url={pub.image_url}
                    redirect_link={pub.redirect_link}
                />
            ))}
            <div className="EPubSection_orangebar" />
        </div>
    </div>
);
export default function EPubSection({ publication_section, setSelectedSection, isMobile }) {
    return (
        <>
            {!isMobile
                ? EPubSectionDesktop(publication_section, setSelectedSection)
                : EPubSectionMobile()}
        </>
    );
}
