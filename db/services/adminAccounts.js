/**
 * This file provides functions to modify the adminAccounts DB.
 * Allows for .
 *
 * @summary   Services for adminAccounts -->
 * @author    Thomas Garry
 * @author    Navid Boloorian
 */
const AdminAccounts = require("../models/adminAccounts");
const crypto = require("crypto");

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
async function getResetPasswordToken(user) {
    const resetToken = crypto.randomBytes(20).toString("hex");

    user.resetPasswordToken = crypto.
    createHash("sha256").update(resetToken).
    digest("hex");

    user.resetPassworedExpire = Date.now() + 120 * (60 * 10000);

    return {resetToken, user};
}

module.exports = {
    addAdmin,
    findOneUser,
    updateOneUser,
    getResetPasswordToken
};
