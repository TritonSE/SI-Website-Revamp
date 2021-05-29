/**
 * File populates userInfo table.
 *
 * @summary   Populates userInfo table.
 * @author    Thomas Garry
 */

const UserInfo = require("../../db/models/userInfo");

module.exports = async () => {
    await Promise.all([
        UserInfo.create(
            {
                fName: "John",
                mName: "r",
                lName: "Doe",
                phone: "1234567890",
                email: "john@gmail.com",
                country: "United States",
            },
            { logging: false }
        ),
        UserInfo.create(
            {
                fName: "Alice",
                mName: "r",
                lName: "Doe",
                phone: "1234567890",
                email: "alice@gmail.com",
                country: "United States",
            },
            { logging: false }
        ),
        UserInfo.create(
            {
                fName: "Doe",
                mName: "r",
                lName: "Doe",
                phone: "1234567890",
                email: "Doe@gmail.com",
                country: "United States",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished userInfo");
        })
        .catch((err) => {
            // some error occurred
            console.error(`userInfo: ${err}`);
        });
};
