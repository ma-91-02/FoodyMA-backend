const path = require("path");
const axios = require("axios");

const express = require("express");

const adminWaiterPageController = require("../../controllers/admin/waiterPage");

const router = express.Router();

// /admin/add-language => GET
router.get("/add-waiter", adminWaiterPageController.getAddWaiterContent);

// // /admin/add-language => POST
router.post("/add-waiter", adminWaiterPageController.postAddWaiterPage);

// /admin/v1/languages=>get api
router.get("/v1/waiter", adminWaiterPageController.getWaiterPageApi);

// // get all languages
// router.get("/languages", adminController.getLanguages);

// // delete language
// router.post("/delete-language", adminController.postDeleteLanguage);

// /////////// Select Table ///////////
// // get add select table
// router.get("/add-select-table", adminController.getAddSelectTable);

// // post select tabel
// router.post("/add-select-table", adminController.postAddSelectTable);

// // get select table content api
// router.get("/v1/select-table", adminController.getSelectTableApi);

// // get select table content
// router.get("/select-table", adminController.getSelectTableContent);

// router.post("/v1/waiter", adminController.postWaiter);

// /admin/delete
// router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
