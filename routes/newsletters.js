/**
 * This file contains the routes to modify the Newsletters table.
 * It has routes for add, get, delete, and edit functionality for this table.
 *
 * @summary   Defines routes for the Newsletters table
 * @author    Dhanush Nanjunda Reddy
 * @author    Navid Boloorian
 */

const express = require("express");
const { body } = require("express-validator");
const { isValidated } = require("../middleware/validation");
const { addOne, getAll, editOne, deleteOne } = require("../db/services/newsletters");

const router = express.Router();

/**
 * Adds an entry to the Newsletters table.
 *
 * @returns {status} - 200 if add was successful, 500 otherwise
 */
router.post(
    "/",
    [
        body("volume").isNumeric(),
        body("number").isNumeric(),
        body("year").isNumeric().isLength({ min: 4, max: 4 }),
        body("pdfLink").isString(),
        body("imageLink").isString(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const newsletters = await addOne(req.body);
            return res.status(200).json(newsletters);
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
        body("volume").isNumeric().optional(),
        body("number").isNumeric().optional(),
        body("year").isNumeric().isLength({ min: 4, max: 4 }).optional(),
        body("pdfLink").isString().optional(),
        body("imageLink").isString().optional(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        const { id } = req.params;

        // checks if id is invalid and returns 400 status
        if (Number(id) < 0) {
            return res.status(400).json({ message: "Syntax Error in Request" });
        }

        try {
            const newsletters = await editOne(Number(id), req.body);

            // checks if an entry was updated
            if (newsletters[0] === 1) {
                return res.status(200).json({ message: "Success" });
            }
            return res.status(500).json({ message: "Edit Unsuccessful" });
        } catch (err) {
            return res.status(500).json({ message: err });
        }
    }
);

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
    }
);

/**
 * Retrieves all entries in the Newsletters table.
 *
 * @returns {status} - 200 with an array of all entries if successful, 500 otherwise
 */
router.get("/", [isValidated], async (req, res) => {
    try {
        const newsletters = await getAll();
        return res.status(200).json(newsletters);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
