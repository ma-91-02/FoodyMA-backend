require("dotenv").config();
const path = require("path");
const https = require("https");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const employeesRoutes = require("./routes/employees");
// app.use(dotenv);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use("/admin", adminRoutes);
app.use(employeesRoutes);
// app.use(adminRoutes);
// app.use(errorController.get404);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// const privateKey =fs.readFileSync('server.key');
// const certificate =fs.readFileSync('server.cert');

// connect DB

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.kaav2jt.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`
  )
  .then((result) => {
    app.listen(process.env.PORT || 8000);
  })
  .catch((err) => {
    console.log(err);
  });
