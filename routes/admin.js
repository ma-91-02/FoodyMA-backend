const path = require("path");
const axios = require("axios");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();
// /admin => GET
router.get("/", adminController.getHomePage);

/////////// Language ///////////

// /admin/add-language => GET
router.get("/add-language", adminController.getAddLanguage);

// get all languages 
router.get("/languages", adminController.getLanguages);

// /admin/v1/languages=>get api
router.get("/v1/languages", adminController.getLanguage);

// /admin/add-language => POST
router.post("/add-language", adminController.postAddLanguage);

// delete language
router.post("/delete-language", adminController.postDeleteLanguage);



/////////// Select Table ///////////
// get add select table 
router.get("/add-select-table", adminController.getAddSelectTable);

// post select tabel
router.post("/add-select-table", adminController.postAddSelectTable);

// get select table content api
router.get("/v1/select-table", adminController.getSelectTableApi);

// get select table content
router.get("/select-table", adminController.getSelectTableContent);


router.post("/v1/waiter", adminController.postWaiter);

// /admin/delete
// router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
