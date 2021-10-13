/**
 * This file provides routes to modify the News and Events DB.
 * Allows for add, get, remove, and edit capabilities.
 *
 * @summary   Routes for newsAndEvents --> addEvent, getAllEvents, removeEvent,
 *            and editEvent.
 */
const express = require("express");
const { body } = require("express-validator");
const { create, getAll, remove, edit } = require("../db/services/newsAndEvents");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

/**
 * Adds event to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/",
    [
        body("title").isString(),
        body("description").isString().optional(),
        body("imageLink").isString(),
        body("redirectLink").isString(),
        body("openInSameTab").isBoolean().optional(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const addedEntry = await create(req.body);
            return res.status(200).json(addedEntry);
        } catch (err) {
            return res.status(500).json({ message: err });
        }
    }
);

/**
 * Gets all news and events from DB.
 *
 * @returns {status} - 200 - with array of all events.
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
 * Removes a single news or event from DB.
 *
 * @param {Number} id - id of the event to be removed.
 */
router.delete("/:id", [isValidated], async (req, res) => {
    try {
        const { id } = req.params;

        // checks that id is a number
        if (Number(id) < 0) return res.status(500).json({ message: "Id must be a valid number" });

        remove(Number(id));

        // success upon delete
        return res.status(200).json({ message: "Success" });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Edits a single news or event from DB.
 *
 * @param {Number} id - id of the event to be edited.
 * @returns {status} - 200 - with array of all events.
 */
router.put(
    "/:id",
    [
        body("title").isString().optional(),
        body("description").isString().optional(),
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