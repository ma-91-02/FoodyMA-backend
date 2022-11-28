import express from "express";
import router from "./routes/mobile";
const app = express();

app.use(router);
app.listen({ port: 5003 });
