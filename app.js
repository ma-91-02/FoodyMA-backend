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

// defien routers
const adminRoutes = require("./routes/admin");
const employeesRoutes = require("./routes/employees");
const adminSelectServicesRoutes = require("./routes/admin/selectService");
const adminWaiterPageRoutes = require("./routes/admin/waiterPage");
const adminCategoryRoutes = require("./routes/admin/category");
const adminCategoryContentRoutes = require("./routes/admin/categoryContent");
const adminMealRoutes = require("./routes/admin/meal");
const mobileUserlRoutes = require("./routes/mobile/user");
const mobileCartRoutes = require("./routes/mobile/cart");
const User= require("./models/mobile/user");

// app.use(dotenv);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use((req, res, next) => {
  User.findById("636571cfe6613748943b0747")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
// add routes to app
app.use("/admin", adminRoutes);
app.use("/admin", adminSelectServicesRoutes);
app.use("/admin", adminWaiterPageRoutes);
app.use("/admin", adminCategoryRoutes);
app.use("/admin", adminCategoryContentRoutes);
app.use("/admin", adminMealRoutes);
app.use(employeesRoutes);
app.use(mobileUserlRoutes);
app.use(mobileCartRoutes);
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
    const server = app.listen(process.env.PORT || 80);
    const io = require("./socket").init(server);
    io.on("connection", (socket) => {
      console.log("add meal");
    });
  })
  .catch((err) => {
    console.log(err);
  });
