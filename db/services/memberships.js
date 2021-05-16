/**
 * This file provides functions to modify the memberships DB.
 * Allows for create capability.
 *
 * @summary   Services for emailList --> addUser.
 * @author    Thomas Garry
 */
const Memberships = require("../models/memberships");

/**
 * Creates Memberships data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function addMember(data) {
    return Memberships.create(data);
}

module.exports = {
    addMember,
};
