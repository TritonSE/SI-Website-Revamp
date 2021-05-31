/**
 * This file provides routes to modify the memberships DB.
 * Allows for add capability.
 *
 * @summary   Routes for memberships --> addUser.
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
        body("isNewMember").isBoolean(),
        body("affiliatedOrgs").isString(),
        body("membershipType").isString(),
        body("totalPaid").isNumeric(),
        body("payPalTransactionId").isString(),
        body("payPalVerified").custom((val) => val === undefined),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const entries = await addMember(req.body);
            if (entries === undefined || entries === null)
                return res.status(400).json({ message: "Failure" });
            return res.status(200).json({ message: "success" });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err });
        }
    }
);

module.exports = router;
