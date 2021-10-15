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
// import { Button } from 'react-bootstrap';
import "../css/JoinUs.css";
import { withStyles } from "@material-ui/core/styles";

import { Checkbox, MenuItem, TextField, InputAdornment, Snackbar } from "@material-ui/core";
import { CountryDropdown } from "react-country-region-selector";
import ResourcesHeader from "../components/ResourcesHeader";

import HeaderImage from "../media/JoinUs_Header.png";
import CustomButton from "../components/CustomButton";
// import PayPal from "../components/PayPal";
import PayPalModal from "../components/PayPalModal";
import config from "../config";
import { fetchMemberships } from "../util/requests";
import Loader from "../components/Main/Loader";

const BACKEND_URL = config.backend.uri;

function displayAsterisk() {
    return <span className="error-asterisk">*</span>;
}

// function showPaypal(displayPayPalModal, openPaypalModal, displayPayPal, membership, memberships, donation, memberType, organizations) {
//     if (displayPayPalModal) {
//         return (
//             <PayPal
//                 key={displayPayPal}
//                 membershipTitle={memberships[membership - 1].title}
//                 membershipID={memberships[membership - 1].id}
//                 membershipCost={parseFloat(
//                     memberships[membership - 1].cost
//                 )}
//                 donationAmount={donation}
//                 isNewMember={memberType}
//                 affiliatedOrgs={organizations}
//                 disable={false}
//                 transactionCompleted={() => {
//                     alert("completed transaction");
//                 }}
//             />
//         );
//     }
//     return (<Button style={{ backgroundColor: "#f9ce1d", borderColor: "#f9ce1d", color: "#000000" }} className="review-order-button" onClick={openPaypalModal}>Pay Now</Button>);
// }

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
            borderColor: "#6652a0",
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

