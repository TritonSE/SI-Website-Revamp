/**
 * This file defines the Sequilize schema for emailList.
 *
 * @summary   defines schema for emailList.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

const EmailList = db.define(
    "emailList",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
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
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);

module.exports = EmailList;
