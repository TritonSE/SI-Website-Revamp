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
 * Returns all entries in FilteredPublications with that have
 * a particular 'filterId' value.
 *
 * @returns - entries matching 'filterId'
 */
async function getAllEntriesWithFilter(filterId) {
    return FilteredPublications.findAll({
        where: { filterId },
        attributes: ["publicationId"],
    });
}

/**
 * Returns all entries in FilteredPublications with that have
 * a particular 'publicationId' value.
 *
 * @returns {[JSON]}- 'filterId' of entries matching 'publicationId'
 */
async function getAllFiltersForPub(pubId) {
    return FilteredPublications.findAll({
        where: { publicationId: pubId },
        attributes: ["filterId"],
    });
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
 * @returns {boolean}- true if successful delete, false if failure
 */
async function deleteMany(id) {
    return FilteredPublications.destroy({
        where: {
            publicationId: id,
        },
    })
        .then((count) => {
            if (count === 0) {
                return false;
            }
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

module.exports = {
    getAll,
    getAllEntriesWithFilter,
    getAllFiltersForPub,
    addOne,
    deleteMany,
};
