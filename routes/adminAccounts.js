/**
 * This file provides routes to modify the AdminAccounts DB.
 * Allows for account create, login, and forgot password capabilities.
 *
 * @summary   Routes for AdminAccounts -->
 * @author    Thomas Garry
 */
const express = require("express");
const { body } = require("express-validator");
const { addAdmin } = require("../db/services/adminAccounts");
const { isValidated } = require("../middleware/validation");

const router = express.Router();

/**
 * Registers an admin to the DB.
 *
 * @returns {jwt} - 200 and jwttoken
 */
router.post(
    "/register",
    [
        body("name").isString(),
        body("email").isEmail(),
        body("password").isString(),
        // prevent createdAt to be edited
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        try {
            const entries = await addAdmin(req.body);
            if (!entries)
                return res.status(400).json({ message: "there was an error adding entry" });
            return res.status(200).json(entries);
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: err });
        }
    }
);

/**
 * Edits a single conferences from DB.
 *
 * @param {Number} id - id of the conference to be edited
 * @returns {status} - 200 - with array of all conferences.
 */
// router.put(
//     "/editConference/:id",
//     [
//         body("title").isString().optional(),
//         body("confNum").isNumeric().optional(),
//         body("location").isString().optional(),
//         body("slideShowImages")
//             .custom((value) => {
//                 if (value.urls !== undefined && value.urls.length > 0) return true;
//                 return false;
//             })
//             .optional(),
//         body("programs.data")
//             .isArray()
//             .custom((value) => {
//                 if (!value) return false;
//                 // make sure that every entry in the array has a description/url
//                 for (const i of value) {
//                     if (i === undefined || i.description === undefined || i.url === undefined) {
//                         return false;
//                     }
//                 }
//                 return true;
//             })
//             .optional(),
//         body("presentations.data")
//             .isArray()
//             .custom((value) => {
//                 if (!value) return false;
//                 // make sure that every entry in the array has a description/url
//                 for (const i of value) {
//                     if (i === undefined || i.description === undefined || i.url === undefined) {
//                         return false;
//                     }
//                 }
//                 return true;
//             })
//             .optional(),
//         body("abstracts.data")
//             .isArray()
//             .custom((value) => {
//                 if (!value) return false;
//                 // make sure that every entry in the array has a description/url
//                 for (const i of value) {
//                     if (i === undefined || i.description === undefined || i.url === undefined) {
//                         return false;
//                     }
//                 }
//                 return true;
//             })
//             .optional(),
//         body("video").isString().optional(),
//         body("theme").isString().optional(),
//         body("signUpLink").isString().optional(),
//         body("createdAt").custom((val) => val === undefined),
//         body("updatedAt").custom((val) => val === undefined),
//         body("id").custom((val) => val === undefined),
//         isValidated,
//     ],
//     async (req, res) => {
//         try {
//             const { id } = req.params;
//             // index must be a number
//             if (Number(id) < 0) return res.status(400).json({ message: "index must be a number" });

//             // success / failure upon edit
//             const entries = await edit(Number(id), req.body);
//             if (entries[0] === 1) return res.status(200).json({ message: "success" });
//             return res.status(501).json({ message: "unsuccessful edit" });
//         } catch (err) {
//             console.log(err);
//             return res.status(400).json({ message: err });
//         }
//     }
// );

module.exports = router;
