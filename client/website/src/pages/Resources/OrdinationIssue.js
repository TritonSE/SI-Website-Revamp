import React, { useState, useEffect } from "react";
import "../../css/OrdinationIssue.css";
import ResourcesHeader from "../../components/ResourcesHeader";
import OrdinationImageMobile from "../../media/Ordination_Image_Mobile.svg";
import OrdinationImage from "../../media/OrdinationIssue_Image.png";

export default function OrdinationIssue() {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div>
            {/* Renders mobile or desktop layout based on screen size */}
            {isMobile ? (
                <div>
                    <ResourcesHeader
                        image="https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1623024000&Signature=SCONX7E-9B-btNQQ0a8fn1kh2A4i8I3-aZjQlNXgBZSJnw~N8fCz7YzTOmI6hq0iinH~f~2cTCB2mvuab1dM3sLLIqbF1ZwaOcYlCXMiOAkhAYMkzVbcbZgrN6s4X67Jq2fSmA7D-kgk9KzDjiXkLnxn0n8l~TMh6huoB18N5MbJrighV~Hl2YaoJrHmEWhjoBu8Jhm8TDPB99ghsGKIOR9xQMIuULa4STzVHCkoCtzWzWBLgd1-BDv2hhE67pH5PYqoIJnzZwEemddHpUtI-RMW2xHPaq6J8P1LnvRfL9Kuq00ULLl3h04474LC9EjWGr2cACW0lhgyX~ei0roR3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        title="Ordination Issue"
                        height="258px"
                        width="100%"
                    />
                    <div className="page-content">
                        <p className="ordination-text">
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
                        image="https://s3-alpha-sig.figma.com/img/2632/7b67/21741a7000235fce33b207b71e8da1cd?Expires=1622419200&Signature=NaKrOXhTogZlNaWaE-kcQHGyv7cZL745P19PBIu3a~8UWgMEh0wqj3bAmfbhisl4j91lMJQei5kgDCFq4KIUeqRX39BNJxg7qt8CKrpx1Hw-kdUaaTz-10Rqp6tw~vxCma9x19Ry~JIhDTRyAjyn2zN21NTYCNvF1Xpc2BgzzavRdZsW22cFD66fde8NG-Sqq85fT4QwvDxStiavUn0EqvAYPvYDxJ2uhghbnI6U07n5MmEI~nrUzV2IamBqywS-B5TMo7Qqxnajzf1H6WgNKrFRVFok5jNVy4J4HNXYJLp7lQFXZ1yzs9YD~bapJXBg1Yo9R6KTWsv58zxvtw2M6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        title="The Ordination Issue"
                        height="600px"
                        width="100%"
                    />
                    <div className="page-content">
                        <p className="ordination-text">
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
