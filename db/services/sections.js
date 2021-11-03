/**
 * This file contains functions that modify the Newsletters table.
 * It provides functions for get, create, and update for this table.
 *
 * @summary   Defines services for the Newsletters table
 * @author    Amrit Kaur Singh
 */

const Sections = require("../models/sections");

/**
 * Returns all entries in the Newsletters table
 *
 * @returns {[object]} - Array of all entries in the table, ordered by descending year
 */
async function getSections(queryFilter = null) {
    return Sections.findAll({
        ...queryFilter,
        order: [["createdAt", "ASC"]],
    });
}

/**
 * Returns all entries in the Newsletters table
 *
 * @returns {[object]} - Array of all entries in the table, ordered by descending year
 */
async function getSpecificSectionById(sectionId) {
    return Sections.findOne({
        where: {
            id: sectionId,
        },
    });
}

/**
 * Creates a new entry in Newsletters table for data object
 *
 * @param {object} data - the Newsletter object to add to table
 * @returns {object} - Entry added to the table
 */
async function createSection(data) {
    return Sections.create(data);
}

/**
 * Edits the entry in Newsletters table with the specified id
 *
 * @param {*} id - id of the newsletter entry to update
 * @param {*} data - object to update table entry to
 * @returns {Array} - array with number of entries updated and the updated entry or null
 */
async function editSection(id, data) {
    // checks if update data is valid
    if (data !== undefined) {
        return Sections.update(data, {
            where: {
                id,
            },
        });
    }
    return null;
}

/**
 * Removes News and Events data.
 *
 * @param {int} index -
 * @returns {[object]} - Array of objects/null.
 */
async function deleteSection(sectionId) {
    return Sections.destroy({
        where: {
            id: sectionId,
        },
    });
}

module.exports = {
    getSections,
    getSpecificSectionById,
    createSection,
    editSection,
    deleteSection,
};
