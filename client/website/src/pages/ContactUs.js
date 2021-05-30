import React, { useEffect } from "react";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { TextField, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageHeader from "../components/Contact/ImageHeader";
import CustomButton from "../components/CustomButton";
import "../css/ContactUs.css";

const MAX_MOBILE_WIDTH = 1050;

const useStyles = makeStyles((theme) => ({
    form: {
        // input field - general layout
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "90%",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            borderRadius: "30px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6652a0",
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#d77a3d",
        },
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
        },

        //   "& .MuiButton-root": {
        //     margin: theme.spacing(3),
        //     color: "black",
        //     background: "#F9CE1D",
        //     width: "30%",
        //   },
    },
}));

export default function ContactUs() {
    const [isMobile, setIsMobile] = React.useState(false);
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);
    const [snackbar, setSnackBar] = React.useState({
        open: false,
        message: "",
    });
    const [values, setValues] = React.useState({
        name: {
            value: "",
            error: false,
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

    const handleFormSubmit = () => {
        if (isFormDisabled) return;
        setIsFormDisabled(true);

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
            return;
        }

        setIsFormDisabled(false);
    };

    return (
        <div className="Contact-Us">
            <section className="left-container">
                <h2>{isMobile ? "Thank you for your interest in Sakyadhita!" : "Contact Us"}</h2>
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
                    <BsHouseFill className="address-icon" />
                    <p>
                        Sakyadhita International, 7331 Princess View Drive, <br /> San Diego, CA
                        92120 U.S.A.
                    </p>
                </div>
                <h3>Send us a message!</h3>
                <form className={classes.form} autoComplete="off">
                    <div className="form-field-wrapper">
                        <TextField
                            // className="form-field"
                            name="name"
                            value={values.name.value}
                            error={values.name.error}
                            onChange={handleChange}
                            // label="Full Name"
                            placeholder="Full Name"
                            disabled={isFormDisabled}
                            variant="outlined"
                        />
                        <span className="required-asterisk"> * </span>
                    </div>
                    <div className="form-field-wrapper">
                        <TextField
                            // className="form-field"
                            name="email"
                            value={values.email.value}
                            error={values.email.error}
                            onChange={handleChange}
                            // label="Email"
                            placeholder="Email"
                            disabled={isFormDisabled}
                            variant="outlined"
                        />
                        <span className="required-asterisk"> * </span>
                    </div>
                    <div className="form-field-wrapper">
                        <TextField
                            // className="form-field"
                            name="phone"
                            onChange={handleChange}
                            // label="Phone Number"
                            placeholder="Phone Number"
                            value={values.phone.value}
                            disabled={isFormDisabled}
                            error={values.phone.error}
                            variant="outlined"
                        />
                        <span style={{ color: "white" }}> * </span>
                    </div>
                    <div className="form-field-wrapper">
                        <TextField
                            // className="form-field"
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
                    <div className="submit-button">
                        <CustomButton text="Submit" onClickCallback={handleFormSubmit} />
                    </div>
                </form>
            </section>
            <ImageHeader
                image="https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1623024000&Signature=SCONX7E-9B-btNQQ0a8fn1kh2A4i8I3-aZjQlNXgBZSJnw~N8fCz7YzTOmI6hq0iinH~f~2cTCB2mvuab1dM3sLLIqbF1ZwaOcYlCXMiOAkhAYMkzVbcbZgrN6s4X67Jq2fSmA7D-kgk9KzDjiXkLnxn0n8l~TMh6huoB18N5MbJrighV~Hl2YaoJrHmEWhjoBu8Jhm8TDPB99ghsGKIOR9xQMIuULa4STzVHCkoCtzWzWBLgd1-BDv2hhE67pH5PYqoIJnzZwEemddHpUtI-RMW2xHPaq6J8P1LnvRfL9Kuq00ULLl3h04474LC9EjWGr2cACW0lhgyX~ei0roR3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                width={isMobile ? "100%" : "50%"}
                height={isMobile ? "400px" : "auto"}
                title={isMobile ? "Contact Us" : null}
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
