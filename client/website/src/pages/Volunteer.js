/**
 * This file implements the Volunteer page, which contains a header and a form that is
 * used to sign up for volunteering. The form asks for the user's name, contact
 * information, and committee interests. It renders both the desktop and mobile version
 * of this page based on the screen size.
 *
 * @summary Implements the Volunteer page
 * @author Dhanush Nanjunda Reddy
 */

import React, { useState, useEffect } from "react";
import "../css/Volunteer.css";

import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { CountryDropdown } from "react-country-region-selector";
import ResourcesHeader from "../components/ResourcesHeader";
import VolunteerOption from "../components/VolunteerOption";

function displayAsterisk() {
    return <span className="error-asterisk">*</span>;
}

const CustomTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "black",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "1px solid #000000",
                borderRadius: "15px",
                fontFamily: "Nunito",
                fontSize: "18px",
                lineHeight: "1.95vw",
                boxSizing: "border-box",
                color: "#000000",
            },
            "&:hover fieldset": {
                borderColor: "black",
            },
            "&.Mui-focused fieldset": {
                borderColor: "black",
            },
        },
        "& input": {
            height: "0.2vw",
            fontFamily: "Nunito",
            fontSize: "18px",
            lineHeight: "25px",
            color: "black",
            opacity: "1",
            "&::placeholder": {
                fontFamily: "Nunito",
                fontSize: "18px",
                lineHeight: "25px",
                color: "black",
                opacity: "1",
            },
        },
    },
})(TextField);

