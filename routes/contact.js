/**
 * This file provides routes to modify the emailList DB.
 * Allows for add capabilitiy.
 *
 * @summary   Routes for emailList --> addUser.
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { sendEmail } = require("./services/mailer");
const { isValidated } = require("../middleware/validation");
const config = require("../config");

const router = express.Router();

/**
 * Adds user to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/",
    [
        body("name").isString(),
        body("phone").isString().optional(),
        body("email").isString(),
        body("message").isString(),
        isValidated,
    ],
    async (req, res) => {
        try {
            if (!req.body.phone || req.body.phone === "") req.body.phone = "n/a";

            const locals = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message,
            };

            // sends notifications that a user has submitted a message from contact page
            const sent = await sendEmail(
                "contact-message",
                config.recipientEmailList.general,
                locals
            );

            if (sent) return res.sendStatus(200);
            return res.sendStatus(401);
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err });
        }
    }
);

module.exports = router;
