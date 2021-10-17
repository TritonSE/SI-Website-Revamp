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
        FilteredPublications.create(
            { pdfLink: "https://www.google.com/", publicationId: "1", filterId: "1" },
            { logging: false }
        ),
        FilteredPublications.create(
            { pdfLink: "https://www.google.com/", publicationId: "2", filterId: "2" },
            { logging: false }
        ),
        FilteredPublications.create(
            { pdfLink: "https://www.google.com/", publicationId: "3", filterId: "1" },
            { logging: false }
        ),
        FilteredPublications.create(
            { pdfLink: "https://www.google.com/", publicationId: "4", filterId: "3" },
            { logging: false }
        ),
        FilteredPublications.create(
            { pdfLink: "https://www.google.com/", publicationId: "5", filterId: "1" },
            { logging: false }
        ),
        FilteredPublications.create(
            { pdfLink: "https://www.google.com/", publicationId: "6", filterId: "3" },
            { logging: false }
        ),
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
