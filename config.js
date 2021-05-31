require("dotenv").config();

module.exports = {
    app: {
        env: process.env.NODE_ENV || "development",
        port: process.env.PORT || 3000,
    },
    // establish MySQL DB connection
    db: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        name: process.env.DB_NAME || "sakyadhita",
    },
    // used for email automation
    autoEmail: {
        user: process.env.EMAIL || "",
        pass: process.env.PASSWORD || "",
    },
    recipientEmailList: {
        // receives any submission to volunteer or email list forms, notifications of new memberships, and contact messages
        general: process.env.GENERAL_EMAIL_LIST || "aksingh@ucsd.edu",
    },
};
