import React from "react";
import { TextField, makeStyles, Snackbar } from "@material-ui/core";
import Brand from "../../components/Accounts/Brand"
import Button from "../../components/Button";
import { SITE_PAGES } from "../../constants/links";

import { loginUser } from "../../util/requests/Accounts/account";

import "../../css/Accounts.css";

export default function ResetPassword() {
    const [resetPasswordData, setResetPasswordData] = React.useState({});
    const [resetPasswordErrors, setResetPasswordErrors] = React.useState({});
    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    React.useEffect(async () => {
        setResetPasswordData({
            password: "",
            confPassword: "",
        })

        setResetPasswordErrors({
            password: false,
            confPassword: false,
        })
    }, [])

    const handleFormSubmit = async () => {
        let finalResetPasswordData = {
            password: resetPasswordData.password,
        }

        let finalResetPasswordErrors = {
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
            const res = await loginUser(finalResetPasswordData);

            if(res.status === 401)
                handleSnackbar({ open: true, message: "Error: email and/or password is incorrect" });
            else 
                handleSnackbar({ open: true, message: "Success! Redirecting..." })
        }
        else handleSnackbar({ open: true, message: errorString });
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
                    <a className="register-redirect" href={SITE_PAGES.ACCOUNTS_REGISTER}>Login</a>
                    <a className="password-redirect" href={SITE_PAGES.ACCOUNTS_LOGIN}>Register</a>
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
