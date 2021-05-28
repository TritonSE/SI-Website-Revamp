/**
 * This file provides functions to modify the adminAccounts DB.
 * Allows for .
 *
 * @summary   Services for adminAccounts -->
 * @author    Thomas Garry
 */
const AdminAccounts = require("../models/adminAccounts");

/**
 * Creates Admin data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function addAdmin(data) {
    try {
        return AdminAccounts.create(data);
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    addAdmin,
};
