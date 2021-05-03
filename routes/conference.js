const express = require("express");
const { create } = require("../db/services/conference");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

router.post("/addConference", [isValidated], async (req, res) => {
    try {
        const entries = await create(req.body);
        if (entries !== null) return res.status(200).json(entries);
        return res.status(400).json({ message: "array not null" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err });
    }
});

module.exports = router;
