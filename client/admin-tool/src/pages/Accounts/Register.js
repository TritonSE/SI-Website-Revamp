import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import Brand from "../../components/Accounts/Brand"

import "../../css/Register.css";

export default function Register() {
    const useHelperTextStyles = makeStyles(() => ({
        root: {
            // input field - general layout
            "& .MuiTextField-root": {
                width: "100%",
            },
            "& .MuiInputBase-input": {
                width: "430px",
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
        {placeholder: "Sign-up code"},
        {placeholder: "Full name"},
        {placeholder: "Email"},
        {placeholder: "Password"},
        {placeholder: "Re-enter password"},
    ]

    return (
        <div className="register-wrapper">
            <div className="register-form">
                <Brand />
                {
                    inputValues.map(value => {
                        return (
                            <>
                                <TextField 
                                    placeholder={value.placeholder}
                                    className={classes.root}
                                    InputProps={{ disableUnderline: true }}
                                />
                                <br />
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}
