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

const MAX_NUM_FEATURE_PUBS = 6; // maximum number of publications that can be featured

// async function validateFilterIds(req) {
//     for (let i = 0; i < req.body.filters.length; i++) {
//         const filter = req.body.filters[i];
//         const filterCount = await ePubMethods.filterCount(filter);

//         if (filterCount < 1) {
//             return false;
//         }
//     }
//     return true;
// }

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
                    if (i === undefined || Number.isNaN(i)) {
                        return false;
                    }
                }
                return true;
            }),
        body("feature").isBoolean().optional(),
        body("description").isString().optional(),
        body("imageLink").isString(),
        body("pdfLink").isString(),
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

        if (req.body.feature && numFeatured >= MAX_NUM_FEATURE_PUBS) {
            return res.status(409).json({
                message: `Already ${MAX_NUM_FEATURE_PUBS} publications featured in table`,
            });
        }

        if (req.body.filters.length < 1) {
            return res.status(400).json({ message: "At least one filter must be given." });
        }

        try {
            // loops through passed-in filters and makes sure they are in the EPubFilters table
            // const isValidFilters = validateFilterIds(req);
            // if(!isValidFilters) return res.status(409).json({ message: "At least one filter id is invalid." });

            // for (let i = 0; i < req.body.filters.length; i++) {
            //     const filter = req.body.filters[i];

            //     const filterCount = await ePubMethods.filterCount(filter);

            //     // if there is less than 1 row found with the given filter name return 409
            //     if (filterCount < 1) {
            //         return res.status(409).json({ message: "Not a valid filter value" });
            //     }
            // }

            const publications = await pubMethods.addOne(req.body);
            const publicationId = publications.dataValues.id;

            // loop through filters and add them to the FilteredPublications table
            await Promise.allSettled([
                req.body.filters.map((filterId) =>
                    filteredMethods.addOne({
                        filterId,
                        publicationId,
                    })
                ),
            ]);

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
                    if (i === undefined || Number.isNaN(i)) {
                        return false;
                    }
                }
                return true;
            })
            .optional(),
        body("feature").isBoolean().optional(),
        body("description").isString().optional(),
        body("imageLink").isString().optional(),
        body("pdfLink").isString().optional(),
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

        if (req.body.feature && numFeatured >= MAX_NUM_FEATURE_PUBS) {
            return res
                .status(409)
                .json({ message: `Already ${MAX_NUM_FEATURE_PUBS} features in table` });
        }

        if (Number(id) < 0) return res.status(400).json({ message: "Id must be a number" });

        try {
            const publicationId = id;

            if (req.body.filters !== undefined && req.body.filters.length >= 1) {
                // deletes publications associated with publicationId in FilteredPublications table
                filteredMethods.deleteMany(publicationId);

                // const isValidFilters = validateFilterIds(req);
                // if(!isValidFilters) return res.status(409).json({ message: "At least one filter id is invalid." });

                // loops through passed-in filters and makes sure they are in the EPubFilters table
                // for (let i = 0; i < req.body.filters.length; i++) {
                //     const filter = req.body.filters[i];
                //     const filterCount = await ePubMethods.filterCount(filter);

                //     if (filterCount < 1) {
                //         return res.status(409).json({ message: "Not a valid filter value" });
                //     }
                // }
            }

            await pubMethods.editOne(id, req.body);

            if (req.body.filters !== undefined && req.body.filters.length >= 1) {
                // loop through filters and add them to the FilteredPublications table
                await Promise.allSettled([
                    req.body.filters.map((filterId) =>
                        filteredMethods.addOne({
                            filterId,
                            publicationId,
                        })
                    ),
                ]);
            }

            return res.status(200).json({ message: "success" });
        } catch (err) {
            console.log(req.body);
            return res.status(500).json({ message: err });
        }
    }
);

/**
 * Get all publications in Publications table. If optional query param is
 * passed ('filterId'), it will only return the subset of Publications that
 * have that filter attached to it.
 *
 * @return {status} - 200 if successful, 500 otherwise
 */
router.get("/", [isValidated], async (req, res) => {
    try {
        const filterId = req.query.filterId || null;

        // default: get all publications
        let queryFilter = null;

        // retrive publications with a specific filter
        if (filterId) {
            let pubIds = await filteredMethods.getAllEntriesWithFilter(filterId);
            pubIds = pubIds.map((val) => val["publicationId"]);

            queryFilter = {
                where: { id: pubIds },
            };
        }

        const publications = await pubMethods.getAll(queryFilter);

        // tag any associated filters to each publication
        const pubFilters = await Promise.allSettled(
            publications.map((pub) => filteredMethods.getAllFiltersForPub(pub["id"]))
        );

        // set filters to each publication for response
        for (let i = 0; i < publications.length; i++) {
            // Successfull fetch
            if (pubFilters[i]["status"] === "fulfilled") {
                publications[i]["filters"] = pubFilters[i]["value"];

                // Unsuccessful
            } else {
                console.log(
                    `Could not get filters for Publication Id ${publications["id"]}. Reason: ${pubFilters[i]["reason"]}`
                );
                publications[i]["filters"] = [];
            }
        }

        return res.status(200).json(publications);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Get all featured publications from Publications table.
 *
 * @return {status} - 200 if successful, 500 otherwise
 */
router.get("/featured", [isValidated], async (req, res) => {
    try {
        const featuredPubs = await pubMethods.getFeatured();
        return res.status(200).json(featuredPubs);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Get all filters from EPubFilters table.
 *
 * @return {status} - 200 if successful, 500 otherwise
 */
router.get("/epubfilters", [isValidated], async (req, res) => {
    try {
        const filters = await ePubMethods.getAllFilters();
        return res.status(200).json(filters);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Get a particular publication from Publications table, indicated
 * by its unique id.
 *
 * @return {status} - 200 if successful, 500 otherwise
 */
router.get("/:id", [isValidated], async (req, res) => {
    try {
        const { id } = req.params;

        if (Number(id) < 0) return res.status(400).json({ message: "Id must be a number" });

        const publication = await pubMethods.getPublicationById(id);
        publication["filters"] = await filteredMethods.getAllFiltersForPub(id);

        return res.status(200).json(publication);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

/**
 * Delete a particular publication by its unique id. This automatically
 * will also delete any associated filters in the relevent tables.
 *
 * @return {status} - 200 if successful, 500 otherwise
 */
router.delete("/:id", [isValidated], async (req, res) => {
    try {
        const { id } = req.params;

        if (Number(id) < 0) return res.status(400).json({ message: "Id must be a number" });

        const deleteFiltersStatus = await filteredMethods.deleteMany(id);
        const deletePubStatus = await pubMethods.deleteById(id);

        if (deletePubStatus && deleteFiltersStatus)
            return res.status(200).json({ message: "Success" });

        return res.status(200).json({
            message: "Deletion encountered a failure at some point.",
            isPublicationDeleted: deletePubStatus,
            areFiltersDeleted: deleteFiltersStatus,
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
});

module.exports = router;
