/**
 * This file provides functions to modify the volunteer DB.
 * Allows for create capability.
 *
 * @summary   Services for volunteer --> create.
 * @author    Thomas Garry
 */
const VolunteerInterests = require("../models/volunteerInterests");
const CommitteeInterests = require("../models/committeeInterests");
const Volunteers = require("../models/volunteers");
const User = require("../models/userInfo");

/**
 * Creates emailList data. Assumption: required interests in data object
 *
 * @param {object} data - user data and interests
 * @returns {boolean} - created true or false.
 */
async function create(data) {
    try {
        const user = await User.create(data);
        const volunteer = await Volunteers.create({ info: user.id });
        let c;
        data.interests.forEach(async (i) => {
            c = await CommitteeInterests.create({ title: i, description: "cats" });
            await VolunteerInterests.create({ volunteerId: volunteer.id, interestId: c.id });
        });
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = {
    create,
};
