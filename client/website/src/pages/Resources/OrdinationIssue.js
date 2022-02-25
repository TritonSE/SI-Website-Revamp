import React, { useState, useEffect } from "react";
import "../../css/OrdinationIssue.css";
import ResourcesHeader from "../../components/ResourcesHeader";

import { fetchSection } from "../../util/requests";
import Loader from "../../components/Main/Loader";

import Header from "../../media/Lotus_Header.png";

export default function OrdinationIssue() {
    const [isMobile, setIsMobile] = useState(false);
    const arrowScrollToRef = React.createRef();
    const [isLoading, setIsLoading] = useState(false);
    const [ordinationIssues, setOrdinationIssues] = useState([]);

    // modifies isMobile state when window resizes
    useEffect(async () => {
        setIsLoading(true);
        function handleResize() {
            setIsMobile(window.innerWidth <= 600);
        }

        // event listener for resize
        window.addEventListener("resize", handleResize);
        handleResize();

        const data = await fetchSection("OrdinationIssue");

        setOrdinationIssues(data);
        setIsLoading(false);

        // Removes event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToRef = () => {
        // only scrolls if element has been rendered on the screen by DOM first
        if (arrowScrollToRef.current) {
            arrowScrollToRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    if (isLoading) {
        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Loader />
            </div>
        );
    }

    return (
        <div>
            {/* Renders mobile or desktop layout based on screen size */}
            {isMobile || window.innerHeight <= 500 ? (
                <div>
                    <ResourcesHeader
                        image={Header}
                        title="Ordination Issue"
                        height="max(40vh, 300px)"
                        width="100%"
                        arrowClickCallback={scrollToRef}
                        showArrow={false}
                    />

                    {ordinationIssues.map((ordinationIssue) =>
                        ordinationIssue.isPublished ? (
                            <>
                                <h2 className="page-content">{ordinationIssue.title}</h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: `${ordinationIssue.content}`,
                                    }}
                                    className="page-content"
                                />
                            </>
                        ) : (
                            ""
                        )
                    )}
                </div>
            ) : (
                <div>
                    <ResourcesHeader
                        image={Header}
                        title="The Ordination Issue"
                        text="Discussing the ordination issue "
                        height="max(75vh, 400px)"
                        width="100%"
                        arrowClickCallback={scrollToRef}
                    />
                    {ordinationIssues.map((ordinationIssue) =>
                        ordinationIssue.isPublished ? (
                            <>
                                <h2 className="page-content">{ordinationIssue.title}</h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: `${ordinationIssue.content}`,
                                    }}
                                    className="page-content"
                                />
                            </>
                        ) : (
                            ""
                        )
                    )}
                </div>
            )}
        </div>
    );
}
