/**
 * This file defines the Sequilize schema for AdminAccounts.
 *
 * @summary   defines schema for AdminAccounts.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const db = require("../configDB");
// const bcrypt = require("bcrypt");
// const SALT_WORK_FACTOR = 10;

const AdminAccount = db.define(
    "adminaccounts",
    {
        // id - default will have a column called 'id' that will auto-increment an integer value
        name: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(320),
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
    // {
    //     hooks: {
    //         beforeValidate: async (user) => {
    //             console.log(user);
    //             if (user.password) {
    //                 // generate a salt
    //                 return bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    //                     if (err) return next(err);

    //                     // hash the password using our new salt
    //                     return bcrypt.hash(user.password, salt, (errH, hash) => {
    //                         if (errH) return next(errH);

    //                         // overrirde the cleartext password with the hashed one
    //                         user.password = hash;
    //                         user.salt = salt;
    //                         console.log("user.password is " + user.password + " .");
    //                         console.log("user.salt is " + user.salt + " .");
    //                         next();
    //                     });
    //                 });
    //             }
    //         },
    //         beforeUpdate: async (user) => {
    //             if (user.password) {
    //                 const salt = await bcrypt.genSaltSync(10, "a");
    //                 user.password = bcrypt.hashSync(user.password, salt);
    //                 user.salt = salt;
    //                 console.log("user.password is " + user.password + " .");
    //                 console.log("user.salt is " + user.salt + " .");
    //             }
    //         },
    //     },
    //     instanceMethods: {
    //         validPassword: (password) => {
    //             return bcrypt.compareSync(password, this.password);
    //         },
    //     },
    // }
);
module.exports = AdminAccount;
