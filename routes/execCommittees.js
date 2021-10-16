/**
 * This file provides routes to modify the emailList DB.
 * Allows for add capabilitiy.
 *
 * @summary   Routes for execCommittees --> addExecCommittee.
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { addExecCommittee, getAll, edit } = require("../db/services/execCommittee");
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

/**
 * Edits an execCommittee from DB.
 *
 * @param {Number} id - id of the location to be edited.
 * @returns {status} - 200
 */
router.put(
    "/:id",
    [
        body("year").isNumeric().optional(),
        body("rank").isNumeric().optional(),
        body("name").isString().optional(),
        body("position").isString().optional(),
        body("bio").isString().optional(),
        body("imageLink").isURL().optional(),
        body("redirectLink").isURL().optional(),
        body("openInSameTab").isBoolean().optional(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const { id } = req.params;

            // checks that id is a number
            if (Number(id) < 0)
                return res.status(500).json({ message: "Id must be a valid number" });

            const entries = await edit(Number(id), req.body);

            // success upon edit
            if (entries[0] === 1) return res.status(200).json({ message: "Success" });

            // failure upon edit
            return res.status(500).json({ message: "Unsuccessful edit" });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    }
);

module.exports = router;
