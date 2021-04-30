const express = require("express");
const { getAll } = require("../db/services/sample");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

router.get("/", [isValidated], async (req, res, next) => {
    const entries = await getAll();
    return res.status(200).json(entries);
});

module.exports = router;
