import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/Foody";

const app = express();
app.use(router);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.kaav2jt.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`
  )
  .then((result) => {
    app.listen({ port: process.env.PORT || 5001 });
    console.log(`app running on port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
