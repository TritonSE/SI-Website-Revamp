import React from "react";
import { useHistory } from 'react-router-dom';

import TextField from "@mui/material/TextField";
import { Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {SITE_PAGES} from "../../constants/links";
import { login } from "../../util/requests/Accounts/accounts";
import { setCookie, JWT_TOKEN_KEY } from "../../util/cookies";

import Brand from "../../components/Accounts/Brand";
import Button from "../../components/Button";

import "../../css/Login.css";

export default function Login() {

    const history = useHistory();

    // tracks form information
    const [formContent, updateFormContent] = React.useState({
        email: "",
        password: ""
    });

    // true if form is disabled, false if enabled
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);
    // error message displays
    const [snackbar, handleSnackBar] = React.useState({
        open: false,
        message: "",
    });

    // tracks if form has any errors in required fields, and in which fields
    const [formErrors, updateFormErrors] = React.useState({
        email: false,
        password: false,
    });


     // tracks form information by updating React State
     const handleFormContentChange = (key) => (event) => {
        updateFormContent({ ...formContent, [key]: event.target.value });
    };

    const handleLogin = async () => {
        const data = await login(formContent);
        
        if(data) {
            setCookie(JWT_TOKEN_KEY, data.token);
            history.push(SITE_PAGES.HOME_NEWS_AND_EVENTS_SLIDER);
        }
        else {
            handleSnackBar({open: true, message: "Error: Either Email or Password is incorrect"});
            updateFormErrors({email: true, password: true});
        }
    }

    const validateForm = () => {
        setIsFormDisabled(true);

        // tracker for required fields
        const errors = {
            email: false,
            password: false
        };

        // loop through all required fields and check if they values
        let doesFormHaveErrors = false;
        Object.keys(errors).forEach((key) => {
            const value = formContent[key];
            if (value.length < 1) {
                doesFormHaveErrors = true;
                errors[key] = true;
            }
        });

        // update errors (if any)
        updateFormErrors(errors);
        // enable form
        setIsFormDisabled(false);

        // callback if no errors were found
        if (!doesFormHaveErrors) handleLogin();

        // error message
        else handleSnackBar({ message: "Error: Missing Required Fields", open: true });

    }


    const useHelperTextStyles = makeStyles(() => ({
        helperText: {
            textAlign: "right !important",
            color: "var(--darkorange) !important",
        },
        form: {
            width: "450px",
            // input field - general layout
            "& .MuiTextField-root": {
                backgroundColor: "white",
                borderRadius: "30px"
            },
            // default rendering of field
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
                borderRadius: "30px",
            },
            // on focus rendering of field
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--darkorange)",
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

    const helperTextStyles = useHelperTextStyles();

    return (
        <div id="login-page">
            <div className="login-form-wrapper">
                <Brand location="footer"/>
                <br/>
                <br/>
                <br/>
                <form className={helperTextStyles.form} autoComplete="off">
                    <TextField
                            margin="dense"
                            value={formContent.email}
                            disabled={isFormDisabled}
                            error={formErrors.email}
                            placeholder="Email"
                            fullWidth
                            variant="outlined"
                            onChange={handleFormContentChange("email")}
                        />

                    <TextField
                            margin="dense"
                            value={formContent.password}
                            disabled={isFormDisabled}
                            error={formErrors.password}
                            placeholder="Password"
                            fullWidth
                            variant="outlined"
                            onChange={handleFormContentChange("password")}
                        />
                        <br/>
                        <br/>
                    <div className = "page-links-wrapper">
                        <a href={SITE_PAGES.ACCOUNTS_REGISTER} className="page-link"> New User? </a>
                        <a href={SITE_PAGES.ACCOUNTS_FORGOT_PASSWORD} className="page-link"> Forgot Password </a>
                    </div>
                </form>
                <br/>
                <Button text="Login" onClickCallback={validateForm} />
            </div>
            {/* Snackbar for Error Displays */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackBar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    );
}
