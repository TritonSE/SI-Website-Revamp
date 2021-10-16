/**
 * This file provides functions to modify the execCommittees DB.
 * Allows for create capability.
 *
 * @summary   Services for execCommittees --> addExecCommittee.
 * @author    Thomas Garry
 */
const ExecCommittee = require("../models/execCommittee");

/**
 * Creates execCommittee data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function addExecCommittee(data) {
    return ExecCommittee.create(data);
}

/**
 * Returns all execCommittees in DB.
 *
 * @returns {[object]} - Array of objects.
 */
async function getAll() {
    return ExecCommittee.findAll();
}

module.exports = {
    addExecCommittee,
    getAll,
};
