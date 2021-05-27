/**
 * This file provides routes to get the membershipTypes DB.
 * Allows for get capability.
 *
 * @summary   Routes for membershipshipTypes --> get, checkCost.
 * @author    Thomas Garry
 */
const express = require("express");
const { getAll, checkCost } = require("../db/services/membershipTypes");

const router = express.Router();

/**
 * Gets all entries in membershipTypes DB.
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
 * Check if the member and cost are associated.
 *
 * @returns {boolean} - 200 - true or false based on if the member and cost are associated.
 */
router.get("/:id", async (req, res) => {
    try {
        const status = await checkCost(req.params.id, req.query.cost);
        return res.status(200).json(status);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
