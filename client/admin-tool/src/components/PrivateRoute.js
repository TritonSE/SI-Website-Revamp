/**
 * 
 * 
 */

import { SITE_PAGES } from "../constants/links";
import { Redirect } from "react-router-dom";
import React from "react";

const config = require("../config");
const jwt = require("jsonwebtoken");

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function PrivateRoute({ children }) {
    let loggedIn = false;

    function verify(token) {
        return jwt.verify(token, config.auth.jwt_secret, (err) => {
            // invalid token
            if (err) {
                return [Promise.reject(), false];
            }
    
            return [Promise.resolve(), true];
        });
    }

    loggedIn = verify(localStorage.getItem("token"))[1];

    if(loggedIn) return children;
    else return <Redirect to={SITE_PAGES.ACCOUNTS_LOGIN} />;
}