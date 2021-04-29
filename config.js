require('dotenv').config()

module.exports = {
    app: {
      env: process.env.NODE_ENV || "development",
      port: process.env.PORT || 3000
    },
    // establish MySQL DB connection
    db: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      name: process.env.DB_NAME || "sakyadhita"
    },
    // used for email automation
    autoEmail: {
      email: process.env.EMAIL || "",
      password: process.env.PASSWORD || ""
    }
  };