/**
 * This file defines the Sequilize schema for emailList.
 *
 * @summary   defines schema for emailList.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "emailList",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        info: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