export default function JoinUs() {
    // const classes = useStyles();

    const [isMobile, setIsMobile] = useState(false);

    const [membershipCheck, setMembershipCheck] = useState(false);
    const [donateCheck, setDonateCheck] = useState(false);
    const [isFormDisabled, setIsFormDisabled] = useState(false);

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

    // const [addressTwo, setAddressTwo] = useState("");

    const [organizations, setOrganizations] = useState("");
    const [donation, setDonation] = useState(0);

    const [membership, setMembership] = useState(0);
    const [memberType, setMemberType] = useState(false);
    const [isNewMember, setIsNewMember] = useState("");

    const [memberships, setMemberships] = useState([]);
    const [loadingMemberships, setLoadingMemberships] = useState(true);
    const [displayPayPal, setDisplayPayPal] = useState(false);
    const [displayPayPalModal, setDisplayPayPalModal] = useState(false);

    const [snackbar, setSnackBar] = useState({
        open: false,
        message: "",
    });

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

    useEffect(() => {
        if (
            values.firstName.value === "" ||
            values.lastName.value === "" ||
            values.phoneNumber.value === "" ||
            values.emailAddress.value === "" ||
            values.country.value === "" ||
            values.addressOne.value === "" ||
            values.city.value === "" ||
            values.stateLocation.value === "" ||
            values.zipcode.value === "" ||
            memberType === "" ||
            organizations === "" ||
            membership === 0 ||
            (donateCheck && donation === 0)
        ) {
            setDisplayPayPal(false);
        } else {
            setDisplayPayPal(true);
        }
    });

    // fetch membership types from backend
    useEffect(async () => {
        await (async () => {
            const data = await fetchMemberships();
            setMemberships(data);
        })();
        setLoadingMemberships(false);
    }, []);

    // fetch membership types from backend
    // useEffect(async () => {
    //     await (async () => {
    //         try {
    //             const res = await fetch(`${BACKEND_URL}memberships/membershipTypes`, {
    //                 method: "get",
    //                 headers: {
    //                     "content-type": "application/json",
    //                 },
    //             });
    //             if (res.ok) {
    //                 const data = await res.json();
    //                 setMemberships(data);
    //             }
    //         } catch {
    //             console.log("error");
    //         }
    //     })();
    //     console.log(memberships);
    // }, []);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: {
                value: event.target.value,
            },
        });
    };

    const handleNewMember = (event) => {
        setIsNewMember(event.target.value);
        if (event.target.value === "new") {
            setMemberType(true);
        } else {
            setMemberType(false);
        }
    };

    const handleSnackClose = () => {
        setSnackBar({ open: false });
    };

    const handleMembershipChange = (event) => {
        setMembershipCheck(event.target.checked);

        // fetch(`${BACKEND_URL}membershipTypes/`, {
        //     method: "get",
        //     headers: { "Content-Type": "application/json" },
        // }).then((res) => {
        //     // form submitted
        //     if (res.ok) {
        //         console.log(res.json());
        //     }
        // });
    };

    const handleDonateChange = (event) => {
        if (donateCheck) setDonation("");
        setDonateCheck(event.target.checked);
    };

    const handleCountryChange = (val) => {
        setValues({
            ...values,
            country: {
                value: val,
            },
        });
    };

    const openPaypalModal = () => {
        setDisplayPayPalModal(!displayPayPalModal);
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

        const addressOpt = values.addressTwo.value !== "" ? `${values.addressTwo.value} ` : "";
        const givenAddress = `${values.addressOne.value} ${addressOpt}${values.city.value} ${values.stateLocation.value} ${values.country.value} ${values.zipcode.value}`;

        // call backend route to store member data
        if (membershipCheck) {
            // call backend route to store member data
            await fetch(`${BACKEND_URL}emailList/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fName: values.firstName.value,
                    mName: values.middleName.value,
                    lName: values.lastName.value,
                    phone: values.phoneNumber.value,
                    email: values.emailAddress.value,
                    address: givenAddress,
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
                        addressTwo: { ...values.addressTwo, value: "" },
                        city: { ...values.city, value: "" },
                        stateLocation: { ...values.stateLocation, value: "" },
                        zipcode: { ...values.zipcode, value: "" },
                    });
                    setSnackBar({
                        open: true,
                        message: "Form was submitted!",
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
        } else {
            // call backend route to store member data
            await fetch(`${BACKEND_URL}emailList/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fName: values.firstName.value,
                    mName: values.middleName.value,
                    lName: values.lastName.value,
                    phone: values.phoneNumber.value,
                    email: values.emailAddress.value,
                    address: givenAddress,
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
                    setSnackBar({
                        open: true,
                        message: "Form was submitted!",
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
        }

        document.body.style.cursor = null;
        setIsFormDisabled(false);
    };

    const inputFieldStyle = {
        border: "1px solid #000000",
    };

    const inputErrorStyle = {
        border: "1px solid #ea4444",
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
                <form autoComplete="off">
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
                            className="last-name input-field"
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
                            value={values.emailAddress.value}
                            error={values.emailAddress.error}
                            onChange={handleChange}
                            disabled={isFormDisabled}
                            name="emailAddress"
                        />
                        {displayAsterisk()}
                    </div>
                    <div className="form-item">
                        <CountryDropdown
                            className="input-field country-dropdown"
                            style={values.country.error ? inputErrorStyle : inputFieldStyle}
                            value={values.country.value}
                            onChange={handleCountryChange}
                            disabled={isFormDisabled}
                        />
                        {displayAsterisk()}
                    </div>
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
                                    className="city-field input-field"
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
                    {!membershipCheck ? (
                        <div>
                            <h1 className="additional-info-text">Additional Information</h1>
                            <div className="form-item">
                                <CustomSelectField
                                    className="input-field"
                                    value={isNewMember}
                                    onChange={handleNewMember}
                                    // onChange={(e) => setMemberType(e.target.value)}
                                    variant="outlined"
                                    label="New or Renewing Member?"
                                    select
                                    size="small"
                                    InputLabelProps={isMobile ? { style: { fontSize: 14 } } : null}
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
                                    multiline
                                    rows={3}
                                />
                                {displayAsterisk()}
                            </div>
                            <h1 className="payment-text">Payment Options</h1>
                            {loadingMemberships ? (
                                <Loader />
                            ) : (
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
                                        {memberships.map((membershipItem) => (
                                            <MenuItem value={membershipItem.id}>
                                                {membershipItem.title} ${membershipItem.cost} USD
                                            </MenuItem>
                                        ))}
                                        {/* <MenuItem value="option1">
                                        Nun/Student/Unemployed $15.00 USD
                                    </MenuItem>
                                    <MenuItem value="option2">General $30.00 USD</MenuItem>
                                    <MenuItem value="option3">
                                        Lifetime - Nun/Student/Unemployed $150.00 USD
                                    </MenuItem>
                                    <MenuItem value="option4">Lifetime $300.00 USD</MenuItem> */}
                                    </CustomSelectField>
                                    {displayAsterisk()}
                                </div>
                            )}
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
                                <div className="donation-num form-item">
                                    <CustomTextField
                                        variant="outlined"
                                        className="donation-amount input-field"
                                        placeholder="Insert Donation Amount"
                                        required
                                        value={donation}
                                        onChange={(e) => setDonation(e.target.value)}
                                        type="number"
                                        step={0.01}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">$</InputAdornment>
                                            ),
                                        }}
                                    />
                                    {displayAsterisk()}
                                </div>
                            ) : null}
                            {displayPayPalModal ? (
                                <PayPalModal
                                    key={displayPayPal}
                                    membershipTitle={memberships[membership - 1].title}
                                    membershipID={memberships[membership - 1].id}
                                    membershipCost={parseFloat(memberships[membership - 1].cost)}
                                    donationAmount={donation}
                                    isNewMember={memberType}
                                    affiliatedOrgs={organizations}
                                    toggleModal={openPaypalModal}
                                />
                            ) : null}
                            <div className="paypal-buttons">
                                {
                                    !displayPayPal ? (
                                        <p className="error-message">
                                            *Please fill out all required fields to proceed to
                                            payment.
                                        </p>
                                    ) : (
                                        <div className="continue-button">
                                            <CustomButton
                                                text="Continue to Payment"
                                                onClickCallback={openPaypalModal}
                                            />
                                        </div>
                                    )
                                    // <Button style={{ backgroundColor: "#f9ce1d", borderColor: "#f9ce1d", color: "#000000" }} className="continue-button" onClick={openPaypalModal}>Continue to Payment</Button>
                                    // showPaypal(displayPayPalModal, openPaypalModal, displayPayPal, membership, memberships, donation, memberType, organizations)
                                    // displayPayPalModal ?
                                    //     <PayPal
                                    //         key={displayPayPal}
                                    //         membershipTitle={memberships[membership - 1].title}
                                    //         membershipID={memberships[membership - 1].id}
                                    //         membershipCost={parseFloat(
                                    //             memberships[membership - 1].cost
                                    //         )}
                                    //         donationAmount={donation}
                                    //         isNewMember={memberType}
                                    //         affiliatedOrgs={organizations}
                                    //         disable={false}
                                    //         transactionCompleted={() => {
                                    //             alert("completed transaction");
                                    //         }}
                                    //     />
                                    //     :
                                    //     <Button style={{ backgroundColor: "#f9ce1d", borderColor: "#f9ce1d", color: "#000000" }} className="review-order-button" onClick={openPaypalModal}>Pay Now</Button>
                                }
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p style={{ textAlign: "center", marginTop: "50px" }}>
                                {" "}
                                <span className="error-asterisk"> * </span> indicates a required
                                field
                            </p>
                            <div className="submit-button">
                                <CustomButton text="Submit" onClickCallback={handleSubmit} />
                            </div>
                        </div>
                    )}
                </form>

                {/* {!membershipCheck ? 
                                {
                                    ((values.firstName.value === "") ||
                                    (values.lastName.value === "") ||
                                    (values.phoneNumber.value === "") ||
                                    (values.emailAddress.value === "") ||
                                    (values.country.value === "") ||
                                    (values.addressOne.value === "") ||
                                    (values.city.value === "") ||
                                    (values.stateLocation.value === "") ||
                                    (values.zipcode.value === "")) ? 
                                    (<p className="error-message">
                                        *Please fill out all required fields to proceed to payment.
                                    </p>) : <PayPal membershipCost={membership} donationAmount={donation} isNewMember={memberType} affiliatedOrgs={organizations} />
                                }
                : <PayPal membershipCost={membership} donationAmount={donation} isNewMember={memberType} affiliatedOrgs={organizations} />} */}

                {/* {formCheck ? <p className="success-message">All required fields are filled.</p> : <p className="error-message">*Please fill out all required fields to proceed to payment.</p>} */}
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
