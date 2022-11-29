const Order = require("../../models/mobile/order");
const User = require("../../models/mobile/user");
const Meal = require("../../models/admin/meal");
import { Request, Response } from "express";
export const getCart = (req: Request, res: Response) => {
  req.user
    .populate("cart.items.mealId")
    .then((user) => {
      const meals = user.cart.items;
      console.log(meals);
      res.status(200).json(meals);
      // res.render('shop/cart', {
      //   path: '/cart',
      //   pageTitle: 'Your Cart',
      //   products: products,
      //   isAuthenticated: req.session.isLoggedIn
      // });
    })
    .catch((err) => console.log(err));
};

export const postCart = (req: Request, res: Response) => {
  const mealId = req.body.mealId;
  console.log(mealId);
  console.log("=========");
  Meal.findById(mealId)
    .then((meal) => {
      return req.user.addToCart(meal);
    })
    .then((result) => {
      console.log(result);
      res.redirect("/cart");
    });
};

export const postCartDeleteMeal = (req: Request, res, next) => {
  const mealId = req.body.mealId;
  req.user
    .removeFromCart(mealId)
    .then((result) => {
      console.log("delete");
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};
