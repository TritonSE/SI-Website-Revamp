/**
 * This file provides functions to modify the execCommittees DB.
 * Allows for create capability.
 *
 * @summary   Services for execCommittees --> addExecCommittee.
 * @author    Thomas Garry, Amrit Singh
 */
const ExecCommittee = require("../models/execCommittee");

/**
 * Creates execCommittee data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function addEntry(data) {
    return ExecCommittee.create(data);
}

/**
 * Returns all executive committes in DB grouped by their start year.
 *
 * Assumes that the startYear is unique to an executive committee (i.e., no two committees have the same start year).
 *
 * @returns {[{ startYear, endYear, data }]} - Array of objects.
 */
async function getAll() {
    // results returned in descending start year
    return ExecCommittee.findAll({
        attributes: ["startYear"],
        group: ["startYear"],
        order: [["startYear", "DESC"]],
    }).then(async (startYears) => {
        const groupedResults = [];
        await Promise.all(
            startYears.map(async (val) => {
                await ExecCommittee.findAll({
                    where: { startYear: val["startYear"] },
                    order: [["rank", "ASC"]],
                })
                    .then((results) => {
                        // add grouped entries into final response
                        groupedResults.push({
                            startYear: val["startYear"],
                            endYear: results[0]["endYear"],
                            data: results,
                        });
                    })
                    .catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
            })
        );
        return groupedResults;
    });
}

/**
 * Retrieves all entries from a specific start year. All entries are returned in
 * ascending rank order.
 *
 * @param {int} startYear - query value
 * @returns {[JSON]} - Array of JSON entries fullfilling that startYear.
 */
async function getSpecificCommittee(startYear) {
    return ExecCommittee.findAll({ where: { startYear }, order: [["rank", "ASC"]] });
}

/**
 * Edits Branches and Chapters data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects/null.
 */
async function editEntry(index, body) {
    return ExecCommittee.update(body, {
        where: {
            id: index,
        },
    });
}

/**
 * Deletes a particular entry using its id.
 *
 * @param {int} index - entry to delete
 */
async function deleteById(index) {
    return ExecCommittee.destroy({
        where: {
            id: index,
        },
    });
}

/**
 * Deletes a particular committee by specifiying its start year.
 *
 * @param {int} startYear - entries whose startYear matches will be deleted
 */
async function deleteCommittee(startYear) {
    return ExecCommittee.destroy({
        where: {
            startYear,
        },
    });
}

module.exports = {
    getAll,
    getSpecificCommittee,
    addEntry,
    editEntry,
    deleteById,
    deleteCommittee,
};
