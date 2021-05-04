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
 * @returns {[object]} - Array of objects.
 */
async function getAll() {
    return Conference.findAll();
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
    if (body.slideShowImages !== undefined && body.slideShowImages.urls.length > 0) {
        return Conference.update(
            { body },
            {
                where: {
                    id: index,
                },
            }
        );
    }
    if (body !== undefined && body.slideShowImages === undefined) {
        return Conference.update(body, {
            where: {
                id: index,
            },
        });
    }
    return null;
}

module.exports = {
    getAll,
    create,
    edit,
};
