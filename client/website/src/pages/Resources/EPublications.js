import React, { useState } from "react";
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
const renderSelectedSection = (selectedSection, setSelectedSection) => (
    <div className="EPub_SelectedSection">
        <div className="EPub_SelectedSection_header">
            <h1 className="EPub_SelectedSection_header_title">{selectedSection.section_title}</h1>
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
            {selectedSection.section_list.map((pub) => (
                <EPubCard
                    title={pub.title}
                    author={pub.author}
                    image_url={pub.image_url}
                    redirect_link={pub.redirect_link}
                />
            ))}
        </div>
    </div>
);
export default function EPublications() {
    const [selectedSection, setSelectedSection] = useState("");
    return (
        <div>
            {selectedSection === "" ? (
                <>
                    <Slideshow height="400px" width="100%">
                        <div>
                            <img
                                style={{ width: "100vw", height: "400px" }}
                                alt="cat"
                                src="https://api.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg?w=1024"
                            />
                        </div>
                        <div>
                            <img
                                style={{ width: "100vw", height: "400px" }}
                                alt="cat"
                                src="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg"
                            />
                        </div>
                        <div>
                            <img
                                style={{ width: "100vw", height: "400px" }}
                                alt="cat"
                                src="https://28qs4b33l1o7458ep2hwzyw1-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/Ring-tail-Lemur-1550x700.jpg"
                            />
                        </div>
                    </Slideshow>
                    {page_data.sections.map((section) => (
                        <EPubSection
                            publication_section={section}
                            setSelectedSection={setSelectedSection}
                        />
                    ))}
                </>
            ) : (
                renderSelectedSection(
                    page_data.sections.filter((e) => e.section_title === selectedSection)[0],
                    setSelectedSection
                )
            )}
        </div>
    );
}
