require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const guestRouter = require("./libs/guest/guestRouter");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/api", guestRouter);

module.exports = app;
