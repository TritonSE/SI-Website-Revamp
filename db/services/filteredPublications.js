/**
 * File initializes methods that interface with the FilteredPublications table.
 * Methods include getAll, addOne, editOne and deleteOne.
 *
 * @summary   Initializes methods for FilteredPublications table.
 * @author    Navid Boloorian
 */

const FilteredPublications = require("../models/filteredPublications");

/**
 * Returns all of the values in the FilteredPublications table.
 *
 * @returns - all the values in the table
 */
async function getAll() {
    return FilteredPublications.findAll();
}

/**
 * Inserts specified value into FilteredPublications table.
 *
 * @param {*} data - value to be inserted
 * @returns - the json object that is inserted
 */
async function addOne(data) {
    return FilteredPublications.create(data);
}

/**
 * Deletes all values with the specified publicationId.
 *
 * @param {*} id - publication id to be deleted
 * @returns - json object once deleted
 */
async function deleteMany(id) {
    return FilteredPublications.destroy({
        where: {
            publicationId: id,
        },
    });
}

module.exports = {
    getAll,
    addOne,
    deleteMany,
};
