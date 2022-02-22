import React from "react";
import { TextField, makeStyles, Snackbar } from "@material-ui/core";
import Brand from "../../components/Accounts/Brand"
import Button from "../../components/Button";

import { registerUser } from "../../util/requests/Accounts/account";

import "../../css/Register.css";

export default function Register() {
    const [registerData, setRegisterData] = React.useState({});
    const [registerErrors, setRegisterErrors] = React.useState({});
    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    React.useEffect(async () => {
        setRegisterData({
            name: "",
            email: "",
            password: "",
            confPassword: "",
            secret: "",
        })

        setRegisterErrors({
            name: false,
            email: false,
            password: false,
            confPassword: false,
            secret: false,
        })
    }, [])

    const handleFormSubmit = async () => {
        let finalRegisterData = {
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
            secret: registerData.secret,
        }

        let finalRegisterErrors = {
            name: false,
            email: false,
            password: false,
            confPassword: false,
            secret: false,
        }

        let hasErrors = false;
        let errorString = "Error: ";

        Object.keys(registerData).forEach((key) => {
            if (registerData[key].length < 1) {
                hasErrors = true;
                finalRegisterErrors[key] = true;
                errorString = "Error: all fields are required; ";
            }
        });

        if(registerData.password.length < 6 || registerData.password.length > 15) {
            hasErrors = true;
            errorString += "password must be between 6 and 15 characters long";
            finalRegisterErrors["password"] = true;
            finalRegisterErrors["confPassword"] = true;
        }

        if(registerData.password !== registerData.confPassword) {
            hasErrors = true;
            errorString += "passwords do not match; ";
            finalRegisterErrors["password"] = true;
            finalRegisterErrors["confPassword"] = true;
        }

        setRegisterErrors(finalRegisterErrors);

        if (!hasErrors) {
            const res = await registerUser(finalRegisterData);

            if(res.status === 401)
                handleSnackbar({ open: true, message: "Error: secret key is invalid" });
            else if(res.status === 409)
                handleSnackbar({ open: true, message: "Error: email already registered" });
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
        {placeholder: "Sign-up code", name: "secret", type: "password"},
        {placeholder: "Full name", name: "name", type: "text"},
        {placeholder: "Email", name: "email", type: "email"},
        {placeholder: "Password", name: "password", type: "password"},
        {placeholder: "Re-enter password", name: "confPassword", type: "password"},
    ]

    return (
        <div className="register-wrapper">
            <div className="register-form">
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
                                    error={registerErrors[input.name]}
                                    onChange={(event) => {
                                        setRegisterData({ ...registerData, [input.name]: event.target.value });
                                    }}
                                />
                                <br />
                            </>
                        )
                    })
                }
                <Button 
                    text="Register and login"
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
