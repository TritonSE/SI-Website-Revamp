/**
 * This file defines the Sequilize schema for emailList.
 *
 * @summary   defines schema for emailList.
 * @author    Thomas Garry
 */
const db = require("../configDB");
const UserInformation = require("./userInfo");

const EmailList = db.define(
    "emailList",
    {
        // column 'id' will auto-increment an integer value
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);

// creates an association between UserInformation and EmailList
// new "info" column in table
EmailList.belongsTo(UserInformation, {
    foreignKey: "info",
});

module.exports = EmailList;
