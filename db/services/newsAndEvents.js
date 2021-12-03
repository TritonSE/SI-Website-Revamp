/**
 * This file provides functions to modify the News and Events DB.
 * Allows for get, remove, create, and edit capabilities.
 *
 * @summary   Services for newsAndEvents --> get, remove, create and edit.
 */
const newsAndEvents = require("../models/newsAndEvents");

/**
 * Returns all News and Events in DB, in descending order of last edit date (i.e., slides that
 * were more recently updated will be near the front).
 *
 * @returns {[object]} - Array of objects.
 */
async function getAll() {
    return newsAndEvents.findAll({
        order: [
            ["updatedAt", "DESC"]
        ],
    });
}

/**
 * Removes News and Events data.
 *
 * @param {int} index -
 * @returns {[object]} - Array of objects/null.
 */
async function remove(index) {
    return newsAndEvents.destroy({
        where: {
            id: index,
        },
    });
}

/**
 * Creates NewsAndEvents data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function create(data) {
    return newsAndEvents.create(data);
}

/**
 * Edits News and Events data.
 *
 * @param {int} index -
 * @param {object} data -
 * @returns {[object]} - Array of objects/null.
 */
async function edit(index, body) {
    return newsAndEvents.update(body, {
        where: {
            id: index,
        },
    });
}

module.exports = {
    getAll,
    remove,
    create,
    edit,
};
