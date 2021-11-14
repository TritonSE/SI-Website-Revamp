import React from "react";
import CustomButton from "../components/CustomButton";
import ResourcesHeader from "../components/ResourcesHeader";
import BeInvolved from "../components/Home/BeInvolved";
import { SITE_PAGES } from "../constants/links";

import Header from "../media/Lotus_Header.png";

import "../css/Donate.css";

export default function Donate() {
    return (
        <div id="donate-page">
            <ResourcesHeader
                title="Donate & Support"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus. "
                image={Header}
                height="max(75vh, 400px)"
                width="100%"
            />
            <div className="donate-content-container">
                <div className="monetory-container">
                    <section className="donate-section">
                        <h1> PayPal </h1>
                        <hr />
                        <p>
                            Your donation makes a difference. In the tradition of the Buddha our
                            work is offered publicly, and free of charge when possible.
                            Consequently, the vital work Sakyadhita performs is funded entirely
                            through donations, memberships, and conference fees. Your generosity
                            allows us to keep conference fees low, while offering conference
                            scholarships to female monastics who otherwise would not be able to
                            attend our bi-annual conferences.
                        </p>
                        <br/>
                        <p> <b> Make a One-Time or Reoccuring Donation </b> </p>
                        <div className="paypal-donate-button-wrapper">
                            <form action="https://www.paypal.com/donate" method="post" target="_blank">
                                <input type="hidden" name="hosted_button_id" value="8QWLNGYMEFDDU" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </div>
                        <br/>
                        <img
                            width="400px"
                            height="auto"
                            src="https://lh3.googleusercontent.com/x4JvEpJzki8FRtAsBZ2fdWQUUAjorJfgJNYklcDHDmp_MOf8ZD-mDTKz_sLXi1uhUwWrT_UOZT0OjhFWImI41X1VOVQNySlPqPDiShG7Zd5K2KC8c5SqK1WLy77LIYDKPPt2Hgn2w7okpDqw8N7yJPQ8xbZ56sQRVx7s0rmrGPX9fB5CPulk8FqGYjZzAXvBhqdIAFdkVJlvYNTQGpzJb3eUGnGZY4zTcrD6P3ibR5YjlrZu_1diwvDxLQKVPXoHHT1-jgJQDlaXJtMyE7UjPJ_QR0QBzgp5MIV0suF4SteJBO_9B2ny3UaSXw4-7HFxkTR60QQr0XJ7XIX-I00VDI8TYP_QIO_Nf-vuFWMqmL1LOcK4XJQJRTSkaNXxVFKBaiuMvXcx42X0iT7npJWy7ocFrxI9ue3V6y5K9piL2-_G6J8HNloimTQkyjWOy7GKc8mbPWWQ_GrK-lJB9zhQYJNoe_VBFwNjyAzZKCLZ1ndy3VMYjJ-uYHIqbiPSK2JtY2IkHn1jXVEFIGcxdN6TVjZUmJEsQTgm_1z7IKUeWmW2joyurGVbaqOSqnGRkMxSnYX8_H8wg8dSTIRI6zFyLTaH0wp_dLmXBE7NVnk_kOm6TZyQncFcwkuDuZnW_A3HiiBsfhZat320jSurioM417SIJSblvfWWKBuzpngWx7sTjkh9OzOQRpSXQElOIdhIfw7MzsMu-qwLKVm6O0L8HIIK=w440-h292-no?authuser=1"
                        />

                    </section>
                    <section className="donate-section">
                        <h1> AmazonSmile </h1>
                        <hr />
                        <p>
                            You can also support Sakyadhita International by shopping online through
                            AmazonSmile, a simple and automatic way for you to support Sakyadhita
                            every time you shop, at no cost to you. When you shop at AmazonSmile,
                            you’ll find the exact same low prices, vast selection and convenient
                            shopping experience as Amazon.com, with the added bonus that Amazon will
                            donate a portion of the purchase price to Sakyadhita.
                        </p>
                        <img
                            width="350px"
                            height="auto"
                            src="https://lh3.googleusercontent.com/iaqbq8klTR7n_IbDljHzABouDg6-uY7WnCTKfrAm_hrAYnr0G2iFG1HSuybWOecvoXbW0rwbhXLVDVUUudPBl8TIOOO7tbyKvpiaDB4k3hZFYxJ8fLyFHppRqEUlBeg_tOs7cv8lVFWB44McUdqoKYvJBhMAsVe5HISoSX6n8ui8xCqTVR43ItF82jUWnh9AGNjepsyBALaCcagvwF0i4VHR5_l3ds-0a6gxWzz74e-Vvraqz1fR1mTHZ-M-QNtSsyHF-oQnfx2swuqtQqxjcyi0LIgVduLRdUeI6GlJgEAlrb9D5eZ4eEvTd9kHbvCHbZ-5uO4uQV2li_AI9VflECYy3yYI0N_FyndmibDEcHW-qORo-qBuSgpf0iarRy792qtZWYz7vHJK5DZusjdiDJSm334e3DGAPtii7cGk8b3fBwmy9lkYddmgL_tKUAMXZdcF4HQYNQ_mRN6UG7UTYQG-EKctievsX7KjtJk7DuKiO-jnbpXrUKsKktLCKjyxBAl75rNP0Rpt95aKTfw6-AHwc96Hm9kmxtIu9qnGC0e54TbJjHQu_XMJVdaFO2vhqHLt6xdbmVBJzzZjez60KZoDz-eKMCY5V7ZIdCF-7vykJ79zsOzVWi0ADiW0AhKC5a7sGBqaon4XG1KnqQ0OpvpruY0uli2T-1iiK9DAuEtDf5uQj9ncJGJiFrYx4LS7iowuWLJtnHCJK2e_V89c99E=w350-h294-no?authuser=1"
                        />
                        <br />
                        <CustomButton
                            text="Support"
                            redirect_link="http://smile.amazon.com/ch/95-4112765"
                        />
                    </section>
                </div>
                <div className="donate-divider-wrapper">
                    <hr className="donate-divider" />
                </div>

                <section>
                    <h1 style={{ marginBottom: "30px" }}> Support Us via Involvement </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis
                        condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula
                        eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat
                        arcu, in efficitur sem tortor vel lectus.
                    </p>
                    <div className="donate-be-involved">
                        {/* Join Us  */}
                        <BeInvolved
                            description="Become a member of Sakyadhita!"
                            image_url="https://d.wattpad.com/story_parts/271116779/images/161bdd205bbf18fb307084307993.jpg"
                            openInSameTab="true"
                            redirect_link={SITE_PAGES.JOIN_US}
                            button_title="Join Us"
                        />
                        {/* Volunteer  */}
                        <BeInvolved
                            description="Interested in helping us with anything from writing content to
                            building?"
                            image_url="https://lh3.googleusercontent.com/tVonHCrVh7igUJjFPyZ9-Cpa9eZBQXsSHGOh0_XHioRJtwK-AWFN4nH5B12qVdn1Kw8VRe_5nvegTgVu=w1080-h608-p-no-v0"
                            openInSameTab="true"
                            redirect_link={SITE_PAGES.VOLUNTEER}
                            button_title="Volunteer"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
