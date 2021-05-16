/**
 * This file provides functions to modify the emailList DB.
 * Allows for create capability.
 *
 * @summary   Services for emailList --> addUser.
 * @author    Thomas Garry
 */
const EmailList = require("../models/emailList");

/**
 * Creates emailList data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function addUser(data) {
    return EmailList.create(data);
}

module.exports = {
    addUser,
};
