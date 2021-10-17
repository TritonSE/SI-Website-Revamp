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
import { fetchCommittees } from "../util/requests";
import Loader from "../components/Main/Loader";
import Modal from "../components/Modal";

const BACKEND_URL = config.backend.uri;

function displayAsterisk() {
    return <span className="error-asterisk">*</span>;
}

function displayCommittees(
    isMobile,
    volunteerCommittees,
    selectedCommittees,
    handleCommitteesChange
) {
    const mid = Math.floor(volunteerCommittees.length / 2);
    if (isMobile) {
        return (
            <div className="volunteer-options">
                {volunteerCommittees.map((committee) => (
                    <VolunteerOption
                        value={committee.id}
                        checked={selectedCommittees.includes(committee.id)}
                        handleChange={(e) => handleCommitteesChange(e)}
                        title={committee.title}
                        description={committee.description}
                    />
                ))}
            </div>
        );
    }
    const volunteerOptionsLeft = [];
    const volunteerOptionsRight = [];

    for (let ind = 0; ind <= mid; ind++) {
        volunteerOptionsLeft.push(
            <VolunteerOption
                value={volunteerCommittees[ind].id}
                checked={selectedCommittees.includes(volunteerCommittees[ind].id)}
                handleChange={(e) => handleCommitteesChange(e)}
                title={volunteerCommittees[ind].title}
                description={volunteerCommittees[ind].description}
            />
        );
    }

    for (let i = mid + 1; i < volunteerCommittees.length; i++) {
        volunteerOptionsRight.push(
            <VolunteerOption
                value={volunteerCommittees[i].id}
                checked={selectedCommittees.includes(volunteerCommittees[i].id)}
                handleChange={(e) => handleCommitteesChange(e)}
                title={volunteerCommittees[i].title}
                description={volunteerCommittees[i].description}
            />
        );
    }

    return (
        <div className="volunteer-options">
            <div className="left-options-column">{volunteerOptionsLeft}</div>
            <div className="right-options-column">{volunteerOptionsRight}</div>
        </div>
    );
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
        addressTwo: {
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

    const [volunteerCommittees, setVolunteerCommittees] = useState([]);
    const [selectedCommittees, setSelectedCommittees] = useState([]);
    const [loadingCommittees, setLoadingCommittees] = useState(true);
    const [isThankYouNoteOpen, setIsThankYouNoteOpen] = React.useState(false);

    const [snackbar, setSnackBar] = useState({
        open: false,
        message: "",
    });
    const [isFormDisabled, setIsFormDisabled] = useState(false);

    // fetch volunteer committees from backend
    useEffect(async () => {
        await (async () => {
            const data = await fetchCommittees();
            setVolunteerCommittees(data);
        })();
        setLoadingCommittees(false);
    }, []);

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

    // called when user decides to close thank you modal
    const handleModalClose = (event) => {
        setIsThankYouNoteOpen(event);
    };

    function handleCommitteesChange(event) {
        if (selectedCommittees.includes(parseInt(event.target.value, 10))) {
            setSelectedCommittees(
                selectedCommittees.filter(
                    (committee) => committee !== parseInt(event.target.value, 10)
                )
            );
        } else {
            setSelectedCommittees((oldArray) => [...oldArray, parseInt(event.target.value, 10)]);
        }
    }

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

        const addressOpt = values.addressTwo.value !== "" ? `${values.addressTwo.value} ` : "";
        const givenAddress = `${values.addressOne.value} ${addressOpt}${values.city.value} ${values.stateLocation.value} ${values.country.value} ${values.zipcode.value}`;

        // call backend route to store volunteer data
        await fetch(`${BACKEND_URL}volunteers/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fName: values.firstName.value,
                mName: values.middleName.value,
                lName: values.lastName.value,
                phone: values.phoneNumber.value,
                email: values.emailAddress.value,
                address: givenAddress,
                interests: selectedCommittees,
            }),
        }).then((res) => {
            // form submitted
            if (res.ok) {
                // display thank you modal
                setIsThankYouNoteOpen(true);
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
                    addressTwo: { ...values.addressTwo, value: "" },
                    city: { ...values.city, value: "" },
                    stateLocation: { ...values.stateLocation, value: "" },
                    zipcode: { ...values.zipcode, value: "" },
                });
                setSelectedCommittees([]);
                // setSnackBar({
                //     open: true,
                //     message: "Form was submitted!",
                // });
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
                image="https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1634515200&Signature=W7juSDjbFVbOKZC~AT6zXJeSdSv0kMd4jyVRZwXL2UFkox-~lUtwFG4ombOzKIsjNzCFiUidEc-auRtKwrUu6iGQlkTHVa9KMj7sWSALCtGT59iYiKXJxQBiStfj7yN-ls2G~WzCC9P1~04Yf52ODaau9~ZBElw6PC200~-JwUdasY8YzaRQEXv7JypSZ26enrYQoA6zObbDVb7CLxMp1MSwddCZH7LMZRcFBKhjBNgtK17zR5gadWOXy9IjuEyxe7IoWmkYrPl~icNFYLiJwSASNSOKBHCo-qH1kKY-McblLVS3eLVGCsFIJbM6sA0fkcfkj87mU~A2YB0KYKLQUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    value={values.addressTwo.value}
                                    onChange={handleChange}
                                    disabled={isFormDisabled}
                                    name="addressTwo"
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
                    {loadingCommittees ? (
                        <Loader />
                    ) : (
                        displayCommittees(
                            isMobile,
                            volunteerCommittees,
                            selectedCommittees,
                            handleCommitteesChange
                        )
                    )}
                    <div className="submit-form">
                        <CustomButton text="Submit" onClickCallback={handleSubmit} />
                    </div>
                </form>
            </div>
            <Modal
                text="Thank you for your support! We will get in touch with you shortly."
                open={isThankYouNoteOpen}
                hide={handleModalClose}
                negativeButtonText="Ok"
            />
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={snackbar.message}
            />
        </div>
    );
}
