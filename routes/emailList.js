/**
 * This file provides routes to modify the emailList DB.
 * Allows for add capabilitiy.
 *
 * @summary   Routes for emailList --> addUser.
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { create } = require("../db/services/emailList");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

/**
 * Adds user to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/addUser",
    [
        body("fName").isString(),
        body("mName").isString().optional(),
        body("lName").isString(),
        body("phone").isString(),
        body("email").isEmail(),
        body("country").isString(),
        isValidated,
    ],
    async (req, res) => {
        try {
            const entries = await create(req.body);
            return res.status(200).json(entries);
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err });
        }
    }
);

module.exports = router;
