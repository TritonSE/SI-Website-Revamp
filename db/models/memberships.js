/**
 * This file defines the Sequilize schema for memberships.
 *
 * @summary   defines schema for memberships DB.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");
const UserInformation = require("./userInfo");
const MembershipType = require("./membershipTypes");

const Memberships = db.define(
    "Memberships",
    {
        // column called 'id' will auto-increment an integer value
        isNewMember: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        affiliatedOrgs: {
            type: Sequelize.STRING(500),
            allowNull: true,
        },
        totalPaid: {
            type: Sequelize.DECIMAL(4, 2),
            allowNull: false,
        },
        payPalTransactionId: {
            type: Sequelize.CHAR(17),
            unique: true,
            allowNull: false,
        },
        payPalVerified: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);

Memberships.belongsTo(UserInformation, {
    foreignKey: "info",
});

Memberships.belongsTo(MembershipType, {
    foreignKey: "membersType",
});

module.exports = Memberships;
