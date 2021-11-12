/**
 * This file provides functions to modify the Conferences DB.
 * Allows for get, create, and edit capabilities.
 *
 * @summary   Services for conferences --> get, create and edit.
 * @author    Thomas Garry
 */
const Conference = require("../models/conference");

/**
 * Returns all conferences in DB.
 *
 * @returns {[object]} - Array of objects in decreasing order of confNum
 */
async function getAll() {
    return Conference.findAll({ order: [["confNum", "DESC"]] });
}

/**
 * Creates Conference data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function create(data) {
    return Conference.create(data);
}

/**
 * Edits Conference data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects / null.
 */
async function edit(index, body) {
    // make sure slideShowImages array is not empty
    if (body !== undefined) {
        return Conference.update(body, {
            where: {
                id: index,
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
 async function remove(index) {
    return Conference.destroy({
        where: {
            id: index,
        },
    });
}

module.exports = {
    getAll,
    create,
    edit,
    remove
};