export default function Volunteer() {
    // const classes = props.classes;

    const [isMobile, setIsMobile] = useState(false);
    // const [formCheck, setFormCheck] = useState(false);

    const [country, setCountry] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [stateLocation, setStateLocation] = useState("");
    const [zipcode, setZipcode] = useState("");

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");

    const [editing, setEditing] = useState(false);
    const [techSupport, setTechSupport] = useState(false);
    const [administration, setAdministration] = useState(false);
    const [research, setResearch] = useState(false);
    const [socialJustice, setSocialJustice] = useState(false);
    const [writing, setWriting] = useState(false);
    const [building, setBuilding] = useState(false);
    const [accounting, setAccounting] = useState(false);
    const [programming, setProgramming] = useState(false);
    const [planning, setPlanning] = useState(false);
    const [arts, setArts] = useState(false);
    const [translation, setTranslation] = useState(false);
    const [branches, setBranches] = useState(false);
    const [design, setDesign] = useState(false);
    const [ordination, setOrdination] = useState(false);

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

    const handleCountryChange = (value) => {
        setCountry(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // call backend route to store volunteer data
    };

    const inputFieldStyle = {
        borderRadius: "15px",
        boxSizing: "border-box",
        border: "1px solid #000000",
        fontFamily: "Nunito",
        fontSize: "18px",
        lineHeight: "1.95vw",
        color: "#000000",
        background: "#FFFFFF",
    };

    return (
        <div>
            <ResourcesHeader
                image="https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1623024000&Signature=SCONX7E-9B-btNQQ0a8fn1kh2A4i8I3-aZjQlNXgBZSJnw~N8fCz7YzTOmI6hq0iinH~f~2cTCB2mvuab1dM3sLLIqbF1ZwaOcYlCXMiOAkhAYMkzVbcbZgrN6s4X67Jq2fSmA7D-kgk9KzDjiXkLnxn0n8l~TMh6huoB18N5MbJrighV~Hl2YaoJrHmEWhjoBu8Jhm8TDPB99ghsGKIOR9xQMIuULa4STzVHCkoCtzWzWBLgd1-BDv2hhE67pH5PYqoIJnzZwEemddHpUtI-RMW2xHPaq6J8P1LnvRfL9Kuq00ULLl3h04474LC9EjWGr2cACW0lhgyX~ei0roR3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="Volunteer"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem tortor vel lectus."
                height={isMobile ? "95vh" : "600px"}
                width="100%"
            />
            <div className="volunteer-content">
                <form onSubmit={handleSubmit}>
                    <h1 className="signup-text">Sign Me Up!</h1>
                    <div className="form-item">
                        <CustomTextField
                            variant="outlined"
                            className="first-name input-field"
                            placeholder="First Name"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {displayAsterisk()}
                    </div>
                    <div className="form-item">
                        <CustomTextField
                            variant="outlined"
                            className="middle-name input-field"
                            placeholder="Middle Name"
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <CustomTextField
                            variant="outlined"
                            className="last-name input-field"
                            placeholder="Last Name"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {displayAsterisk()}
                    </div>
                    <h1 className="contact-info-text">Contact Information</h1>
                    <div className="form-item">
                        <CustomTextField
                            variant="outlined"
                            className="phone-number input-field"
                            placeholder="Phone Number"
                            type="tel"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {displayAsterisk()}
                    </div>
                    <div className="form-item">
                        <CustomTextField
                            variant="outlined"
                            className="email-address input-field"
                            placeholder="Email Address"
                            type="email"
                            required
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                        />
                        {displayAsterisk()}
                    </div>
                    <div className="form-item">
                        <CountryDropdown
                            className="input-field country-dropdown"
                            style={inputFieldStyle}
                            value={country}
                            onChange={handleCountryChange}
                        />
                        {displayAsterisk()}
                    </div>
                    {country !== "" ? (
                        <div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="address-line1 input-field"
                                    placeholder="Address Line 1"
                                    required
                                    value={addressOne}
                                    onChange={(e) => setAddressOne(e.target.value)}
                                />
                                {displayAsterisk()}
                            </div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="address-line2 input-field"
                                    placeholder="Address Line 2"
                                    value={addressTwo}
                                    onChange={(e) => setAddressTwo(e.target.value)}
                                />
                            </div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="city-field input-field"
                                    placeholder="City"
                                    required
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                {displayAsterisk()}
                            </div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="state-field input-field"
                                    placeholder="State"
                                    required
                                    value={stateLocation}
                                    onChange={(e) => setStateLocation(e.target.value)}
                                />
                                {displayAsterisk()}
                            </div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="zipcode-field input-field"
                                    placeholder="Zip Code"
                                    required
                                    value={zipcode}
                                    onChange={(e) => setZipcode(e.target.value)}
                                />
                                {displayAsterisk()}
                            </div>
                        </div>
                    ) : null}
                    <h1 className="help-section-title">What would you like to help with?</h1>
                    <p className="select-committees-text">
                        Select all committees you are interested in.
                    </p>
                    {isMobile ? (
                        <div className="volunteer-options">
                            <VolunteerOption
                                value={editing}
                                handleChange={(e) => setEditing(e.target.checked)}
                                title="Editing"
                                description="Put together recap videos for our annual conferences."
                            />
                            <VolunteerOption
                                value={techSupport}
                                handleChange={(e) => setTechSupport(e.target.checked)}
                                title="Tech Support"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={administration}
                                handleChange={(e) => setAdministration(e.target.checked)}
                                title="Administration"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={research}
                                handleChange={(e) => setResearch(e.target.checked)}
                                title="Research"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={socialJustice}
                                handleChange={(e) => setSocialJustice(e.target.checked)}
                                title="Social Justice"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={writing}
                                handleChange={(e) => setWriting(e.target.checked)}
                                title="Writing"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={building}
                                handleChange={(e) => setBuilding(e.target.checked)}
                                title="Building & Planting"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={accounting}
                                handleChange={(e) => setAccounting(e.target.checked)}
                                title="Accounting"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={programming}
                                handleChange={(e) => setProgramming(e.target.checked)}
                                title="Programming"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={planning}
                                handleChange={(e) => setPlanning(e.target.checked)}
                                title="Conference Planning"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={arts}
                                handleChange={(e) => setArts(e.target.checked)}
                                title="Arts"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={translation}
                                handleChange={(e) => setTranslation(e.target.checked)}
                                title="Translation"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={branches}
                                handleChange={(e) => setBranches(e.target.checked)}
                                title="Branches & Chapters"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={design}
                                handleChange={(e) => setDesign(e.target.checked)}
                                title="Design"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                            <VolunteerOption
                                value={ordination}
                                handleChange={(e) => setOrdination(e.target.checked)}
                                title="Ordination"
                                description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                            />
                        </div>
                    ) : (
                        <div className="volunteer-options">
                            <div className="left-options-column">
                                <VolunteerOption
                                    value={editing}
                                    handleChange={(e) => setEditing(e.target.checked)}
                                    title="Editing"
                                    description="Put together recap videos for our annual conferences."
                                />
                                <VolunteerOption
                                    value={techSupport}
                                    handleChange={(e) => setTechSupport(e.target.checked)}
                                    title="Tech Support"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={administration}
                                    handleChange={(e) => setAdministration(e.target.checked)}
                                    title="Administration"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={research}
                                    handleChange={(e) => setResearch(e.target.checked)}
                                    title="Research"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={socialJustice}
                                    handleChange={(e) => setSocialJustice(e.target.checked)}
                                    title="Social Justice"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={writing}
                                    handleChange={(e) => setWriting(e.target.checked)}
                                    title="Writing"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={building}
                                    handleChange={(e) => setBuilding(e.target.checked)}
                                    title="Building & Planting"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={accounting}
                                    handleChange={(e) => setAccounting(e.target.checked)}
                                    title="Accounting"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                            </div>
                            <div className="right-options-column">
                                <VolunteerOption
                                    value={programming}
                                    handleChange={(e) => setProgramming(e.target.checked)}
                                    title="Programming"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={planning}
                                    handleChange={(e) => setPlanning(e.target.checked)}
                                    title="Conference Planning"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={arts}
                                    handleChange={(e) => setArts(e.target.checked)}
                                    title="Arts"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={translation}
                                    handleChange={(e) => setTranslation(e.target.checked)}
                                    title="Translation"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={branches}
                                    handleChange={(e) => setBranches(e.target.checked)}
                                    title="Branches & Chapters"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={design}
                                    handleChange={(e) => setDesign(e.target.checked)}
                                    title="Design"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                                <VolunteerOption
                                    value={ordination}
                                    handleChange={(e) => setOrdination(e.target.checked)}
                                    title="Ordination"
                                    description="One sentence description about expected volunteer responsibilities that is limited to 110 characters for each."
                                />
                            </div>
                        </div>
                    )}
                    <button className="submit-form" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
