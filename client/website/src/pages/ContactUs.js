/**
 * The contact us page on the website.It displays contact information, including email,
 * phone number, and address (on click opens up google maps). It also includes a small form
 * to allow any user to send messages to Sakyadhita. Sent messages are done using a fetch request
 * to the backend server, which will trigger email automation to Sakyadhita with the given form
 * information provided by the user.
 *
 * @summary     Displays Contact Us Page.
 * @author      Amrit Kaur Singh
 */
import React, { useEffect } from "react";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { TextField, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageHeader from "../components/Contact/ImageHeader";
import CustomButton from "../components/CustomButton";
import Modal from "../components/Modal";
import "../css/ContactUs.css";
import config from "../config";

const BACKEND_URL = config.backend.uri;

const MAX_MOBILE_WIDTH = 1050;
const MAIN_IMG_URL_LINK =
    "https://images.unsplash.com/photo-1616435577207-ca90abc6b732?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG90dXMlMjBmbG93ZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

// provides custom style/border colors for form fields
const useStyles = makeStyles((theme) => ({
    form: {
        // input field - general layout
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "95%",
        },
        // default rendering of field
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            borderRadius: "30px",
        },
        // on focus rendering of field
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6652a0",
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#d77a3d",
        },
        // on error rendering of field
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
        },
    },
}));

