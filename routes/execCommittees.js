/**
 * This file provides routes to modify the emailList DB.
 * Allows for add capabilitiy.
 *
 * @summary   Routes for execCommittees --> addExecCommittee.
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { addExecCommittee, getAll } = require("../db/services/execCommittee");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

/**
 * Adds execCommittee to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/",
    [
        body("year").isNumeric(),
        body("rank").isNumeric(),
        body("name").isString(),
        body("position").isString(),
        body("bio").isString(),
        body("imageLink").isURL(),
        body("redirectLink").isURL(),
        body("openInSameTab").isBoolean(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            console.log("success");
            const entries = await addExecCommittee(req.body);
            return res.status(200).json(entries);
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err });
        }
    }
);

/**
 * Gets all entries in execCommittee DB.
 *
 * @returns {[entries]} - 200 - with array of entries.
 */
router.get("/", async (req, res) => {
    try {
        const entries = await getAll();
        return res.status(200).json(entries);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
