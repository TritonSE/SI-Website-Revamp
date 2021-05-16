/**
 * This file provides routes to modify the volunteers DB.
 * Allows for add capability.
 *
 * @summary   Routes for volunteers --> addUser.
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { addMember } = require("../db/services/memberships");
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
            const entries = await addMember(req.body);
            if (entries === false)
                return res
                    .status(400)
                    .json({ message: "Not added, possibly invalid id in interests" });
            return res.status(200).json({ message: "success" });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err });
        }
    }
);

module.exports = router;
