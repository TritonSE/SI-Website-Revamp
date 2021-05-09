/**
 * This file provides routes to modify the volunteers DB.
 * Allows for add capability.
 *
 * @summary   Routes for volunteers --> addUser.
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { create } = require("../db/services/volunteers");
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
        body("interests").custom((value) => {
            if (value !== undefined && value.length > 0) return true;
            return false;
        }),
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
