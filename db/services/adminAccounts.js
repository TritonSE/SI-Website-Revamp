/**
 * This file provides functions to modify the adminAccounts DB.
 * Allows for .
 *
 * @summary   Services for adminAccounts -->
 * @author    Thomas Garry
 * @author    Navid Boloorian
 */
const crypto = require("crypto");
const AdminAccounts = require("../models/adminAccounts");

/**
 * Creates Admin data.
 *
 * @param {object}
 * @returns {[object]}
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
 * @returns {object}
 */
async function findOneUser(incomingEmail) {
    return AdminAccounts.findOne({ where: { email: incomingEmail } });
}

/**
 * Updates user in the DB.
 *
 * @param {object} updated_user - Updated user object
 * @returns {object}
 */
async function updateOneUser(updated_user) {
    return updated_user.save();
}

/**
 *
 */
async function getEmailByResetToken(resetToken) {
    return AdminAccounts.findOne({ where: { resetPasswordToken: resetToken } });
}

module.exports = {
    addAdmin,
    findOneUser,
    updateOneUser,
    getEmailByResetToken,
};
