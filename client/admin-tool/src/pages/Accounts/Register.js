import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import Brand from "../../components/Accounts/Brand"
import Button from "../../components/Button";

import { registerUser } from "../../util/requests/Accounts/account";

import "../../css/Register.css";

export default function Register() {
    const [registerData, setRegisterData] = React.useState({});

    React.useEffect(async () => {
        setRegisterData({
            name: "",
            email: "",
            password: "",
            confPasswrd: "",
            secret: "",
        })
    }, [])

    const handleFormSubmit = () => {
        registerUser(registerData)
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

    const classes = useHelperTextStyles();

    const inputValues = [
        {placeholder: "Sign-up code", name: "secret", type: "text"},
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
                                    placeholder={input.placeholder}
                                    className={classes.root}
                                    InputProps={{ disableUnderline: true }}
                                    type={input.type}
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
        </div>
    );
}
