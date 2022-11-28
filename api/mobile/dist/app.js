"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const mobile_1 = __importDefault(require("./routes/mobile"));
const app = (0, express_1.default)();
app.use(mobile_1.default);
mongoose_1.default
    .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.kaav2jt.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`)
    .then((result) => {
    app.listen({ port: process.env.PORT || 5001 });
    console.log(`app running on port ${process.env.PORT}`);
})
    .catch((err) => {
    console.log(err);
});
