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
 * Returns all of the values in the Publications table in alphabetical order by title.
 *
 * @returns - all the values in the table
 */
async function getAll(queryFilter = null) {
    return Publications.findAll({
        ...queryFilter,
        order: [["title", "ASC"]],
    });
}

/**
 * Returns all of the values in the Publications table that are featured, in alphabetical order
 * by title.
 *
 * @returns - all the values in the table
 */
 async function getFeatured() {
    return Publications.findAll({
        where: { feature: true},
        order: [["title", "ASC"]],
    });
}

/**
 * Returns a single publications using its unique id. 
 *
 * @returns {JSON}- corresponding publication
 */
 async function getPublicationById(id) {
    return Publications.findOne({
        where: { id: id},
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

/**
 * Returns whether or not the publication with the corresponding id
 * could be deleted from the Publications table. 
 *
 * @param {int} id - the id of the publication to delete
 * @returns {boolean} - true if successful delete, false if failure 
 */
 async function deleteById(id) {
    return Publications.destroy({
        where: {
            id,
        },
    }).then((count) => {
        if (count === 0) {
            return false;
        }
        return true;
    }).catch((err) => {
        console.log(err);
        return false; 
    });
}

module.exports = {
    getAll,
    getFeatured,
    getPublicationById,
    addOne,
    editOne,
    countFeatured,
    idExists,
    deleteById
};
