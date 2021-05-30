/**
 * This file implements the Join Us page, which contains a header and a form that is
 * used to sign up for the email list, membership, or both. The form asks for the
 * user's name, contact information, and the type of membership they want. The payment
 * is handled by the Paypal component and the form data is stored in the database.
 *
 * @summary Implements the Join Us page
 * @author Dhanush Nanjunda Reddy
 */

import React, { useState, useEffect } from "react";
import "../css/JoinUs.css";
import { withStyles } from "@material-ui/core/styles";

import { Checkbox, MenuItem, TextField } from "@material-ui/core";
import { CountryDropdown } from "react-country-region-selector";
import ResourcesHeader from "../components/ResourcesHeader";

import HeaderImage from "../media/JoinUs_Header.png";

function displayAsterisk() {
    return <span className="error-asterisk">*</span>;
}

const CustomSelectField = withStyles({
    root: {
        "& .MuiOutlinedInput-input": {
            color: "#000000",
        },
        "& .MuiInputLabel-root": {
            color: "black",
            fontFamily: "Nunito",
            fontSize: "18px",
            lineHeight: "25px",
            opacity: "1",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            border: "1px solid #000000",
            borderRadius: "15px",
            fontFamily: "Nunito",
            fontSize: "18px",
            lineHeight: "1.95vw",
            boxSizing: "border-box",
            color: "#000000",
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "black",
        },
        "&:hover .MuiInputLabel-root": {
            color: "black",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
    },
})(TextField);

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

export default function JoinUs() {
    const [isMobile, setIsMobile] = useState(false);

    const [membershipCheck, setMembershipCheck] = useState(false);
    const [donateCheck, setDonateCheck] = useState(false);
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
    const [organizations, setOrganizations] = useState("");
    const [donation, setDonation] = useState("");

    const [membership, setMembership] = useState("");
    const [memberType, setMemberType] = useState("");

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

    const handleMembershipChange = (event) => {
        setMembershipCheck(event.target.checked);
    };

    const handleDonateChange = (event) => {
        setDonateCheck(event.target.checked);
    };

    const handleCountryChange = (value) => {
        setCountry(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // call backend route to store member data
    };

    const dropdownStyle = {
        borderRadius: "15px",
        boxSizing: "border-box",
        border: "1px solid #000000",
        fontFamily: "Nunito",
        fontSize: "18px",
        lineHeight: "1.95vw",
        color: "#000000",
        background: "#FFFFFF",
    };

    const CustomColorCheckbox = withStyles({
        root: {
            color: "#000000",
            paddingLeft: 0,
            "&$checked": {
                color: "#EA8644",
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    return (
        <div>
            <ResourcesHeader
                image={HeaderImage}
                title="Join Us"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis
                condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula
                eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat
                arcu, in efficitur sem tortor vel lectus."
                height={isMobile ? "95vh" : "600px"}
                width="100%"
            />
            <div className="main-content">
                {isMobile ? (
                    <div>
                        <h1 className="thank-you">Thank you for your interest in Sakyadhita!</h1>
                        <p className="page-info">
                            By filling out this form, you will be added to the email list and be
                            asked to pay a membership fee. Once all required fields are filled out,
                            you may proceed to payment through PayPal.
                        </p>
                        <div className="membership-check">
                            <CustomColorCheckbox
                                checked={membershipCheck}
                                onChange={handleMembershipChange}
                            />
                            <span className="checkbox-text">Want to join email list only.</span>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1 className="thank-you">Thank you for your interest!</h1>
                        <p className="page-info">
                            By filling out this form, you will be added to the email list. If you
                            wish to also have a membership with Sakyadhita, you will be asked to pay
                            a membership fee through PayPal once all required fields are filled out.
                            If you wish to only be on the email list, please check the “Not
                            interested in membership” box below.
                        </p>
                        <div className="membership-check">
                            <CustomColorCheckbox
                                checked={membershipCheck}
                                onChange={handleMembershipChange}
                            />
                            <span className="checkbox-text">
                                Not interested in membership, but want to be on the email list.
                            </span>
                        </div>
                    </div>
                )}
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
                            required
                            type="tel"
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
                            required
                            type="email"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                        />
                        {displayAsterisk()}
                    </div>
                    <div className="form-item">
                        <CountryDropdown
                            className="input-field country-dropdown"
                            style={dropdownStyle}
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
                    {!membershipCheck ? (
                        <div>
                            <h1 className="additional-info-text">Additional Information</h1>
                            <div className="form-item">
                                <CustomSelectField
                                    className="input-field"
                                    value={memberType}
                                    onChange={(e) => setMemberType(e.target.value)}
                                    variant="outlined"
                                    label="New or Renewing Member?"
                                    select
                                    size="small"
                                >
                                    <MenuItem value="new">New</MenuItem>
                                    <MenuItem value="renew">Renewing</MenuItem>
                                </CustomSelectField>
                                {displayAsterisk()}
                            </div>
                            <div className="form-item organizations-section">
                                <CustomTextField
                                    variant="outlined"
                                    className="organizations-worked input-field"
                                    placeholder="List any organizations you’re involved with"
                                    required
                                    value={organizations}
                                    onChange={(e) => setOrganizations(e.target.value)}
                                />
                                {displayAsterisk()}
                            </div>
                            <h1 className="payment-text">Payment Options</h1>
                            <div className="form-item">
                                <CustomSelectField
                                    className="input-field"
                                    value={membership}
                                    onChange={(e) => setMembership(e.target.value)}
                                    variant="outlined"
                                    label="Select Membership"
                                    select
                                    size="small"
                                >
                                    <MenuItem value="option1">
                                        Nun/Student/Unemployed $15.00 USD
                                    </MenuItem>
                                    <MenuItem value="option2">General $30.00 USD</MenuItem>
                                    <MenuItem value="option3">
                                        Lifetime - Nun/Sudent/Unemployed $150.00 USD
                                    </MenuItem>
                                    <MenuItem value="option4">Lifetime $300.00 USD</MenuItem>
                                </CustomSelectField>
                                {displayAsterisk()}
                            </div>
                            <div className="donate-check">
                                <CustomColorCheckbox
                                    className="donate-checkbox"
                                    checked={donateCheck}
                                    onChange={handleDonateChange}
                                />
                                <span className="checkbox-text donation-text">
                                    I would like to donate in addition to membership fees
                                </span>
                            </div>
                            {donateCheck ? (
                                <div className="donation-num">
                                    <CustomTextField
                                        variant="outlined"
                                        className="donation-amount input-field"
                                        placeholder="Insert Donation Amount"
                                        required
                                        value={donation}
                                        onChange={(e) => setDonation(e.target.value)}
                                    />
                                    {displayAsterisk()}
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <button className="submit-button" type="submit">
                            Submit
                        </button>
                    )}
                </form>
                {!membershipCheck ? (
                    <p className="error-message">
                        *Please fill out all required fields to proceed to payment.
                    </p>
                ) : null}
                {/* {formCheck ? <p className="success-message">All required fields are filled.</p> : <p className="error-message">*Please fill out all required fields to proceed to payment.</p>} */}
            </div>
        </div>
    );
}
