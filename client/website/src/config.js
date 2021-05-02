require("dotenv").config();

module.exports = {
    app: {
        env: process.env.NODE_ENV || "development",
    },
    backend: {
        uri: process.env.REACT_APP_BACKEND_URI || "http://localhost:3000/",
    },
};
