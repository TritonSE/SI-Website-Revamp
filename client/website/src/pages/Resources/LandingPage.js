/**
 * Displays landing page for Resources tab. The page is just a full scale image with a title header.
 *
 * @summary Renders Resouces Landing Page.
 * @author Amrit Kaur Singh
 */

import React, { useState, useEffect } from "react";
import ResourcesHeader from "../../components/ResourcesLanding/ResourcesLandingPageHeader";
import PurpleFlower from "../../media/JoinUs_Header.png";

const MAX_MOBILE_WIDTH = 750;

export default function LandingPage() {
    // tracks layout of screen
    const [isMobile, setMobileView] = useState(false);
    const [screenDim, setScreenDim] = useState({
        width: 0,
        height: 0,
    });

    // handler to call on window resize
    useEffect(() => {
        function handleResize() {
            setScreenDim({ width: window.innerWidth, height: window.innerHeight });
            if (window.innerWidth <= MAX_MOBILE_WIDTH) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }
        }
        // add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return (
            <ResourcesHeader
                image="https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1623024000&Signature=SCONX7E-9B-btNQQ0a8fn1kh2A4i8I3-aZjQlNXgBZSJnw~N8fCz7YzTOmI6hq0iinH~f~2cTCB2mvuab1dM3sLLIqbF1ZwaOcYlCXMiOAkhAYMkzVbcbZgrN6s4X67Jq2fSmA7D-kgk9KzDjiXkLnxn0n8l~TMh6huoB18N5MbJrighV~Hl2YaoJrHmEWhjoBu8Jhm8TDPB99ghsGKIOR9xQMIuULa4STzVHCkoCtzWzWBLgd1-BDv2hhE67pH5PYqoIJnzZwEemddHpUtI-RMW2xHPaq6J8P1LnvRfL9Kuq00ULLl3h04474LC9EjWGr2cACW0lhgyX~ei0roR3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="Sakyadhita Resources"
                // height takes up rest of screen, excluding mobile navbar
                height="calc(100vh - 50px)"
                width="100%"
            />
        );
    }

    return (
        <ResourcesHeader
            image={PurpleFlower}
            title="Sakyadhita Resources"
            text="All information related and central to Sakyadhita."
            // height takes up rest of screen, excluding mobile navbar
            // first conditional takes care of mobile - landscape view
            height={screenDim.height <= 700 ? "calc(100vh - 50px)" : "calc(100vh - 190px)"}
            width="100%"
        />
    );
}
