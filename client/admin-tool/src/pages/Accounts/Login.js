import React from "react";
import { TextField, makeStyles, Snackbar } from "@material-ui/core";
import Brand from "../../components/Accounts/Brand"
import Button from "../../components/Button";
import { SITE_PAGES } from "../../constants/links";

import { loginUser } from "../../util/requests/Accounts/account";

import "../../css/Accounts.css";

export default function Login() {
    const [loginData, setloginData] = React.useState({});
    const [loginErrors, setloginErrors] = React.useState({});
    const [pageDisabled, setPageDisabled] = React.useState(false);
    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    React.useEffect(async () => {
        setloginData({
            email: "",
            password: "",
        })

        setloginErrors({
            email: false,
            password: false,
        })
    }, [])

    const handleFormSubmit = async () => {
        setPageDisabled(true);

        let finalLoginData = {
            email: loginData.email,
            password: loginData.password,
        }

        let finalLoginErrors = {
            email: false,
            password: false,
        }

        let hasErrors = false;
        let errorString = "Error: ";

        Object.keys(loginData).forEach((key) => {
            if (loginData[key].length < 1) {
                hasErrors = true;
                finalLoginErrors[key] = true;
                errorString = "Error: all fields are required; ";
            }
        });

        setloginErrors(finalLoginErrors);
        setloginData(finalLoginData);

        if (!hasErrors) {
            console.log(finalLoginData);

            const res = await loginUser(finalLoginData);
            const json = await res.json();

            console.log(res);

            if(res.status !== 200)
                handleSnackbar({ open: true, message: "Error: email and/or password is incorrect" });
            else {
                handleSnackbar({ open: true, message: "Success! Redirecting..." })
                localStorage.setItem("token", json.token);
            }
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
        {placeholder: "Email", name: "email", type: "email"},
        {placeholder: "Password", name: "password", type: "password"},
    ]

    return (
        <div className="login-wrapper">
            <div className="login-form">
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
                                    error={loginErrors[input.name]}
                                    onChange={(event) => {
                                        setloginData({ ...loginData, [input.name]: event.target.value });
                                    }}
                                />
                                <br />
                            </>
                        )
                    })
                }
                <div className="redirect-links">
                    <a className="register-redirect" href={SITE_PAGES.ACCOUNTS_REGISTER}>New user?</a>
                    <a className="password-redirect" href={SITE_PAGES.ACCOUNTS_FORGOT_PASSWORD}>Forgot password</a>
                </div>
                <br />
                <Button 
                    text="Login"
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
