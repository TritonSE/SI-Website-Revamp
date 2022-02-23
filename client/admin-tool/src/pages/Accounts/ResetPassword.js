import React from "react";
import { TextField, makeStyles, Snackbar } from "@material-ui/core";
import Brand from "../../components/Accounts/Brand"
import Button from "../../components/Button";
import { SITE_PAGES } from "../../constants/links";
import { useParams } from "react-router-dom";

import { changePassword, getEmailByToken } from "../../util/requests/Accounts/account";

import "../../css/Accounts.css";

export default function ResetPassword() {
    const [resetPasswordData, setResetPasswordData] = React.useState({});
    const [resetPasswordErrors, setResetPasswordErrors] = React.useState({});
    const [pageDisabled, setPageDisabled] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    const { recoveryToken } = useParams();

    React.useEffect(async () => {
        const email = await getEmailByToken(recoveryToken);

        if(email == undefined) alert("ERROR")
        else setEmail(email);

        setResetPasswordData({
            email: email,
            password: "",
            confPassword: "",
        })

        setResetPasswordErrors({
            email: false,
            password: false,
            confPassword: false,
        })
    }, [])

    const handleFormSubmit = async () => {
        setPageDisabled(true);

        let finalResetPasswordData = {
            email: resetPasswordData.email,
            password: resetPasswordData.password,
        }

        let finalResetPasswordErrors = {
            email: false,
            password: false,
            confPassword: false,
        }

        let hasErrors = false;
        let errorString = "Error: ";

        Object.keys(resetPasswordData).forEach((key) => {
            if (resetPasswordData[key].length < 1) {
                hasErrors = true;
                finalResetPasswordErrors[key] = true;
                errorString = "Error: all fields are required; ";
            }
        });

        setResetPasswordErrors(finalResetPasswordErrors);

        if (!hasErrors) {
            const res = await changePassword(finalResetPasswordData);

            if(res.status === 401)
                handleSnackbar({ open: true, message: "Error: email and/or password is incorrect" });
            else 
                handleSnackbar({ open: true, message: "Success! Redirecting..." })
        }
        else handleSnackbar({ open: true, message: errorString });

        setPageDisabled(false);
    }

    const useHelperTextStyles = makeStyles(() => ({
        root: {
            // input field - general layout
            "& .MuiTextField-root": {
                width: "100%",
            },
            "& .MuiInputBase-input": {
                width: "430px !important",
                borderRadius: "30px",
                backgroundColor: "white",
                borderBottom: "0px",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginBottom: "10px",
                height: "0px",
            },
            // default rendering of field
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
                borderRadius: "30px",
                border: "0px",
                height: "42px"
            },
            // on focus rendering of field
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6652a0",
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "#d77a3d",
                
            },
            // on error rendering of field
            "& .Mui-error": {
                borderColor: "red",
                borderRadius: "30px",
            },
            // on error rendering of field
            "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
                borderColor: "red",
                border: "1px solid"
            },
        },
    }));

    const classes = useHelperTextStyles();

    const inputValues = [
        {placeholder: "Password", name: "password", type: "password"},
        {placeholder: "Confirm passwor", name: "confPassword", type: "password"},
    ]

    return (
        <div className="reset-password-wrapper">
            <div className="reset-password-form">
                <Brand />
                {
                    inputValues.map(input => {
                        return (
                            <>
                                <TextField 
                                    variant="outlined"
                                    disabled={pageDisabled}
                                    placeholder={input.placeholder}
                                    className={classes.root}
                                    InputProps={{ disableUnderline: true }}
                                    type={input.type}
                                    error={resetPasswordErrors[input.name]}
                                    onChange={(event) => {
                                        setResetPasswordData({ ...resetPasswordData, [input.name]: event.target.value });
                                    }}
                                />
                                <br />
                            </>
                        )
                    })
                }
                <div className="redirect-links">
                    <a className="register-redirect" href={SITE_PAGES.ACCOUNTS_LOGIN}>Login</a>
                    <a className="password-redirect" href={SITE_PAGES.ACCOUNTS_REGISTER}>Register</a>
                </div>
                <br />
                <Button 
                    text="Email me a recovery link"
                    onClickCallback={() => handleFormSubmit()}
                />
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackbar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    );
}
