/**
 * Displays landing page for Resources tab. The page is just a full scale image with a title header.
 *
 * @summary Renders Resouces Landing Page.
 * @author Amrit Kaur Singh
 */

import React, { useState, useEffect } from "react";
import ResourcesHeader from "../../components/ResourcesLanding/ResourcesLandingPageHeader";

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
            image="https://s3-alpha-sig.figma.com/img/2632/7b67/21741a7000235fce33b207b71e8da1cd?Expires=1622419200&Signature=NaKrOXhTogZlNaWaE-kcQHGyv7cZL745P19PBIu3a~8UWgMEh0wqj3bAmfbhisl4j91lMJQei5kgDCFq4KIUeqRX39BNJxg7qt8CKrpx1Hw-kdUaaTz-10Rqp6tw~vxCma9x19Ry~JIhDTRyAjyn2zN21NTYCNvF1Xpc2BgzzavRdZsW22cFD66fde8NG-Sqq85fT4QwvDxStiavUn0EqvAYPvYDxJ2uhghbnI6U07n5MmEI~nrUzV2IamBqywS-B5TMo7Qqxnajzf1H6WgNKrFRVFok5jNVy4J4HNXYJLp7lQFXZ1yzs9YD~bapJXBg1Yo9R6KTWsv58zxvtw2M6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="Sakyadhita Resources"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            // height takes up rest of screen, excluding mobile navbar
            // first conditional takes care of mobile - landscape view
            height={screenDim.height <= 700 ? "calc(100vh - 50px)" : "calc(100vh - 190px)"}
            width="100%"
        />
    );
}
