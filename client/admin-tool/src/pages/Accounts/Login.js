import React from "react";

import TextField from "@mui/material/TextField";
import { Snackbar } from "@material-ui/core";

import Brand from "../../components/Accounts/Brand";
import Button from "../../components/Button";

import "../../css/Login.css";

export default function Login() {
    return (
        <div id="login-page">
            <div className="login-form-wrapper">
                <Brand location="footer"/>

                <Button text="Login" />
            </div>
        </div>
    );
}
