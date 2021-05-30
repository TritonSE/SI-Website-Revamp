import React from "react";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
// import PropTypes from "prop-types";
// import MaskedInput from "react-text-mask";
import TextField from "@material-ui/core/TextField";
import ResourcesHeader from "../components/ResourcesHeader";
import CustomButton from "../components/CustomButton";
import "../css/ContactUs.css";

export default function ContactUs() {
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="Contact-Us">
            <section className="left-container">
                <h2>Thank you for your interest in Sakyadhita! </h2>
                <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis
                    condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget
                    arcu ut laoreet.{" "}
                </p>
                <h3>Reach us at: </h3>
                <p>
                    {" "}
                    <GoMail /> email@domain.org{" "}
                </p>
                <p>
                    {" "}
                    <FaPhoneAlt /> 619-260-4600 x4921{" "}
                </p>
                <div className="address">
                    <BsHouseFill style={{ fontSize: "17px" }} />
                    <p>
                        Sakyadhita International, 7331 Princess View Drive, <br /> San Diego, CA
                        92120 U.S.A.
                    </p>
                </div>
                <h3>Send us a message!</h3>
                <form className="message-form" autoComplete="off">
                    <div className="form-field-wrapper">
                        <TextField
                            className="form-field"
                            name="name"
                            label="Full Name"
                            variant="outlined"
                        />
                        <span className="required-asterisk"> * </span>
                    </div>
                    <div className="form-field-wrapper">
                        <TextField
                            className="form-field"
                            name="email"
                            label="Email"
                            variant="outlined"
                        />
                        <span className="required-asterisk"> * </span>
                    </div>
                    <div className="form-field-wrapper">
                        <TextField
                            className="form-field"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            label="Phone Number"
                            variant="outlined"
                        />
                        <span style={{ color: "white" }}> * </span>
                    </div>
                    <div className="form-field-wrapper">
                        <TextField
                            className="form-field"
                            name="message"
                            placeholder="Write your message here"
                            variant="outlined"
                            multiline
                            rows={8}
                        />
                        <span className="required-asterisk"> * </span>
                    </div>
                    <div className="submit-button">
                        <CustomButton text="Submit" />
                    </div>
                </form>
            </section>
            <ResourcesHeader
                image="https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1623024000&Signature=SCONX7E-9B-btNQQ0a8fn1kh2A4i8I3-aZjQlNXgBZSJnw~N8fCz7YzTOmI6hq0iinH~f~2cTCB2mvuab1dM3sLLIqbF1ZwaOcYlCXMiOAkhAYMkzVbcbZgrN6s4X67Jq2fSmA7D-kgk9KzDjiXkLnxn0n8l~TMh6huoB18N5MbJrighV~Hl2YaoJrHmEWhjoBu8Jhm8TDPB99ghsGKIOR9xQMIuULa4STzVHCkoCtzWzWBLgd1-BDv2hhE67pH5PYqoIJnzZwEemddHpUtI-RMW2xHPaq6J8P1LnvRfL9Kuq00ULLl3h04474LC9EjWGr2cACW0lhgyX~ei0roR3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                width="50%"
                height="auto"
                title="Contact Us"
            />
        </div>
    );
}
