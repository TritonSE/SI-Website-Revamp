/**
 * File populates ePubFilters table with all valid filter names.
 * EPubFilters is static and likely won't be changed after this.
 *
 * @summary   Populates ePubFilters table.
 * @author    Navid Boloorian
 */

const ePubFilters = require("../../db/models/ePubFilters");

module.exports = async () => {
    await Promise.all([
        // make dummy data, and make sure to disable logging to reduce clutter
        ePubFilters.create({ title: "Bibliographies", id: 1 }, { logging: false }),
        ePubFilters.create({ title: "Conferences", id: 2 }, { logging: false }),
        ePubFilters.create({ title: "Articles", id: 3 }, { logging: false }),
        ePubFilters.create({ title: "Brochures", id: 4 }, { logging: false }),
        ePubFilters.create({ title: "Chinese Translations", id: 5 }, { logging: false }),
        ePubFilters.create({ title: "English Translations", id: 6 }, { logging: false }),
        ePubFilters.create({ title: "French Translations", id: 7 }, { logging: false }),
        ePubFilters.create({ title: "German Translations", id: 8 }, { logging: false }),
        ePubFilters.create({ title: "Spanish Translations", id: 9 }, { logging: false }),
    ])
        .then(() => {
            // successfull population
            console.log("Finished ePubFilters");
        })
        .catch((err) => {
            // some error occurred
            console.error(`ePubFilters: ${err}`);
        });
};
