/**
 * This file provides routes to modify the emailList DB.
 * Allows for add capabilitiy.
 *
 * @summary   Routes for emailList --> addUser.
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { addUser } = require("../db/services/emailList");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

/**
 * Adds user to DB.
 *
 * @returns {status} - 200 - with created item.
 */
router.post(
    "/",
    [
        body("fName").isString(),
        body("mName").isString().optional(),
        body("lName").isString(),
        body("phone").isString().optional(),
        body("email").isEmail(),
        body("address").isString(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const entries = await addUser(req.body);
            return res.status(200).json(entries);
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err });
        }
    }
);

module.exports = router;
