/**
 * This file provides routes to modify the AdminAccounts DB.
 * Allows for account create, login, and forgot password capabilities.
 *
 * @summary   Routes for AdminAccounts -->
 * @author    Thomas Garry, Amrit Kaur Singh
 */
const express = require("express");
const { body } = require("express-validator");
const crypto = require("crypto");
const { addAdmin, findOneUser, updateOneUser } = require("../db/services/adminAccounts");
const { isValidated } = require("../middleware/validation");
const { createJWT } = require("./services/jwt");
const { sendEmail } = require("./services/mailer");
const config = require("../config");

const router = express.Router();

// used for random password generation (Route: /forgotPassword)
const MIN_PASS_LENGTH = 6;
const MAX_PASS_LENGTH = 15;

/**
 * Returns a random number between min (inclusive) and max (exclusive).
 * Used in /forgotPassword route to help create randomly generated password.
 *
 * @param {Number} min - Minimum value
 * @param {Number} max - Maximum value
 * @returns {Number} - A random number between min and max
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Registers an admin to the DB if they know the correct secret key and have do not already have an account with
 * the given email address.
 *
 * @body {string} name - Denotes the name of the user to be registered
 * @body {string} email - Denotes the email of the user to be registered
 * @body {string} password - Denotes the password of the user to be registered
 * @body {string} secret - Denotes the secret for validation
 *
 * @returns {200} - Successful registration, returned JSON contains name, email, and a signed JWT token
 * @returns {400} - Insufficient Information, route was expected more information than what was given
 * @returns {401} - Secret key is not correct, invalid credentials
 * @returns {409} - Email address already used for an existing admin account
 * @returns {500} - Internal error, user could not be registered for some reason
 */
router.post(
    "/register",
    [
        body("name").isString(),
        body("email").isEmail(),
        body("password").notEmpty().isString().isLength({ min: 6 }),
        body("secret").notEmpty().isString(),
        isValidated,
    ],
    async (req, res) => {
        try {
            const { name, email, password, secret } = req.body;

            // validate secrets
            if (secret !== config.auth.register_secret) {
                return res.status(401).json({ msg: "Invalid Credentials" });
            }

            // check if user exists
            const user = await findOneUser(email);
            if (user) {
                return res
                    .status(409)
                    .json({ msg: "Email address already registered to an account." });
            }

            const newUserEntry = {
                name,
                email,
                password,
            };

            // add user
            const entries = await addAdmin(newUserEntry);

            // user could not be added
            if (!entries) return res.status(500).json({ message: "User could not be registered." });

            const payload = {
                name,
                email,
            };
            // success, return name + email + token
            return res.status(200).json({
                name,
                email,
                token: createJWT(payload),
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    }
);

/**
 * Logins an admin user.
 *
 * @body email, password - Use middleware to validate
 *
 * @returns {200} - Successful login, returned JSON contains name, email, and a signed JWT token
 * @returns {400} - Insufficient Information, route was expected more information than what was given
 * @returns {401} - Either email or password do not match an existing account
 * @returns {500} - Internal error, user could not be logged in for some reason
 */
router.post(
    "/login",
    [
        body("email").notEmpty().isString(),
        body("password").notEmpty().isString().isLength({ min: 6 }),
        isValidated,
    ],
    async (req, res) => {
        const { email, password } = req.body;
        try {
            // check if user does not exist
            const user = await findOneUser(email);
            if (!user) {
                return res.status(401).json({ msg: "Invalid credentials" });
            }
            // compare user password with passed in value
            const matched = await user.validPassword(password);

            if (matched) {
                // matched user, return email + name +  token
                const payload = {
                    email,
                };
                return res.status(200).json({
                    email: user.email,
                    name: user.name,
                    token: createJWT(payload),
                });
            }
            return res.status(401).json({ msg: "Invalid Credentials" });
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    }
);

/**
 * Resets password for authenticated users.
 *
 * @body {string} email - Denotes an existing user's email in the DB
 * @body {string} oldPassword - Denotes an existing user's current password in DB - required
 * @body {string} newPassword - Denotes what an existing user's password will be changed to - required
 *
 * @returns {200} - Successful password change
 * @returns {400} - Insufficient Information, route was expected more information than what was given
 * @returns {401} - Either email or oldPassword do not match an existing account
 * @returns {500} - Internal error, user's password could not be changed for some reason
 */
router.put(
    "/changePassword",
    [
        body("email").notEmpty().isEmail(),
        body("oldPassword").notEmpty().isString(),
        body("newPassword").notEmpty().isString().isLength({ min: 6 }),
        isValidated,
    ],
    async (req, res) => {
        const { email, oldPassword, newPassword } = req.body;
        try {
            // check if user email exists
            const user = await findOneUser(email);

            // error: User email does not exist
            if (!user) {
                return res.status(401).json({ msg: "Invalid Credentials" });
            }

            // check if the old password matches the email (authenticated user)
            // compare user password with passed in value
            const matched = await user.validPassword(oldPassword);

            if (!matched) {
                return res.status(401).json({ msg: "Invalid Credentials" });
            }

            // attempt to update to the newPassword for the user
            user.password = newPassword;
            const updatedUser = await updateOneUser(user);

            // error: Password could not be updated
            if (!updatedUser) {
                return res.status(500).json({ msg: "Password Could Not Be Updated!" });
            }

            // success!
            return res.status(200).json({ msg: "Password Successfully Updated!" });
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    }
);

/**
 * Sends email containing new password if the user provides an email address to an exisitng account. The
 * password itself is randomly generated. Email should provide user with this randomly generated password and encourage them
 * to reset it to something more memorable.
 *
 * @body {string} - Email that denotes an existing user's email in the DB
 *
 * @returns {200} - Successful randomly generated password reset + email sent to user
 * @returns {400} - Insufficient Information, route was expected more information than what was given
 * @returns {401} - Email does not match an existing account
 * @returns {500} - Internal error, user's password could not be changed/email could not be sent for some reason
 */
router.put(
    "/forgotPassword",
    [body("email").notEmpty().isEmail(), isValidated],
    async (req, res) => {
        const { email } = req.body;
        try {
            // check if user email exists
            const user = await findOneUser(email);
            if (!user) {
                return res.status(401).json({ msg: "Invalid Credentials" });
            }

            // generate a random password
            const passLength = getRandomArbitrary(MIN_PASS_LENGTH, MAX_PASS_LENGTH);
            const randomlyGeneratedPass = crypto.randomBytes(passLength).toString("hex");

            // set user's password to the randomly generated one
            user.password = randomlyGeneratedPass;

            // attempt to update the password for the user
            const updatedUser = await updateOneUser(user);
            if (!updatedUser) {
                return res.status(500).json({ msg: "Password could not be reset for account." });
            }

            // send an automated email to the user containing their new randomly generated password
            const locals = {
                password: randomlyGeneratedPass,
                resetLink: `${config.frontend.uri}reset-password`,
            };

            const isSent = await sendEmail("forgot-password", email, locals, res);

            // email could be sent
            if (!isSent)
                return res.status(500).json({
                    msg:
                        "Password reset, but email could not be sent. Please contact an adminstrator.",
                });

            return res.status(200).json({
                msg: "Email Successfully Sent",
            });
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    }
);

module.exports = router;
