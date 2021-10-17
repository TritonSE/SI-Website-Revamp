/**
 * This file provides routes to modify the emailList DB.
 * Allows for add capabilitiy.
 *
 * @summary   Routes for execCommittees
 * @author    Thomas Garry, Amrit Singh
 */
const express = require("express");
const { body } = require("express-validator");
const {
    addEntry,
    getAll,
    editEntry,
    getSpecificCommittee,
    deleteById,
    deleteCommittee,
} = require("../db/services/execCommittee");
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
        body("startYear").isNumeric(),
        body("endYear").isNumeric(),
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
            const entries = await addEntry(req.body);
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
 * Gets all entries in execCommittee DB that have a specific startYear value.
 *
 * Expects startYear to be passed as a parameter ('startYear').
 *
 * @returns {[JSON]} - 200 - with array of entries.
 */
router.get("/:startYear", async (req, res) => {
    try {
        const { startYear } = req.params;
        const entries = await getSpecificCommittee(startYear);

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
        body("startYear").isNumeric(),
        body("endYear").isNumeric(),
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

            const entries = await editEntry(Number(id), req.body);

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

/**
 * Deletes a specific entry in the Executive Committee DB using its id.
 *
 * @returns {entryCode} - 200 (success), anything else is an error
 */
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const status = await deleteById(id);
        // success
        if (status === 1) return res.status(200).json({ message: "Success" });

        // failure
        return res.status(500).json({ message: "Unsuccessful deletion" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
});

/**
 * Deletes the entire committee with the specified startYear .
 *
 * @returns {entryCode} - 200 (success), anything else is an error
 */
router.delete("/committee/:startYear", async (req, res) => {
    try {
        const { startYear } = req.params;

        const status = await deleteCommittee(startYear);

        // success
        if (status > 0) return res.status(200).json({ message: "Success" });

        console.log(status);

        // failure
        return res.status(500).json({ message: "Unsuccessful committee deletion" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
