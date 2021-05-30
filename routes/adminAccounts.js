/**
 * This file provides routes to modify the AdminAccounts DB.
 * Allows for account create, login, and forgot password capabilities.
 *
 * @summary   Routes for AdminAccounts -->
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { addAdmin, findOneUser, updateOneUser } = require("../db/services/adminAccounts");
const { isValidated } = require("../middleware/validation");
const { createJWT } = require("./services/jwt");
const config = require("../config");

const router = express.Router();

/**
 * Registers an admin to the DB.
 *
 * @returns {jwt} - 200 and jwttoken
 */
router.post(
    "/register",
    [
        body("name").isString(),
        body("email").isEmail(),
        body("password").notEmpty().isString().isLength({ min: 6 }),
        body("secret").notEmpty().isString(),
        // prevent createdAt to be edited
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const { email, secret } = req.body;
            const entries = await addAdmin(req.body);

            // validate secrets
            if (secret !== config.auth.register_secret) {
                return res.status(401).json({ errors: [{ msg: "User Error" }] });
            }

            if (!entries)
                return res.status(400).json({ message: "there was an error adding entry" });

            const payload = {
                email,
            };
            return res.status(200).json({
                email,
                token: createJWT(payload),
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err });
        }
    }
);

/**
 * Logins an admin user.
 *
 * @body email, password - Use middleware to validate
 * @returns {status/object} - 200 json with email and jwt / 500 with err
 */
router.post(
    "/login",
    [
        body("email").notEmpty().isEmail(),
        body("password").notEmpty().isString().isLength({ min: 6 }),
        isValidated,
    ],
    async (req, res) => {
        const { email, password } = req.body;
        try {
            // check if user exists
            const user = await findOneUser(email);
            if (!user) {
                return res.status(401).json({ errors: [{ msg: "Invalid Credentials" }] });
            }
            // compare user password with passed in value
            const matched = await user.validPassword(password);

            if (matched) {
                // matched user, return email and token
                const payload = {
                    email,
                };
                return res.status(200).json({
                    email,
                    token: createJWT(payload),
                });
            }
            return res.status(401).json({ errors: [{ msg: "Invalid Credentials" }] });
        } catch (err) {
            console.error(err.message);
            return res.status(500).send("Server error");
        }
    }
);

/**
 * Resets password for authenticated users.
 *
 * @body {string} email - Denotes an existing user's email in the DB
 * @body {string} oldPassword - Denotes an existing user's current password in DB - required
 * @body {string} newPassword - Denotes what an existing user's password will be changed to - required
 * @returns {status/object} - 200 if email and oldPassword match and the password is updated / 401 or 500 with err
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
                return res.status(401).json({
                    errors: [{ msg: "Email Not Associated With User Account" }],
                });
            }

            // check if the old password matches the email (authenticated user)
            // compare user password with passed in value
            const matched = await user.validPassword(oldPassword);

            if (!matched) {
                return res.status(401).json({ errors: [{ msg: "Invalid Credentials" }] });
            }

            // attempt to update to the newPassword for the user
            user.password = newPassword;
            const updatedUser = await updateOneUser(user);

            // error: Password could not be updated
            if (!updatedUser) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Password Could Not Be Updated!" }] });
            }

            // success!
            return res.status(200).json({
                msg: "Password Successfully Updated!",
            });
        } catch (err) {
            console.error(err.message);
            return res.status(500).send("Server error");
        }
    }
);

module.exports = router;
