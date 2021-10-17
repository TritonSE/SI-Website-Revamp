/**
 * File creates publication routes. Routes allow for editing, inserting, and
 * returning of the values in the publication and filteredPublication tables.
 *
 * @summary   Initializes publication routes.
 * @author    Navid Boloorian
 */

const express = require("express");
const { body } = require("express-validator");
const { isValidated } = require("../middleware/validation");

const pubMethods = require("../db/services/publications");
const filteredMethods = require("../db/services/filteredPublications");
const ePubMethods = require("../db/services/ePubFilters");

const router = express.Router();

/**
 * Add publication into Publications table.
 *
 * @return {status} - 200 if successful, 400 if syntax error, 409 if feature error, 500 if other error
 */
router.post(
    "/",
    [
        body("title").isString(),
        body("author").isString(),
        body("filters")
            .isArray()
            .custom((val) => {
                if (!val) return false;

                // make sure that every entry in the array has a pdfLink/filterId
                for (const i of val) {
                    if (
                        i === undefined ||
                        i.pdfLink === undefined ||
                        i.filterId === undefined ||
                        i.pdfLink.length === 0 ||
                        i.filterId.length === 0
                    ) {
                        return false;
                    }
                }
                return true;
            }),
        body("feature").isBoolean().optional(),
        body("description").isString().optional(),
        body("imageLink").isString(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        // -1 is passed in here because the value is not being edited
        // so we don't need to check if it's already filtered
        // we pass in a value that is not in the table so it doesn't
        // mess up the count
        const numFeatured = await pubMethods.countFeatured(-1);

        if (req.body.feature && numFeatured >= 6) {
            return res.status(409).json({ message: "Already 6 features in table" });
        }

        if (req.body.filters.length < 1) {
            return res.status(400).json({ message: "Syntax error" });
        }

        try {
            // loops through passed-in filters and makes sure they are in the EPubFilters table
            for (let i = 0; i < req.body.filters.length; i++) {
                const filter = req.body.filters[i].filterId;

                const filterCount = await ePubMethods.filterCount(filter);

                // if there is less than 1 row found with the given filter name return 409
                if (filterCount < 1) {
                    return res.status(409).json({ message: "Not a valid filter value" });
                }
            }

            const publications = await pubMethods.addOne(req.body);
            const publicationId = publications.dataValues.id;

            // loop through filters and add them to the FilteredPublications table
            req.body.filters.forEach(async (value) => {
                const filter = value.filterId;
                const { pdfLink } = value;
                const filterId = await ePubMethods.filterId(filter);

                await filteredMethods.addOne({
                    filterId,
                    pdfLink,
                    publicationId,
                });
            });

            return res.status(200).json(publications);
        } catch (err) {
            return res.status(500).json({ message: "err" });
        }
    }
);

/**
 * Edit value of publication in Publications table.
 *
 * @return {status} - 200 if successful, 400 if syntax error, 409 if feature error, 500 if other error
 */
router.put(
    "/:id",
    [
        body("title").isString().optional(),
        body("author").isString().optional(),
        body("filters")
            .isArray()
            .custom((val) => {
                if (!val) return false;

                // make sure that every entry in the array has a pdfLink/filterId
                for (const i of val) {
                    if (
                        i === undefined ||
                        i.pdfLink === undefined ||
                        i.filterId === undefined ||
                        i.pdfLink.length === 0 ||
                        i.filterId.length === 0
                    ) {
                        return false;
                    }
                }
                return true;
            })
            .optional(),
        body("feature").isBoolean().optional(),
        body("description").isString().optional(),
        body("imageLink").isString().optional(),
        body("createdAt").custom((val) => val === undefined),
        body("updatedAt").custom((val) => val === undefined),
        body("id").custom((val) => val === undefined),
        isValidated,
    ],
    async (req, res) => {
        const { id } = req.params;

        // counts the number of featured publications excluding the publication with id
        const numFeatured = await pubMethods.countFeatured(id);

        // check if id parameter exists in Publications table
        const idExists = await pubMethods.idExists(id);

        if (!idExists) {
            return res.status(400).json({ message: "ID does not exist in table" });
        }

        if (req.body.feature && numFeatured >= 6) {
            return res.status(409).json({ message: "Already 6 features in table" });
        }

        if (Number(id) < 0) return res.status(400).json({ message: "Id must be a number" });

        try {
            const publicationId = id;

            if (req.body.filters !== undefined && req.body.filters.length >= 1) {
                // deletes publications associated with publicationId in FilteredPublications table
                filteredMethods.deleteMany(publicationId);

                // loops through passed-in filters and makes sure they are in the EPubFilters table
                for (let i = 0; i < req.body.filters.length; i++) {
                    const filter = req.body.filters[i].filterId;
                    const filterCount = await ePubMethods.filterCount(filter);

                    if (filterCount < 1) {
                        return res.status(409).json({ message: "Not a valid filter value" });
                    }
                }
            }

            const publications = await pubMethods.editOne(id, req.body);

            if (req.body.filters !== undefined && req.body.filters.length >= 1) {
                // loop through filters and add them to the FilteredPublications table
                req.body.filters.forEach(async (value) => {
                    const filter = value.filterId;
                    const { pdfLink } = value;
                    const filterId = await ePubMethods.filterId(filter);

                    await filteredMethods.addOne({
                        filterId,
                        pdfLink,
                        publicationId,
                    });
                });
            }

            return res.status(200).json(publications);
        } catch (err) {
            console.log(req.body);
            return res.status(500).json({ message: err });
        }
    }
);

/**
 * Get all publications in Publications table.
 *
 * @return {status} - 200 if successful, 500 otherwise
 */
router.get("/", [isValidated], async (req, res) => {
    try {
        const publications = await pubMethods.getAll();
        return res.status(200).json(publications);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
