/**
 * File populates FilteredPublications table with entries, each entry matching a book entry
 * from Publications table to a filter in the EPubFilters table.
 *
 * @summary   Populates FilteredPublications table.
 * @author    Amrit Singh
 */

const FilteredPublications = require("../../db/models/filteredPublications");

module.exports = async () => {
    await Promise.all([
        // bibliographies
        FilteredPublications.create({ publicationId: "1", filterId: "1" }, { logging: false }),
        FilteredPublications.create({ publicationId: "2", filterId: "1" }, { logging: false }),
        FilteredPublications.create({ publicationId: "3", filterId: "1" }, { logging: false }),
        FilteredPublications.create({ publicationId: "4", filterId: "1" }, { logging: false }),
        FilteredPublications.create({ publicationId: "5", filterId: "1" }, { logging: false }),

        // conferences
        FilteredPublications.create({ publicationId: "6", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "7", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "8", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "9", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "10", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "11", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "12", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "13", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "14", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "15", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "16", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "17", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "18", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "19", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "20", filterId: "2" }, { logging: false }),
        FilteredPublications.create({ publicationId: "21", filterId: "2" }, { logging: false }),

        // brochures
        FilteredPublications.create({ publicationId: "22", filterId: "4" }, { logging: false }),
        FilteredPublications.create({ publicationId: "23", filterId: "4" }, { logging: false }),
        FilteredPublications.create({ publicationId: "24", filterId: "4" }, { logging: false }),
        FilteredPublications.create({ publicationId: "25", filterId: "4" }, { logging: false }),
        FilteredPublications.create({ publicationId: "26", filterId: "4" }, { logging: false }),
        FilteredPublications.create({ publicationId: "27", filterId: "4" }, { logging: false }),
        FilteredPublications.create({ publicationId: "28", filterId: "4" }, { logging: false }),
        FilteredPublications.create({ publicationId: "29", filterId: "4" }, { logging: false }),
        FilteredPublications.create({ publicationId: "30", filterId: "4" }, { logging: false }),

        // Chinese translations
        FilteredPublications.create({ publicationId: "31", filterId: "5" }, { logging: false }),

        // English translations
        FilteredPublications.create({ publicationId: "32", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "33", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "34", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "35", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "36", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "37", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "38", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "39", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "40", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "41", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "42", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "43", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "44", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "45", filterId: "6" }, { logging: false }),
        FilteredPublications.create({ publicationId: "46", filterId: "6" }, { logging: false }),

        // French translations
        FilteredPublications.create({ publicationId: "47", filterId: "7" }, { logging: false }),

        // German translations
        FilteredPublications.create({ publicationId: "48", filterId: "7" }, { logging: false }),
        FilteredPublications.create({ publicationId: "49", filterId: "7" }, { logging: false }),
        FilteredPublications.create({ publicationId: "50", filterId: "7" }, { logging: false }),
        FilteredPublications.create({ publicationId: "51", filterId: "7" }, { logging: false }),
        FilteredPublications.create({ publicationId: "52", filterId: "7" }, { logging: false }),
        FilteredPublications.create({ publicationId: "53", filterId: "7" }, { logging: false }),
        FilteredPublications.create({ publicationId: "54", filterId: "7" }, { logging: false }),

        // Spanish translations
        FilteredPublications.create({ publicationId: "55", filterId: "8" }, { logging: false }),
    ])
        .then(() => {
            // successfull population
            console.log("Finished FilteredPublications");
        })
        .catch((err) => {
            // some error occurred
            console.error(`FilteredPublications: ${err}`);
        });
};
