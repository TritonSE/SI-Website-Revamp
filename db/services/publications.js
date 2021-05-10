/**
 * File initializes methods that interface with the Publications table.
 * Methods include getAll, addOne, editOne, countFeatured and idExists.
 *
 * @summary   Initializes methods for Publications table.
 * @author    Navid Boloorian
 */

const { Op } = require("sequelize");
const Publications = require("../models/publications");

/**
 * Returns all of the values in the Publications table in newest-first order.
 *
 * @returns - all the values in the table
 */
async function getAll() {
    return Publications.findAll({
        order: [["createdAt", "DESC"]],
    });
}

/**
 * Inserts specified value into Publications table.
 *
 * @param {*} data - value to be inserted
 * @returns - the json object that is inserted
 */
async function addOne(data) {
    return Publications.create(data);
}

/**
 * Updates the field with the specified idea with the value in data.
 *
 * @param {*} id - the id of the field to be updated
 * @param {*} data - the new data to be added
 * @returns - the json object once updated, null if data is undefined
 */
async function editOne(id, data) {
    if (data !== undefined) {
        return Publications.update(data, {
            where: {
                id,
            },
        });
    }

    return null;
}

/**
 * Counts the number of featured values in the table.
 *
 * @param {*} id - used to exclude items when editing
 * @returns - the number of featured values
 */
async function countFeatured(id) {
    // in instances where edit is called, we don't want to the value being edited
    // to count itself against the featured total so we exclude the pubId
    // in cases where we are not updating, pass -1 in for id
    const pubId = id;

    return Publications.count({
        where: {
            feature: true,

            // "WHERE id != pubId"
            id: {
                [Op.not]: pubId,
            },
        },
    });
}

/**
 * Returns whether or not the id exists in the Publications table.
 *
 * @param {*} id - the id to be checked for existence
 * @returns - true if id exists, false otherwise
 */
async function idExists(id) {
    return Publications.count({
        where: {
            id,
        },
    }).then((count) => {
        if (count === 1) {
            return true;
        }

        return false;
    });
}

module.exports = {
    getAll,
    addOne,
    editOne,
    countFeatured,
    idExists,
};
