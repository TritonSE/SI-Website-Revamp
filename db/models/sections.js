/**
 * This file defines the Sequelize schema for Sections, where each entry has an id,
 * page, title, content, and isPublished.
 *
 * @summary   Defines schema for Sections.
 * @author    Amrit Kaur Singh
 */

const Sequelize = require("sequelize");
const db = require("../configDB");

module.exports = db.define(
    "sections",
    {
        // if no primary key, default it will have a column called 'id' that will auto-increment an integer value
        page: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING(5000),
            allowNull: false,
        },
        isPublished: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
