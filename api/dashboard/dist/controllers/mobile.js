"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const getHome = (req, res) => {
    res.status(200).json({ message: "Dashboard done" });
};
exports.getHome = getHome;
