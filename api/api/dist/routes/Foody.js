"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Foody_1 = require("../controllers/Foody");
const router = (0, express_1.Router)();
router.get("/", Foody_1.getHome);
exports.default = router;
