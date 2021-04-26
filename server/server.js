const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const config = require("./config");

// MongoDB Connection via Mongoose
// mongoose.set("useUnifiedTopology", true);
// mongoose.set("useNewUrlParser", true);
// mongoose.connect(config.db.uri);
// mongoose.connection.once("open", async () => {
//   console.log("Established connection to MySQL Database.");
//   // console.log(config.db.uri);
//   console.log(`Server starting at Port: ${config.app.port}`);
// });

console.log(`Server starting at Port: ${config.app.port}`);

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
app.use("/index", require("./routes/index"));


app.get("/", (req, res) => {
  res.status(200).json({ message: "Abandon All Hope Ye Who Enter Here..." });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.error("Error caught");
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

module.exports = app;