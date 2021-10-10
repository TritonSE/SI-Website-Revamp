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
import { TextField, Snackbar } from "@material-ui/core";
import { CountryDropdown } from "react-country-region-selector";
import ResourcesHeader from "../components/ResourcesHeader";
import VolunteerOption from "../components/VolunteerOption";
import CustomButton from "../components/CustomButton";
import config from "../config";

const BACKEND_URL = config.backend.uri;

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
                borderColor: "#6652a0",
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
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
        },
    },
})(TextField);

export default function Volunteer() {
    const [isMobile, setIsMobile] = useState(false);

    const [values, setValues] = useState({
        firstName: {
            value: "", // field value given by user
            error: false, // field contains an error
        },
        middleName: {
            value: "",
            error: false,
        },
        lastName: {
            value: "",
            error: false,
        },
        phoneNumber: {
            value: "",
            error: false,
        },
        emailAddress: {
            value: "",
            error: false,
        },
        country: {
            value: "",
            error: false,
        },
        addressOne: {
            value: "",
            error: false,
        },
        city: {
            value: "",
            error: false,
        },
        stateLocation: {
            value: "",
            error: false,
        },
        zipcode: {
            value: "",
            error: false,
        },
    });

    const [addressTwo, setAddressTwo] = useState("");
    // const [middleName, setMiddleName] = useState("");

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

    const [snackbar, setSnackBar] = useState({
        open: false,
        message: "",
    });
    const [isFormDisabled, setIsFormDisabled] = useState(false);

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

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: {
                value: event.target.value,
            },
        });
    };

    const handleSnackClose = () => {
        setSnackBar({ open: false });
    };

    const handleCountryChange = (val) => {
        setValues({
            ...values,
            country: {
                value: val,
            },
        });
    };

    const handleSubmit = async () => {
        if (isFormDisabled) return;
        setIsFormDisabled(true);
        document.body.style.cursor = "wait";

        let firstName = false;
        let lastName = false;
        let phone = false;
        let email = false;
        let country = false;
        let address = false;
        let city = false;
        let state = false;
        let zipcode = false;

        if (values.firstName.value === "") firstName = true;
        if (values.lastName.value === "") lastName = true;
        if (values.phoneNumber.value === "") phone = true;
        if (values.emailAddress.value === "") email = true;
        if (values.country.value === "") country = true;
        if (values.addressOne.value === "") address = true;
        if (values.city.value === "") city = true;
        if (values.stateLocation.value === "") state = true;
        if (values.zipcode.value === "") zipcode = true;

        setValues({
            ...values,
            firstName: { ...values.firstName, error: firstName },
            lastName: { ...values.lastName, error: lastName },
            phoneNumber: { ...values.phoneNumber, error: phone },
            emailAddress: { ...values.emailAddress, error: email },
            country: { ...values.country, error: country },
            addressOne: { ...values.addressOne, error: address },
            city: { ...values.city, error: city },
            stateLocation: { ...values.stateLocation, error: state },
            zipcode: { ...values.zipcode, error: zipcode },
        });

        if (
            firstName ||
            lastName ||
            phone ||
            email ||
            country ||
            address ||
            city ||
            state ||
            zipcode
        ) {
            setSnackBar({ open: true, message: "Missing required fields" });
            setIsFormDisabled(false);
            document.body.style.cursor = null;
            return;
        }

        const committeeInterests = [];

        if (editing) committeeInterests.push(1);
        if (techSupport) committeeInterests.push(2);
        if (administration) committeeInterests.push(3);
        if (research) committeeInterests.push(4);
        if (socialJustice) committeeInterests.push(5);
        if (writing) committeeInterests.push(6);
        if (building) committeeInterests.push(7);
        if (accounting) committeeInterests.push(8);
        if (programming) committeeInterests.push(9);
        if (planning) committeeInterests.push(10);
        if (arts) committeeInterests.push(11);
        if (translation) committeeInterests.push(12);
        if (branches) committeeInterests.push(13);
        if (design) committeeInterests.push(14);
        if (ordination) committeeInterests.push(15);

        console.log(committeeInterests);

        // call backend route to store volunteer data
        await fetch(`${BACKEND_URL}volunteers/addUser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fName: values.firstName.value,
                mName: values.middleName.value,
                lName: values.lastName.value,
                phone: values.phoneNumber.value,
                email: values.emailAddress.value,
                country: values.country.value,
                interests: committeeInterests,
            }),
        }).then((res) => {
            // form submitted
            if (res.ok) {
                // clear form values
                setValues({
                    ...values,
                    firstName: { ...values.firstName, value: "" },
                    middleName: { ...values.middleName, value: "" },
                    lastName: { ...values.lastName, value: "" },
                    phoneNumber: { ...values.phoneNumber, value: "" },
                    emailAddress: { ...values.emailAddress, value: "" },
                    country: { ...values.country, value: "" },
                    addressOne: { ...values.addressOne, value: "" },
                    city: { ...values.city, value: "" },
                    stateLocation: { ...values.stateLocation, value: "" },
                    zipcode: { ...values.zipcode, value: "" },
                });
                // form could not be submitted
            } else {
                // show snackbar to notify form could not be submitted
                setSnackBar({
                    open: true,
                    message: "An internal error occurred. Form not submitted.",
                });
            }
        });

        document.body.style.cursor = null;
        setIsFormDisabled(false);
    };

    const inputFieldStyle = {
        border: "1px solid #000000",
    };

    const inputErrorStyle = {
        border: "1px solid #ea4444",
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
                <form autoComplete="off">
                    <p className="required-note">
                        {" "}
                        <span className="error-asterisk"> * </span> indicates a required field
                    </p>
                    <h1 className="signup-text">Sign Me Up!</h1>
                    <div className="form-item">
                        <CustomTextField
                            variant="outlined"
                            className="first-name input-field"
                            placeholder="First Name"
                            value={values.firstName.value}
                            error={values.firstName.error}
                            onChange={handleChange}
                            disabled={isFormDisabled}
                            name="firstName"
                        />
                        {displayAsterisk()}
                    </div>
                    <div className="form-item">
                        <CustomTextField
                            variant="outlined"
                            className="middle-name input-field"
                            placeholder="Middle Name"
                            value={values.middleName.value}
                            onChange={handleChange}
                            disabled={isFormDisabled}
                            name="middleName"
                        />
                    </div>
                    <div className="form-item last-name-field">
                        <CustomTextField
                            variant="outlined"
                            className="input-field"
                            placeholder="Last Name"
                            value={values.lastName.value}
                            error={values.lastName.error}
                            onChange={handleChange}
                            disabled={isFormDisabled}
                            name="lastName"
                        />
                        {displayAsterisk()}
                    </div>
                    <h1 className="contact-info-text">Contact Information</h1>
                    <div className="form-item">
                        <CustomTextField
                            variant="outlined"
                            className="email-address input-field"
                            placeholder="Email Address"
                            type="email"
                            value={values.emailAddress.value}
                            error={values.emailAddress.error}
                            onChange={handleChange}
                            disabled={isFormDisabled}
                            name="emailAddress"
                        />
                        {displayAsterisk()}
                    </div>
                    {values.country.error ? (
                        <div className="form-item">
                            <CountryDropdown
                                className="input-field country-dropdown"
                                style={inputErrorStyle}
                                value={values.country.value}
                                onChange={handleCountryChange}
                                disabled={isFormDisabled}
                            />
                            {displayAsterisk()}
                        </div>
                    ) : (
                        <div className="form-item">
                            <CountryDropdown
                                className="input-field country-dropdown"
                                style={inputFieldStyle}
                                value={values.country.value}
                                onChange={handleCountryChange}
                                disabled={isFormDisabled}
                            />
                            {displayAsterisk()}
                        </div>
                    )}
                    {values.country.value !== "" ? (
                        <div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="address-line1 input-field"
                                    placeholder="Address Line 1"
                                    value={values.addressOne.value}
                                    error={values.addressOne.error}
                                    onChange={handleChange}
                                    disabled={isFormDisabled}
                                    name="addressOne"
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
                                    disabled={isFormDisabled}
                                />
                            </div>
                            <div className="city-field form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="input-field"
                                    placeholder="City"
                                    value={values.city.value}
                                    error={values.city.error}
                                    onChange={handleChange}
                                    disabled={isFormDisabled}
                                    name="city"
                                />
                                {displayAsterisk()}
                            </div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="state-field input-field"
                                    placeholder="State"
                                    value={values.stateLocation.value}
                                    error={values.stateLocation.error}
                                    onChange={handleChange}
                                    disabled={isFormDisabled}
                                    name="stateLocation"
                                />
                                {displayAsterisk()}
                            </div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="zipcode-field input-field"
                                    placeholder="Zip Code"
                                    value={values.zipcode.value}
                                    error={values.zipcode.error}
                                    onChange={handleChange}
                                    disabled={isFormDisabled}
                                    name="zipcode"
                                />
                                {displayAsterisk()}
                            </div>
                            <div className="form-item">
                                <CustomTextField
                                    variant="outlined"
                                    className="phone-number input-field"
                                    placeholder="Phone Number"
                                    type="tel"
                                    value={values.phoneNumber.value}
                                    error={values.phoneNumber.error}
                                    onChange={handleChange}
                                    disabled={isFormDisabled}
                                    name="phoneNumber"
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
                    <div className="submit-form">
                        <CustomButton text="Submit" onClickCallback={handleSubmit} />
                    </div>
                </form>
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={snackbar.message}
            />
        </div>
    );
}
