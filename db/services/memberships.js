/**
 * This file provides functions to modify the memberships DB.
 * Allows for create capability.
 *
 * @summary   Services for emailList --> addUser.
 * @author    Thomas Garry
 */
const Memberships = require("../models/memberships");
const MembershipshipTypes = require("../models/membershipTypes");

/**
 * Creates Memberships data.
 *
 * @param {object} data -
 * @returns {object} - A single Member or null.
 */
async function addMember(data) {
    const memberTypeCount = await MembershipshipTypes.count({});
    if (data.membershipType > 0 && data.membershipType < memberTypeCount) {
        // had to redefine the name
        data["membersType"] = data.membershipType;
        return Memberships.create(data);
    }
    return null;
}

module.exports = {
    addMember,
};
