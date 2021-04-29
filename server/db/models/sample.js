const Sequelize  = require('sequelize');
const db = require("../configDB")

module.exports = db.define('sample', {

    // if no primary key, default it will have a column called 'id' that will auto-increment an integer value

    fName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
}, {
    // createdAt & updatedAt columns will be added/self-mantained by table
    timestamps: true
});