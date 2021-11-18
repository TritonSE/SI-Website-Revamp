/**
 * This file defines the Sequilize schema for memberships.
 *
 * @summary   defines schema for memberships DB.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");
const MembershipType = require("./membershipTypes");
const {PAYPAL_STATUS} = require("../services/paypal");

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
        payPalStatus: {
            type: Sequelize.STRING(50),
            defaultValue: PAYPAL_STATUS.PENDING,
            allowNull: false,
        },
        fName: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        mName: {
            type: Sequelize.STRING(100),
            allowNull: true,
        },
        lName: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING(15),
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING(750),
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);

Memberships.belongsTo(MembershipType, {
    foreignKey: "membersType",
});

module.exports = Memberships;
