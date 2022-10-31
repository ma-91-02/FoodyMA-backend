const Waiter = require("../models/waiter");
const MealCard = require("../models/mealCard");
const axios = require("axios");

exports.getHomePage = (req, res, next) => {
  res.render("employees/home", {
    pageTitle: "Home",
    path: "/admin/home",
    editing: false,
  });
};

exports.getKitchenPage = (req, res, next) => {
  res.render("employees/kitchen", {
    pageTitle: "Kitchen",
    path: "/admin/add-language",
    editing: false,
  });
};

exports.postAddLanguage = (req, res, next) => {
  const lang = req.body.language;
  const simpleLang = req.body.simpleLang;
  const language = new Language({ lang: lang, simpleLang: simpleLang });
  // console.log(language);
  language
    .save()
    .then((result) => {
      console.log("created ");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/admin");
};

exports.getLanguage = async (req, res, next) => {
  try {
    await Language.find().then((languages) => {
      // console.log(languages);
      res.status(200).json(languages);
      // return axios.get("http://127.0.0.1:3000/admin/v1/languages", languages);

      // res.render("admin/languages", {
      //   prods: languages,
      //   pageTitle: "Admin Languages",
      //   path: "/admin/products",
      // });
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////////////// Cashier Section  /////////////

exports.getCashierPage = async (req, res, next) => {
  await Waiter.find().then((data) => {
    console.log(data);
    res.render("employees/cashier", {
      data: data,
      pageTitle: "Cashier",
      path: "/admin/add-language",
      editing: false,
    });
  });
};
exports.postAddSelectTable = (req, res, next) => {
  const simpleLang = req.body.simpleLang;
  const buttonContent = req.body.buttonContent;
  const pageContent = req.body.pageContent;
  const pageTitle = req.body.pageTitle;
  const selectTable = new SelectTable({
    simpleLang: simpleLang,
    buttonContent: buttonContent,
    pageContent: pageContent,
    pageTitle: pageTitle,
  });
  selectTable
    .save()
    .then((result) => {
      console.log("created Product");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/admin");
};
exports.getSelectTableApi = (req, res, next) => {
  SelectTable.find().then((selectTable) => {
    res.status(200).json(selectTable);
    // res.render("admin/languages", {
    //   prods: languages,
    //   pageTitle: "Admin Languages",
    //   path: "/admin/products",
    // });
  });
};
///////////////////// add to card from mobile app
exports.postMealCard = (req, res, next) => {
  const tableNumber = req.body.tableNumber;
  const MealTitle = req.body.MealTitle;
  const MealCount = req.body.MealCount;
  const simpleLang = req.body.simpleLang;
  const MealId = req.body.MealId;
  const mealCard = new MealCard({
    tableNumber: tableNumber,
    MealTitle: MealTitle,
    MealCount: MealCount,
    simpleLang: simpleLang,
    MealId: MealId,
  });
  console.log(mealCard);
  mealCard
    .save()
    .then((result) => {
      console.log("created Product");
    })
    .catch((err) => {
      console.log(err);
    });
  // res.redirect("/admin");
};
