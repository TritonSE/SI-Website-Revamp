require("dotenv").config();

module.exports = {
    app: {
        env: process.env.NODE_ENV || "development",
        port: process.env.PORT || 3000,
    },
    // used for jwt
    auth: {
        register_secret: process.env.REGISTER_SECRET || "tritonse",
        jwt_secret: process.env.JWT_SECRET || "keyboard cat",
    },
    // frontend URI
    frontend: {
        uri: process.env.FRONTEND_URI || "http://localhost:3000/",
    },
    // backend URI
    backend: {
        uri: process.env.BACKEND_URI || "http://localhost:5000/",
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
        MAIL_USERNAME: process.env.EMAIL || "",
        MAIL_PASSWORD: process.env.PASSWORD || "",
        OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID || "",
        OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET || "",
        OAUTH_REFRESH_TOKEN: process.env.OAUTH_REFRESH_TOKEN || "",
    },
    recipientEmailList: {
        // receives any submission to volunteer or email list forms, notifications of new memberships, and contact messages
        general: process.env.GENERAL_EMAIL_LIST || "thomas@garry.to",
    },
};
