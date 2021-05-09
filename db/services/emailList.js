/**
 * This file provides functions to modify the emailList DB.
 * Allows for create capability.
 *
 * @summary   Services for emailList --> create.
 * @author    Thomas Garry
 */
const EmailList = require("../models/emailList");
const User = require("../models/userInfo");

/**
 * Creates emailList data.
 *
 * @param {object} data -
 * @returns {[object]} - Array of objects.
 */
async function create(data) {
    const user = await User.create(data);
    return EmailList.create({ info: user.id });
}

module.exports = {
    create,
};
