/**
 * This file provides functions to modify the Branches and Chapters DB.
 * Allows for get, create, and edit capabilities.
 *
 * @summary   Services for branchesAndChapters --> get, create and edit.
 */
const branchesAndChapters = require("../models/branchesAndChapters");

/**
 * Returns all Branches and Chapters in DB.
 *
 * @returns {[object]} - Array of objects.
 */
async function getAll() {
    return branchesAndChapters.findAll();
}

/**
 * Creates Branches and Chapters data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function create(data) {
    return branchesAndChapters.create(data);
}

/**
 * Edits Branches and Chapters data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects/null.
 */
async function edit(index, body) {
    return branchesAndChapters.update(body, {
        where: {
            id: index,
        },
    });
}

module.exports = {
    getAll,
    create,
    edit,
};
