/**
 * This file provides functions to modify the userInfo DB.
 * Allows for create capability.
 *
 * @summary   Services for userInfo --> createUser.
 * @author    Thomas Garry
 */
const UserInfo = require("../models/userInfo");

/**
 * Creates userInfo data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function createUser(data) {
    return UserInfo.create(data);
}

module.exports = {
    createUser,
};
