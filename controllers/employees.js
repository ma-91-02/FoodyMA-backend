const Waiter = require("../models/waiter");
const MealCardKitchen = require("../models/mealCardKitchen");
const MealCardCashier = require("../models/mealCardCashier");

const io = require('../socket');
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
    res.render("employees/kitchen", {
      dataMealCard: dataMealCard,
      pageTitle: "Kitchen",
      path: "/admin/add-language",
      editing: false,
    });
  });
};
exports.postDeleteMealFromKitchen = (req, res, next) => {
  const mealId = req.body.mealId;
  MealCardKitchen.findByIdAndDelete(mealId)
    .then(() => {
      console.log("Deleted");
      res.redirect("/Kitchen");
    })
    .catch((err) => console.log(err));
};
////////////// Cashier Section  /////////////

exports.getCashierPage = async (req, res, next) => {
  let dataCard;
  await MealCardCashier.find().then(
    (dataMealCard) => (dataCard = dataMealCard)
  );
  await Waiter.find().then((data) => {
    res.render("employees/cashier", {
      dataMealCard: dataCard,
      dataWaiter: data,
      pageTitle: "Cashier",
      path: "/admin/add-language",
      editing: false,
    });
  });
};

exports.postDeleteMealFromCashier = (req, res, next) => {
  const mealId = req.body.mealId;
  MealCardCashier.findByIdAndDelete(mealId)
    .then(() => {
      console.log("Deleted");
      res.redirect("/cashier");
    })
    .catch((err) => console.log(err));
};
exports.postDeleteWaiterFromCashier = (req, res, next) => {
  const mealId = req.body.mealId;
  Waiter.findByIdAndDelete(mealId)
    .then(() => {
      console.log("Deleted");
      res.redirect("/cashier");
    })
    .catch((err) => console.log(err));
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
  mealCardKitchen
    .save();
    io.getIO().emit('new', {action:'create', post:mealCardKitchen});
    mealCardKitchen
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
  mealCardCashier
    .save();
    io.getIO().emit('new', {action:'create', post:mealCardCashier});
    mealCardCashier
    .then((result) => {
      console.log("created Product");
    })
    .catch((err) => {
      console.log(err);
    });
  // res.redirect("/admin");
};
