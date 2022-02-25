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
const { getAll, checkCost } = require("../db/services/membershipTypes");

const router = express.Router();

/**
 * Adds user to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/",
    [
        body("fName").isString(),
        body("mName").isString().optional(),
        body("lName").isString(),
        body("phone").isString().optional(),
        body("email").isString(),
        body("address").isString(),
        body("isNewMember").isBoolean(),
        body("affiliatedOrgs").isString(),
        body("membershipType").isNumeric(),
        body("totalPaid").isNumeric(),
        body("payPalTransactionId").isString(),
        body("payPalStatus").custom((val) => val === undefined),
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
            return res.status(400).json({ message: err });
        }
    }
);

/**
 * Gets all entries in membershipTypes DB.
 *
 * @returns {[entries]} - 200 - with array of entries.
 */
router.get("/membershipTypes", async (req, res) => {
    try {
        const entries = await getAll();
        return res.status(200).json(entries);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Check if the member and cost are associated.
 *
 * @returns {boolean} - 200 - true or false based on if the member and cost are associated.
 */
router.get("/membershipTypes/:id", async (req, res) => {
    try {
        const status = await checkCost(req.params.id, req.query.cost);
        return res.status(200).json({ isValid: status });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