export default function ContactUs() {
    // tracks page layout to width changes
    const [isMobile, setIsMobile] = React.useState(false);
    // tracks whether form is disabled
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);
    // tracks whether thank you modal should open
    const [isEmailSentModuleOpen, setIsEmailSentModuleOpen] = React.useState(false);
    // tracks snackbar for any error messages to the user
    const [snackbar, setSnackBar] = React.useState({
        open: false,
        message: "",
    });
    // tracks values and error states for all fields in form
    const [values, setValues] = React.useState({
        name: {
            value: "", // field value given by user
            error: false, // field contains an error
        },
        email: {
            value: "",
            error: false,
        },
        phone: {
            value: "",
            error: false,
        },
        message: {
            value: "",
            error: false,
        },
    });

    const classes = useStyles();

    // handler to call on window resize
    useEffect(() => {
        function handleResize() {
            // check if now in mobile mode
            if (window.innerWidth <= MAX_MOBILE_WIDTH) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        // add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // handles user updates to any field in form
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: {
                value: event.target.value,
            },
        });
    };

    // triggered once user decides to close thank you modal
    const handleModalHide = (event) => {
        setIsEmailSentModuleOpen(event);
    };

    // closes snackbar for any error messages shown
    const handleSnackClose = () => {
        setSnackBar({ open: false });
    };

    // triggered once submit button is clicked by user
    const handleFormSubmit = async () => {
        // do nothing if form is already processing a request
        if (isFormDisabled) return;

        // disable form to prevent spam requests
        setIsFormDisabled(true);
        // display loading cursor
        document.body.style.cursor = "wait";

        let name = false;
        let message = false;
        let email = false;

        if (values.name.value === "") name = true;
        if (values.message.value === "") message = true;
        if (values.email.value === "") email = true;

        setValues({
            ...values,
            name: { ...values.name, error: name },
            message: { ...values.message, error: message },
            email: { ...values.email, error: email },
        });

        // check to see if any required fields are empty
        if (name || message || email) {
            setSnackBar({ open: true, message: "Missing required fields" });
            setIsFormDisabled(false);
            document.body.style.cursor = null;
            return;
        }

        // attempt to send contact message
        await fetch(`${BACKEND_URL}contact/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: values.name.value,
                email: values.email.value,
                phone: values.phone.value,
                message: values.message.value,
            }),
        }).then((res) => {
            // message sent
            if (res.ok) {
                // display email sent confirmation modal
                setIsEmailSentModuleOpen(true);
                // clear form values
                setValues({
                    ...values,
                    name: { ...values.name, value: "" },
                    message: { ...values.message, value: "" },
                    email: { ...values.email, value: "" },
                    phone: { ...values.phone, value: "" },
                });
                // message could not be sent
            } else {
                // show snackbar to notify message could not be sent
                setSnackBar({
                    open: true,
                    message: "An internal error occurred. Message not sent.",
                });
            }
        });

        // allow form to be editable again
        document.body.style.cursor = null;
        setIsFormDisabled(false);
    };

    return (
        <div className="Contact-Us">
            {/* contains textual rendering of all information not including header image  */}
            <section className="left-container">
                {/* Main paragraph at top  */}
                <h2>{isMobile ? "Thank you for your interest in Sakyadhita!" : "Contact Us"}</h2>
                <p>
                    Thank you for your interest in Sakyadhita International and our work to awaken
                    women to their tremendous potential for social and spiritual transformation.
                    Please contact us for general inquiries and comments, resource and women&apos;s
                    initiative updates, Dharma offerings, questions about donations or sponsorships,
                    or general correspondence. Sakyadhita is volunteer run, so please have patience
                    with us as we answer your email. We always strive to answer in a timely manner.
                </p>
                {/* Contact Information */}
                <h4>Reach us at: </h4>
                {/* Email */}
                <p>
                    {" "}
                    <GoMail /> <a href="mailto:info@sakyadhita.org"> info@sakyadhita.org </a>{" "}
                    (General Email Inquiries){" "}
                </p>
                {/* Email */}
                <p>
                    {" "}
                    <GoMail />{" "}
                    <a href="mailto:webmaster@sakyadhita.org"> webmaster@sakyadhita.org </a>{" "}
                    (Webmaster){" "}
                </p>
                {/* Phone Number */}
                <p>
                    {" "}
                    <FaPhoneAlt /> 619-260-4600 x4921*{" "}
                </p>
                {/* Address */}
                <div className="address">
                    <BsHouseFill className="address-icon" />
                    <p>11474 McDowell Court, San Diego, CA 92131 USA</p>
                </div>
                <p>
                    {" "}
                    *Please note during academic breaks phone messages may not be returned in a
                    timely manner. Please email for quicker assistance.
                </p>
                {/* Renders Form */}
                <h4>Send us a message!</h4>
                <form className={classes.form} autoComplete="off">
                    {/* Full Name Field */}
                    <div className="form-field-wrapper">
                        <TextField
                            name="name"
                            value={values.name.value}
                            error={values.name.error}
                            onChange={handleChange}
                            placeholder="Full Name"
                            disabled={isFormDisabled}
                            variant="outlined"
                        />
                        <span className="required-asterisk"> * </span>
                    </div>
                    {/* Email Field */}
                    <div className="form-field-wrapper">
                        <TextField
                            name="email"
                            value={values.email.value}
                            error={values.email.error}
                            onChange={handleChange}
                            placeholder="Email"
                            disabled={isFormDisabled}
                            variant="outlined"
                        />
                        <span className="required-asterisk"> * </span>
                    </div>
                    {/* Phone Number Field */}
                    <div className="form-field-wrapper">
                        <TextField
                            name="phone"
                            onChange={handleChange}
                            placeholder="Phone Number"
                            value={values.phone.value}
                            disabled={isFormDisabled}
                            error={values.phone.error}
                            variant="outlined"
                        />
                        <span style={{ color: "white" }}> * </span>
                    </div>
                    {/* Message Field */}
                    <div className="form-field-wrapper">
                        <TextField
                            name="message"
                            value={values.message.value}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            disabled={isFormDisabled}
                            error={values.message.error}
                            variant="outlined"
                            multiline
                            rows={8}
                        />
                        <span className="required-asterisk"> * </span>
                    </div>
                    {/* Note on required fields  */}
                    <p style={{ textAlign: "center" }}>
                        {" "}
                        <span className="required-asterisk"> * </span> indicates a required field
                    </p>
                    {/* Submit Button */}
                    <div className="submit-button">
                        <CustomButton text="Submit" onClickCallback={handleFormSubmit} />
                    </div>
                </form>
            </section>
            {/* Image Header */}
            <ImageHeader
                image={MAIN_IMG_URL_LINK}
                width={isMobile ? "100%" : "50%"}
                height={isMobile ? "400px" : "auto"}
                title={isMobile ? "Contact Us" : null}
            />
            {/* Thank You Modal Once Form Submitted */}
            <Modal
                text="Thank you for contacting us. We will get in touch with you shortly."
                open={isEmailSentModuleOpen}
                hide={handleModalHide}
                negativeButtonText="Ok"
            />
            {/* Snackbar for Error Displays */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message={snackbar.message}
            />
        </div>
    );
}
