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
        ePubFilters.create({ title: "Conferences" }, { logging: false }),
        ePubFilters.create({ title: "Bibliographies" }, { logging: false }),
        ePubFilters.create({ title: "Articles" }, { logging: false }),
        ePubFilters.create({ title: "Brochures" }, { logging: false }),
        ePubFilters.create({ title: "Chinese Translations" }, { logging: false }),
        ePubFilters.create({ title: "English Translations" }, { logging: false }),
        ePubFilters.create({ title: "French Translations" }, { logging: false }),
        ePubFilters.create({ title: "German Translations" }, { logging: false }),
        ePubFilters.create({ title: "Spanish Translations" }, { logging: false }),
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
