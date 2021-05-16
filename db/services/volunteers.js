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
 * Creates volunteer data. This will check
 *
 *
 * @param {object} data - user data and interests
 * @returns {boolean} - created true or false.
 */
async function create(data) {
    try {
        if (data === undefined || data.interests === undefined) return false;

        // validate every interest
        const committeeCount = await CommitteeInterests.count({});
        // check every passed in interest to be in between 0 and the committeCount max.
        for (const i of data.interests) {
            if (committeeCount < Number(i) || Number(i) <= 0) return false;
        }

        // validated! Create user/volunteer
        const user = await User.create(data);
        const volunteer = await Volunteers.create({ info: user.id });
        // create every interest for this volunteer
        data.interests.forEach(async (i) => {
            await VolunteerInterests.create({ volunteerId: volunteer.id, interestId: i });
        });
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = {
    create,
};
