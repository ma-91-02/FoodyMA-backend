"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mobile_1 = require("../controllers/mobile");
const router = (0, express_1.Router)();
router.get("/", mobile_1.getHome);
exports.default = router;
