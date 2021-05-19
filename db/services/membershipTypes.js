/**
 * This file provides a function to get all MembershipTypes
 *
 * @summary   Services for MembershipTypes --> get
 * @author    Thomas Garry
 */
const MembershipTypes = require("../models/membershipTypes");

/**
 * Returns all membershipTypes in DB.
 *
 * @returns {[object]} - Array of objects.
 */
async function getAll() {
    return MembershipTypes.findAll();
}

/**
 * Returns if the cost is correct with the member.
 *
 * @returns {boolean} - True or False.
 */
async function checkCost(u_id, u_cost) {
    const memberType = await MembershipTypes.findOne({
        where: {
            id: u_id,
        },
    });
    return !!(memberType && Number(memberType.dataValues.cost) === u_cost);
}

module.exports = {
    getAll,
    checkCost,
};
