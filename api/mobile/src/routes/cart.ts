import { Router } from "express";

// const express = require("express");
// const mobileCartController = require("../../controllers/mobile/cart");

const router = Router();
router.get("/v1/cart", mobileCartController.getCart);
router.post("/v1/add-cart", mobileCartController.postCart);
router.post("/v1/delete-meal-cart", mobileCartController.postCartDeleteMeal);

module.exports = router;
