/**
 * File initializes "FilteredPublications" table schema.
 * Table is used to store information for publication filtering.
 *
 * @summary   Initializes "FilteredPublications" table schema.
 * @author    Navid Boloorian
 */

const Sequelize = require("sequelize");
const db = require("../configDB");

const Publications = require("./publications");
const EPubFilters = require("./ePubFilters");

const FilteredPublications = db.define(
    // table name
    "FilteredPublications",
    {
        // id field column by default

        pdfLink: {
            type: Sequelize.TEXT("tiny"),
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);

// creates an association between Publications and FilteredPublications
// new "publicationId" column in table
FilteredPublications.belongsTo(Publications, {
    foreignKey: "publicationId",
});

// creates an association between Publications and EPubFilters
// new "filterId" column in table
FilteredPublications.belongsTo(EPubFilters, {
    foreignKey: "filterId",
});

module.exports = FilteredPublications;
