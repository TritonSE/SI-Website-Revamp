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

/**
 * Finds user in the DB.
 *
 * @param {string} incomingEmail - User email to be found
 * @returns {object/boolean} - Order object / null
 */
async function findOneUser(incomingEmail) {
    return AdminAccounts.findOne({ where: { email: incomingEmail } });
}

/**
 * Updates user in the DB.
 *
 * @param {object} updated_user - Updated user object
 * @returns {object/boolean} - Updated object
 */
async function updateOneUser(updated_user) {
    return updated_user.save();
}

module.exports = {
    addAdmin,
    findOneUser,
    updateOneUser,
};
