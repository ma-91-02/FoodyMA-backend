const express = require("express");
const mobileUserController = require("../../controllers/mobile/user");

const router = express.Router();
router.post("/v1/add-user", mobileUserController.postUser);

module.exports = router;