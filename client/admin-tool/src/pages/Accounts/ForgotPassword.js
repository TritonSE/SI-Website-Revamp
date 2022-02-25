import React from "react";
import { TextField, makeStyles, Snackbar } from "@material-ui/core";
import Brand from "../../components/Accounts/Brand";
import Button from "../../components/Button";
import { SITE_PAGES } from "../../constants/links";

import { sendForgotPasswordEmail } from "../../util/requests/Accounts/account";

import "../../css/Accounts.css";

export default function Login() {
    const [forgotPasswordData, setForgotPasswordData] = React.useState({});
    const [forgotPasswordErrors, setForgotPasswordErrors] = React.useState({});
    const [pageDisabled, setPageDisabled] = React.useState(false);
    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    React.useEffect(async () => {
        localStorage.clear();

        setForgotPasswordData({
            email: "",
        });

        setForgotPasswordErrors({
            email: false,
        });
    }, []);

    const handleFormSubmit = async () => {
        setPageDisabled(true);

        let finalForgotPasswordData = {
            email: forgotPasswordData.email,
        };

        let finalForgotPasswordErrors = {
            email: false,
        };

        let hasErrors = false;
        let errorString = "Error: ";

        Object.keys(forgotPasswordData).forEach((key) => {
            if (forgotPasswordData[key].length < 1) {
                hasErrors = true;
                finalForgotPasswordErrors[key] = true;
                errorString = "Error: all fields are required; ";
            }
        });

        setForgotPasswordErrors(finalForgotPasswordErrors);

        if (!hasErrors) {
            const res = await sendForgotPasswordEmail(finalForgotPasswordData);

            if (res.status !== 200)
                handleSnackbar({ open: true, message: "Error: email does not exist" });
            else handleSnackbar({ open: true, message: "Email sent!" });
        } else handleSnackbar({ open: true, message: errorString });

        setPageDisabled(false);
    };

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
                height: "42px",
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
                border: "1px solid",
            },
        },
    }));

    const classes = useHelperTextStyles();

    const inputValues = [{ placeholder: "Email", name: "email", type: "email" }];

    return (
        <div className="forgot-password-wrapper">
            <div className="forgot-password-form">
                <Brand />
                {inputValues.map((input) => {
                    return (
                        <>
                            <TextField
                                variant="outlined"
                                disabled={pageDisabled}
                                placeholder={input.placeholder}
                                className={classes.root}
                                InputProps={{ disableUnderline: true }}
                                type={input.type}
                                error={forgotPasswordErrors[input.name]}
                                onChange={(event) => {
                                    setForgotPasswordData({
                                        ...forgotPasswordData,
                                        [input.name]: event.target.value,
                                    });
                                }}
                            />
                            <br />
                        </>
                    );
                })}
                <div className="redirect-links">
                    <a className="register-redirect" href={SITE_PAGES.ACCOUNTS_LOGIN}>
                        Go back
                    </a>
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
