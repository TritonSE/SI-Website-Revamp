/**
 * This file provides routes to modify the Conferences DB.
 * Allows for add, get, and edit capabilities.
 *
 * @summary   Routes for conferences --> addConference, getAll and editConference.
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { create, getAll, edit } = require("../db/services/conference");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

/**
 * Adds conference to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/addConference",
    [
        body("title").isString(),
        body("confNum").isNumeric(),
        body("location").isString(),
        body("slideShowImages").custom((value) => {
            // urls array must have at least 1 entry
            if (value.urls !== undefined && value.urls.length > 0) return true;
            return false;
        }),
        body("programs.data")
            .isArray()
            .custom((value) => {
                if (!value) return false;
                // make sure that every entry in the array has a description/url
                for (const i of value) {
                    if (i === undefined || i.description === undefined || i.url === undefined) {
                        return false;
                    }
                }
                return true;
            }),
        body("presentations.data")
            .isArray()
            .custom((value) => {
                if (!value) return false;
                // make sure that every entry in the array has a description/url
                for (const i of value) {
                    if (i === undefined || i.description === undefined || i.url === undefined) {
                        return false;
                    }
                }
                return true;
            }),
        body("abstracts.data")
            .isArray()
            .custom((value) => {
                if (!value) return false;
                // make sure that every entry in the array has a description/url
                for (const i of value) {
                    if (i === undefined || i.description === undefined || i.url === undefined) {
                        return false;
                    }
                }
                return true;
            }),
        body("video").isString().optional(),
        body("theme").isString().optional(),
        body("signUpLink").isString().optional(),
        // prevent createdAt to be edited
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
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

/**
 * Gets all conferences from DB.
 *
 * @returns {status} - 200 - with array of all conferences.
 */
router.get("/getAllConferences", [isValidated], async (req, res) => {
    const entries = await getAll();
    return res.status(200).json(entries);
});

/**
 * Edits a single conferences from DB.
 *
 * @param {Number} id - id of the conference to be edited
 * @returns {status} - 200 - with array of all conferences.
 */
router.put(
    "/editConference/:id",
    [
        body("title").isString().optional(),
        body("confNum").isNumeric().optional(),
        body("location").isString().optional(),
        body("slideShowImages")
            .custom((value) => {
                if (value.urls !== undefined && value.urls.length > 0) return true;
                return false;
            })
            .optional(),
        body("programs.data")
            .isArray()
            .custom((value) => {
                if (!value) return false;
                // make sure that every entry in the array has a description/url
                for (const i of value) {
                    if (i === undefined || i.description === undefined || i.url === undefined) {
                        return false;
                    }
                }
                return true;
            })
            .optional(),
        body("presentations.data")
            .isArray()
            .custom((value) => {
                if (!value) return false;
                // make sure that every entry in the array has a description/url
                for (const i of value) {
                    if (i === undefined || i.description === undefined || i.url === undefined) {
                        return false;
                    }
                }
                return true;
            })
            .optional(),
        body("abstracts.data")
            .isArray()
            .custom((value) => {
                if (!value) return false;
                // make sure that every entry in the array has a description/url
                for (const i of value) {
                    if (i === undefined || i.description === undefined || i.url === undefined) {
                        return false;
                    }
                }
                return true;
            })
            .optional(),
        body("video").isString().optional(),
        body("theme").isString().optional(),
        body("signUpLink").isString().optional(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        const { id } = req.params;
        // index must be a number
        if (Number(id) < 0) return res.status(400).json({ message: "index must be a number" });

        // success / failure upon edit
        const entries = await edit(Number(id), req.body);
        if (entries[0] === 1) return res.status(200).json({ message: "success" });
        return res.status(501).json({ message: "unsuccessful edit" });
    }
);

module.exports = router;
