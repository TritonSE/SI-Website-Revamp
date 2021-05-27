/**
 * This file provides routes to modify the Branches and Chapters DB.
 * Allows for add, get, and edit capabilities.
 *
 * @summary   Routes for branchesAndChapters --> addLocation, getAllLocations
 *            and editLocation.
 */
const express = require("express");
const { body } = require("express-validator");
const { create, getAll, edit } = require("../db/services/branchesAndChapters");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

/**
 * Adds location to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/addLocation",
    [
        body("name").isString(),
        body("isBranch").isBoolean(),
        body("email").isString(),
        body("latitude").isFloat(),
        body("longitude").isFloat(),
        body("siteLink").isURL().optional(),
        isValidated,
    ],
    async (req, res) => {
        try {
            const point = {
                type: 'POINT',
                coordinates: [req.body.latitude, req.body.longitude],
            };
            const newEntry = {
                name: req.body.name,
                coordinates: point,
                isBranch: req.body.isBranch,
                email: req.body.email,
                siteLink: req.body.siteLink,
            };
            const addedEntry = await create(newEntry);
            return res.status(200).json(addedEntry);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    }
);

/**
 * Gets all branches and chapters from DB.
 *
 * @returns {status} - 200 - with array of all conferences.
 */
router.get("/getAllLocations", [isValidated], async (req, res) => {
    const entries = await getAll();
    return res.status(200).json(entries);
});

/**
 * Edits a single branch or chapter from DB.
 *
 * @param {Number} id - id of the location to be edited.
 * @returns {status} - 200 - with array of all locations.
 */
router.put(
    "/editLocation/:id",
    [
        body("name").isString().optional(),
        body("isBranch").isBoolean().optional(),
        body("email").isString().optional(),
        body("latitude").isFloat().optional(),
        body("longitude").isFloat().optional(),
        body("siteLink").isURL().optional(),
        isValidated,
    ],
    async (req, res) => {
        try {
            const { id } = req.params; // must be a number
            const point = {
                type: "Point",
                coordinates: [req.body.latitude, req.body.longitude],
            }; // creates a point from coordinates
            const newEntry = {
                name: req.body.name,
                coordinates: point,
                isBranch: req.body.isBranch,
                email: req.body.email,
                siteLink: req.body.siteLink,
            }; // creates body from formatted data
            const editedEntry = await edit(id, newEntry);
            return res.status(200).json(editedEntry);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        }
    }
);

module.exports = router;