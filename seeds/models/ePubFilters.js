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
        ePubFilters.create({ title: "french" }, { logging: false }),
        ePubFilters.create({ title: "english" }, { logging: false }),
        ePubFilters.create({ title: "japanese" }, { logging: false }),
        ePubFilters.create({ title: "persian" }, { logging: false }),
        ePubFilters.create({ title: "spanish" }, { logging: false }),
        ePubFilters.create({ title: "chinese" }, { logging: false }),
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
