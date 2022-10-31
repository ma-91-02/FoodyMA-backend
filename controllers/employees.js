const Waiter = require("../models/waiter");
const MealCardKitchen = require("../models/mealCardKitchen");
const MealCardCashier = require("../models/mealCardCashier");
const axios = require("axios");

exports.getHomePage = (req, res, next) => {
  res.render("employees/home", {
    pageTitle: "Home",
    path: "/admin/home",
    editing: false,
  });
};
/////////////// kitchen Section //////////////
exports.getKitchenPage = async (req, res, next) => {
  await MealCardKitchen.find().then((dataMealCard) => {
    console.log(dataMealCard);

    res.render("employees/kitchen", {
      dataMealCard: dataMealCard,
      pageTitle: "Kitchen",
      path: "/admin/add-language",
      editing: false,
    });
  });
};

////////////// Cashier Section  /////////////

exports.getCashierPage = async (req, res, next) => {
  let dataCard;
  await MealCardCashier.find().then((dataMealCard) => (dataCard = dataMealCard));
  await Waiter.find().then((data) => {
    console.log(data);
    res.render("employees/cashier", {
      dataMealCard: dataCard,
      dataWaiter: data,
      pageTitle: "Cashier",
      path: "/admin/add-language",
      editing: false,
    });
  });
};

///////////////////// add to card from mobile app
exports.postMealCard = (req, res, next) => {
  const tableNumber = req.body.tableNumber;
  const MealTitle = req.body.MealTitle;
  const MealCount = req.body.MealCount;
  const simpleLang = req.body.simpleLang;
  const MealId = req.body.MealId;
  const mealCardKitchen = new MealCardKitchen({
    tableNumber: tableNumber,
    MealTitle: MealTitle,
    MealCount: MealCount,
    simpleLang: simpleLang,
    MealId: MealId,
  });
  console.log(mealCardKitchen);
  mealCardKitchen
    .save()
    .then((result) => {
      console.log("created Product");
    })
    .catch((err) => {
      console.log(err);
    });
  const mealCardCashier = new MealCardCashier({
    tableNumber: tableNumber,
    MealTitle: MealTitle,
    MealCount: MealCount,
    simpleLang: simpleLang,
    MealId: MealId,
  });
  console.log(mealCardCashier);
  mealCardCashier
    .save()
    .then((result) => {
      console.log("created Product");
    })
    .catch((err) => {
      console.log(err);
    });
  // res.redirect("/admin");
};
