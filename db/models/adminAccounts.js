/**
 * This file defines the Sequilize schema for AdminAccounts.
 *
 * @summary   defines schema for AdminAccounts.
 * @author    Thomas Garry
 */
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../configDB");

const SALT_WORK_FACTOR = 10;

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
        hooks: {
            beforeSave: async (user) => {
                if (user.password) {
                    // generate a salt
                    const hashedPassword = await new Promise((resolve, reject) => {
                        bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
                            bcrypt.hash(user.password, salt, (err, hash) => {
                                if (err) reject(err);
                                resolve(hash);
                            });
                        });
                    });
                    user.password = hashedPassword;
                }
            },
        },
        // createdAt & updatedAt columns will be added/self-mantained by table
        timestamps: true,
    }
);
// validation instance method
AdminAccount.prototype.validPassword = function validate(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = AdminAccount;
