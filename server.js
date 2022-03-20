const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const AllRoutes = require('./routes/all');

mongoose.connect(
  "mongodb+srv://mongodb:i6QpsrcM04zFhSKQ@leadsgenerationonline.yg2ys.mongodb.net/leadsgenerationonlinedatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Failed to connect.");
  console.log(err);
});
db.once("open", () => {
  console.log("Successfully Connected.");
});

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>SERVER</h1>");
});

const PORT = 5968;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/all',AllRoutes);
