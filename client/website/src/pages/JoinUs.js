import React from "react";
import "../css/JoinUs.css";
import { withStyles } from "@material-ui/core/styles";

import {
    Checkbox,
    MenuItem,
    OutlinedInput,
    Select,
    FormControl,
    InputLabel,
} from "@material-ui/core";
import { CountryDropdown } from "react-country-region-selector";

import HeaderImage from "../media/JoinUs_Header.png";

function displayAsterisk() {
    return <span className="error-asterisk">*</span>;
}

export default function JoinUs() {
    const [membershipCheck, setMembershipCheck] = React.useState(false);
    const [donateCheck, setDonateCheck] = React.useState(false);
    const [formCheck] = React.useState(false);

    const [country, setCountry] = React.useState("");

    const [firstName, setFirstName] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [emailAddress, setEmailAddress] = React.useState("");
    const [organizations, setOrganizations] = React.useState("");
    const [donation, setDonation] = React.useState("");

    const [membership, setMembership] = React.useState("");
    const [memberType, setMemberType] = React.useState("");

    const handleMembershipChange = (event) => {
        setMembershipCheck(event.target.checked);
    };

    const handleDonateChange = (event) => {
        setDonateCheck(event.target.checked);
    };

    const handleCountryChange = (value) => {
        setCountry(value);
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
            <div className="header-div">
                <img src={HeaderImage} alt="Header Image" id="Header" />
                <div className="header-info-div">
                    <h1 className="header-text">Join Us</h1>
                    <p className="header-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis
                        condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula
                        eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat
                        arcu, in efficitur sem tortor vel lectus.{" "}
                    </p>
                </div>
            </div>
            <div className="main-content">
                <h1 className="thank-you">Thank you for your interest!</h1>
                <p className="page-info">
                    By filling out this form, you will be added to the email list. If you wish to
                    also have a membership with Sakyadhita, you will be asked to pay a membership
                    fee through PayPal once all required fields are filled out. If you wish to only
                    be on the email list, please check the “Not interested in membership” box below.
                </p>
                <div className="membership-check">
                    <CustomColorCheckbox
                        checked={membershipCheck}
                        onChange={handleMembershipChange}
                    />
                    {/* <Checkbox checked={membershipCheck} onChange={handleMembershipChange} classes={{
            root: styles.root,
            checked: styles.checked
          }} style ={{
                      paddingLeft: 0,
                    }}/> */}
                    {/* <img src={EmptyCheckbox} alt="Checkbox" id="checkbox"/> */}
                    <span className="checkbox-text">
                        Not interested in membership, but want to be on the email list.
                    </span>
                </div>
                <h1 className="signup-text">Sign Me Up!</h1>
                <div className="form-item">
                    <OutlinedInput
                        className="first-name input-field"
                        placeholder="First Name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {displayAsterisk()}
                </div>
                <div className="form-item">
                    <OutlinedInput
                        className="middle-name input-field"
                        placeholder="Middle Name"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <OutlinedInput
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
                    <OutlinedInput
                        className="phone-number input-field"
                        placeholder="Phone Number"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {displayAsterisk()}
                </div>
                <div className="form-item">
                    <OutlinedInput
                        className="email-address input-field"
                        placeholder="Email Address"
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                    />
                    {displayAsterisk()}
                </div>
                <div className="form-item">
                    <CountryDropdown
                        className="input-field"
                        value={country}
                        onChange={handleCountryChange}
                    />
                    {displayAsterisk()}
                </div>
                {country !== "" ? (
                    <div>
                        <div className="form-item">
                            <OutlinedInput
                                className="address-line1 input-field"
                                placeholder="Address Line 1"
                                required
                            />
                            {displayAsterisk()}
                        </div>
                        <div className="form-item">
                            <OutlinedInput
                                className="address-line2 input-field"
                                placeholder="Address Line 2"
                            />
                        </div>
                        <div className="form-item">
                            <OutlinedInput
                                className="city-field input-field"
                                placeholder="City"
                                required
                            />
                            {displayAsterisk()}
                        </div>
                        <div className="form-item">
                            <OutlinedInput
                                className="state-field input-field"
                                placeholder="State"
                                required
                            />
                            {displayAsterisk()}
                        </div>
                        <div className="form-item">
                            <OutlinedInput
                                className="zipcode-field input-field"
                                placeholder="Zip Code"
                                required
                            />
                            {displayAsterisk()}
                        </div>
                    </div>
                ) : null}
                {!membershipCheck ? (
                    <div>
                        <h1 className="additional-info-text">Additional Information</h1>
                        <div className="form-item">
                            <FormControl variant="outlined" className="member-type-form">
                                <InputLabel className="member-type-label">
                                    New or Renewing Member?
                                </InputLabel>
                                <Select
                                    className="member-type"
                                    required
                                    label="New or Renewing Member?"
                                    placeholder="New or Renewing Member?"
                                    value={memberType}
                                    onChange={(e) => setMemberType(e.target.value)}
                                >
                                    <MenuItem value="new">New</MenuItem>
                                    <MenuItem value="renew">Renewing</MenuItem>
                                </Select>
                            </FormControl>
                            {/* <OutlinedInput className="member-type input-field" placeholder="New or Renewing Member?" required /> */}
                            {displayAsterisk()}
                        </div>
                        <div className="form-item">
                            <OutlinedInput
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
                            <FormControl variant="outlined" className="select-membership-form">
                                <InputLabel className="select-membership-label">
                                    Select Membership
                                </InputLabel>
                                <Select
                                    className="select-membership"
                                    required
                                    label="Select Membership"
                                    placeholder="Select Membership"
                                    value={membership}
                                    onChange={(e) => setMembership(e.target.value)}
                                >
                                    <MenuItem value="option1">
                                        Nun/Student/Unemployed $15.00 USD
                                    </MenuItem>
                                    <MenuItem value="option2">General $30.00 USD</MenuItem>
                                    <MenuItem value="option3">
                                        Lifetime - Nun/Sudent/Unemployed $150.00 USD
                                    </MenuItem>
                                    <MenuItem value="option4">Lifetime $300.00 USD</MenuItem>
                                </Select>
                            </FormControl>
                            {/* <OutlinedInput className="select-membership input-field" placeholder="Select Membership" required /> */}
                            {displayAsterisk()}
                        </div>
                        <div className="donate-check">
                            <CustomColorCheckbox
                                checked={donateCheck}
                                onChange={handleDonateChange}
                            />
                            <span className="checkbox-text">
                                I would like to donate in addition to membership fees
                            </span>
                        </div>
                        {donateCheck ? (
                            <div className="donation-num">
                                <OutlinedInput
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
                    <button className="submit-button" disabled={!formCheck} type="submit">
                        Submit
                    </button>
                )}
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
