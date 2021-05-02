const { Sequelize } = require("sequelize");
const config = require("../config");

// Initialize connection details to MySQL DB
module.exports = new Sequelize(config.db.name, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: "mysql",

    // customize some settings
    freezeTableName: true,
    timestamps: true,
    logging: console.log,
});
