/**
 * This file provides routes to modify the Branches and Chapters DB.
 * Allows for add, get, and edit capabilities.
 *
 * @summary   Routes for branchesAndChapters --> addLocation, getAllLocations
 *            and editLocation.
 */
const express = require("express");
const { body } = require("express-validator");
const { create, getAll, edit, deleteOne } = require("../db/services/branchesAndChapters");
const { isValidated } = require("../middleware/validation");
const { checkToken, verify } = require("./services/jwt");

const router = express.Router();

/**
 * Adds location to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/",
    [
        checkToken,
        body("name").isString(),
        body("isBranch").isBoolean(),
        body("email").isString().optional(),
        body("latitude").isFloat(),
        body("longitude").isFloat(),
        body("siteLink").isString().optional(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const verified = await verify(req.token);

            if (!verified) {
                return res.status(403).json({ message: "No access" });
            }

            const addedEntry = await create(req.body);
            return res.status(200).json(addedEntry);
        } catch (err) {
            return res.status(500).json({ message: err });
        }
    }
);

/**
 * Deletes branch and chapter from DB.
 *
 * @returns {status} - 200 - with array of all conferences.
 */
router.delete("/:id", [isValidated], async (req, res) => {
    const { id } = req.params;

    // checks if id is invalid and returns 400 status
    if (Number(id) < 0) {
        return res.status(400).json({ message: "Syntax Error in Request" });
    }

    try {
        const numDeleted = await deleteOne(Number(id));

        // checks if an entry was updated
        if (numDeleted === 1) {
            return res.status(200).json({ message: "Success" });
        }
        return res.status(500).json({ message: "Delete Unsuccessful" });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Gets all branches and chapters from DB.
 *
 * @returns {status} - 200 - with array of all conferences.
 */
router.get("/", [isValidated], async (req, res) => {
    try {
        const entries = await getAll();
        return res.status(200).json(entries);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Edits a single branch or chapter from DB.
 *
 * @param {Number} id - id of the location to be edited.
 * @returns {status} - 200 - with array of all locations.
 */
router.put(
    "/:id",
    [
        checkToken,
        body("name").isString().optional(),
        body("isBranch").isBoolean().optional(),
        body("email").isString().optional(),
        body("latitude").isFloat().optional(),
        body("longitude").isFloat().optional(),
        body("siteLink").isString().optional(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const { id } = req.params;
            const verified = await verify(req.token);

            if (!verified) {
                return res.status(403).json({ message: "No access" });
            }

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
