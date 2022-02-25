/**
 * This file contains the routes to modify the Newsletters table.
 * It has routes for add, get, and edit functionality for this table.
 *
 * @summary   Defines routes for the Newsletters table
 * @author    Amrit Kaur Singh
 */

const express = require("express");
const { body } = require("express-validator");
const { isValidated } = require("../middleware/validation");
const {
    getSections,
    createSection,
    editSection,
    deleteSection,
} = require("../db/services/sections");

const router = express.Router();
const { checkToken, verify } = require("./services/jwt");

/**
 * Adds an entry to the Newsletters table.
 *
 * @returns {status} - 200 if add was successful, 500 otherwise
 */
router.post(
    "/",
    [
        checkToken,
        body("page").isString(),
        body("title").isString(),
        body("content").isString(),
        body("isPublished").isBoolean(),

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

            const section = await createSection(req.body);
            return res.status(200).json(section);
        } catch (err) {
            return res.status(500).json({ message: err });
        }
    }
);

/**
 * Edits an entry in Newsletters table with the specified id.
 *
 * @param {Number} id - id of the entry to be updated
 * @returns {status} - 200 if edit was successful, 500 otherwise
 */
router.put(
    "/:id",
    [
        checkToken,
        body("page").isString().optional(),
        body("title").isString().optional(),
        body("content").isString().optional(),
        body("isPublished").isBoolean().optional(),

        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        const { id } = req.params;

        const verified = await verify(req.token);

        if (!verified) {
            return res.status(403).json({ message: "No access" });
        }

        // checks if id is invalid and returns 400 status
        if (Number(id) < 0) {
            return res.status(400).json({ message: "Syntax Error in Request" });
        }

        try {
            const section = await editSection(Number(id), req.body);

            // checks if an entry was updated
            if (section[0] === 1) {
                return res.status(200).json({ message: "Success" });
            }
            return res.status(500).json({ message: "Edit Unsuccessful" });
        } catch (err) {
            return res.status(500).json({ message: err });
        }
    }
);

/**
 * Removes a single news or event from DB.
 *
 * @param {Number} id - id of the event to be removed.
 */
router.delete("/:id", [checkToken, isValidated], async (req, res) => {
    try {
        const { id } = req.params;

        const verified = await verify(req.token);

        if (!verified) {
            return res.status(403).json({ message: "No access" });
        }

        // checks that id is a number
        if (Number(id) < 0) return res.status(500).json({ message: "Id must be a valid number" });

        const section = await deleteSection(Number(id));

        // success upon removal
        if (section === 1) return res.status(200).json({ message: "Success" });

        // failure upon removal
        return res.status(500).json({ message: "Unsuccessful removal" });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Retrieves all entries in the Newsletters table.
 *
 * @returns {status} - 200 with an array of all entries if successful, 500 otherwise
 */
router.get("/", [isValidated], async (req, res) => {
    try {
        const page = req.query.page || null;
        const isPublished = req.query.isPublished || null;

        const queryFilter = {
            where: {},
        };

        if (page !== null) queryFilter.where.page = page;
        if (isPublished !== null) queryFilter.where.isPublished = isPublished === "true";

        const sections = await getSections(queryFilter);

        return res.status(200).json(sections);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
