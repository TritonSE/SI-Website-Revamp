/**
 * This file provides a function to get all committeeInterests
 *
 * @summary   Services for committeeInterests --> get
 * @author    Thomas Garry
 */
const CommitteeInterests = require("../models/committeeInterests");

/**
 * Returns all membershipTypes in DB.
 *
 * @returns {[object]} - Array of objects.
 */
async function getCommittees() {
    return CommitteeInterests.findAll();
}

module.exports = {
    getCommittees,
};
