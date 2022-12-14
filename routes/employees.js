const path = require("path");
const axios = require("axios");

const express = require("express");

const employeesController = require("../controllers/employees");

const router = express.Router();
// /admin => GET
router.get("/", employeesController.getHomePage);
//////////////////////// cashier section ////////////
// /admin => GET
router.get("/cashier", employeesController.getCashierPage);
router.post("/cashier-meal", employeesController.postDeleteMealFromCashier);
router.post("/cashier-waiter", employeesController.postDeleteWaiterFromCashier);
//////////////////////// kitchen section ////////////
// /admin => GET
router.get("/kitchen", employeesController.getKitchenPage);
router.post("/kitchen-meal", employeesController.postDeleteMealFromKitchen);

/////////// Language ///////////

// /admin/add-language => GET
// router.get("/add-language", adminController.getAddLanguage);

// // /admin/v1/languages=>get
// router.get("/v1/languages", adminController.getLanguage);
// // axios.get('/v2/languages')

// // /admin/add-language => POST
// router.post("/add-language", adminController.postAddLanguage);

// /////////// Select Table ///////////
// router.get("/select-table", adminController.getSelectTable);
// router.post("/select-table", adminController.postAddSelectTable);
// // router.get("v1/select-table", adminController.getSelectTableApi);
// router.get("/v1/select-table", adminController.getSelectTableApi);

// // router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/v1/add-meal-card", employeesController.postMealCard);

// /admin/delete
// router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
