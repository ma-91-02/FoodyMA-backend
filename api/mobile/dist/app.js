"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mobile_1 = __importDefault(require("./routes/mobile"));
const app = (0, express_1.default)();
app.use(mobile_1.default);
app.listen({ port: 5002 });
