/**
 * This file contains functions that modify the Newsletters table.
 * It provides functions for get, create, and update for this table.
 *
 * @summary   Defines services for the Newsletters table
 * @author    Dhanush Nanjunda Reddy
 */

const Newsletters = require("../models/newsletters");

/**
 * Returns all entries in the Newsletters table
 *
 * @returns {[object]} - Array of all entries in the table, ordered by descending year
 */
async function getAll() {
    return Newsletters.findAll({
        order: [
            ["year", "DESC"],
            ["volume", "DESC"],
            ["number", "DESC"],
        ],
    });
}

/**
 * Creates a new entry in Newsletters table for data object
 *
 * @param {object} data - the Newsletter object to add to table
 * @returns {object} - Entry added to the table
 */
async function addOne(data) {
    return Newsletters.create(data);
}

/**
 * Edits the entry in Newsletters table with the specified id
 *
 * @param {*} id - id of the newsletter entry to update
 * @param {*} data - object to update table entry to
 * @returns {Array} - array with number of entries updated and the updated entry or null
 */
async function editOne(id, data) {
    // checks if update data is valid
    if (data !== undefined) {
        return Newsletters.update(data, {
            where: {
                id,
            },
        });
    }
    return null;
}

module.exports = {
    getAll,
    addOne,
    editOne,
};
