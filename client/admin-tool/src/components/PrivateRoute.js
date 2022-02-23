/**
 * 
 * 
 */

import { SITE_PAGES } from "../constants/links";
import { Route, Redirect } from "react-router-dom";
import React from "react";

const config = require("../config");
const jwt = require("jsonwebtoken");

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function PrivateRoute({ children, ...rest }) {
    let loggedIn = false;

    const verify = (token) => {
        return jwt.verify(token, config.auth.jwt_secret, (err) => {
            // invalid token
            if (err) {
                return false;
            }
    
            return true;
        });
    }

    loggedIn = verify(localStorage.getItem("token"));

    if(loggedIn) return <Route {...rest} render={children} />;
    else return <Redirect to={SITE_PAGES.ACCOUNTS_LOGIN} />;

}