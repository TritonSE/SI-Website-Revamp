const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const db = require("./db/configDB");
const config = require("./config");
const populateTables = require("./seeds/initializeTables");

// test connection to database
db.authenticate()
    .then(() => {
        // successful
        console.log(`Connection has been established successfully to database ${config.db.name}.`);
        console.log(`Server starting at Port: ${config.app.port}\n`);
    })
    .catch((error) => {
        // error
        console.error("Unable to connect to the database:", error);
    });

// Sync all models to reflect newest updates (automatic table creation/deletion/update)
db.sync({ force: true, logging: false })
    .then(() => {
        console.log("Populating Tables...");
        populateTables();
    })
    .catch((err) => {
        console.error(err);
    });

const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ methods: ["GET", "POST", "PUT", "DELETE"] }));

// Routers
app.use("/sample", require("./routes/sample"));
app.use("/publications", require("./routes/publications"));
app.use("/conference", require("./routes/conference"));
app.use("/emailList", require("./routes/emailList"));
app.use("/volunteers", require("./routes/volunteers"));
app.use("/memberships", require("./routes/memberships"));
app.use("/newsletters", require("./routes/newsletters"));
app.use("/adminAccounts", require("./routes/adminAccounts"));
app.use("/contact", require("./routes/contact"));
app.use("/branchesAndChapters", require("./routes/branchesAndChapters"));
app.use("/paypal", require("./routes/paypal"));
app.use("/execCommittees", require("./routes/execCommittees"));
app.use("/newsAndEvents", require("./routes/newsAndEvents"));
app.use("/sections", require("./routes/sections"));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Abandon All Hope Ye Who Enter Here..." });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    console.error("Error caught");
    next(createError(404));
});

// error handler
app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({ message: err.message });
});

module.exports = app;
