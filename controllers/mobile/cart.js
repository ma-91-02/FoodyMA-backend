const Order = require("../../models/mobile/order");
const User = require("../../models/mobile/user");
const Meal = require("../../models/admin/meal");

exports.getCart = (req, res, next) => {
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

exports.postCart = (req, res, next) => {
  const mealId = req.body.mealId;
  Meal.findById(mealId)
    .then((meal) => {
      return req.user.addToCart(meal);
    })
    .then((result) => {
      console.log(result);
      res.redirect("/cart");
    });
};

exports.postCartDeleteMeal = (req, res, next) => {
  const mealId = req.body.mealId;

  req.user
    .removeFromCart(mealId)
    .then((result) => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};
