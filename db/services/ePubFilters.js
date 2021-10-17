/**
 * File initializes methods that interface with the ePubFilters table.
 * Methods include getFilterId and filterCount.
 *
 * @summary   Initializes methods for ePubFilters table.
 * @author    Navid Boloorian
 */

const ePubFilters = require("../models/ePubFilters");

/**
 * Returns the id of the specified filter.
 *
 * @param {*} filter - the filter whose id will be returned
 * @returns - the id of the filter
 */
async function filterId(filter) {
    const filterInfo = await ePubFilters.findAndCountAll({
        where: {
            title: filter,
        },
        attributes: ["id"],
    });

    return filterInfo.rows[0].dataValues.id;
}

/**
 * Returns the number of times a filter shows up in table.
 * Method is used to make sure that a valid filter is being passed-in.
 *
 * @param {*} filter - the filter whose existence is checked
 * @returns - the number of times a filter is found (should be 1)
 */
async function filterCount(filter) {
    return ePubFilters.count({
        where: {
            id: filter,
        },
    });
}

/**
 * Returns all filters available in ePubFilters table in DB, sorted in ascending order
 * by title. 
 *
 * @returns {[JSON]}- JSON entries of all filters in ePubFilters table
 */
 async function getAllFilters() {
    return ePubFilters.findAll({ order: [['title', 'ASC']]});
}

module.exports = {
    filterId,
    filterCount,
    getAllFilters
};
