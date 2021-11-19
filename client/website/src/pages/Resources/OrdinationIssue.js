import React, { useState, useEffect } from "react";
import "../../css/OrdinationIssue.css";
import ResourcesHeader from "../../components/ResourcesHeader";
import OrdinationImageMobile from "../../media/Ordination_Image_Mobile.svg";
import OrdinationImage from "../../media/OrdinationIssue_Image.png";

import Header from "../../media/Lotus_Header.png";

export default function OrdinationIssue() {
    const [isMobile, setIsMobile] = useState(false);
    const arrowScrollToRef = React.createRef();

    // modifies isMobile state when window resizes
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 600);
        }

        // event listener for resize
        window.addEventListener("resize", handleResize);
        handleResize();

        // Removes event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToRef = () => {
        // only scrolls if element has been rendered on the screen by DOM first
        if (arrowScrollToRef.current) {
            arrowScrollToRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    };

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
                    <div className="page-content">
                        <p className="ordination-text" ref={arrowScrollToRef}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel
                            lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel
                            lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="ordination-text bottom-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel
                            lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel
                            lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <img
                        src={OrdinationImageMobile}
                        ima
                        alt="Ordination Issue"
                        className="ordination-image"
                    />
                </div>
            ) : (
                <div>
                    <ResourcesHeader
                        image={Header}
                        title="The Ordination Issue"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus. "
                        height="max(75vh, 400px)"
                        width="100%"
                        arrowClickCallback={scrollToRef}
                    />
                    <div className="page-content">
                        <p className="ordination-text" ref={arrowScrollToRef}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel
                            lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel
                            lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <img
                            src={OrdinationImage}
                            alt="Ordination Issue"
                            className="ordination-image"
                        />
                        <p className="ordination-text bottom-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel
                            lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus
                            sodales, orci neque volutpat arcu, in efficitur sem tortor vel
                            lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
