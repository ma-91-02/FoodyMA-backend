const Language = require("../models/language");
const SelectTable = require("../models/selectTable");
const Waiter = require("../models/waiter");
const axios = require("axios");

exports.getHomePage = (req, res, next) => {
  res.render("admin/home", {
    pageTitle: "Home",
    path: "/admin/home",
    editing: false,
  });
};
exports.getAddLanguage = (req, res, next) => {
  res.render("admin/edit-language", {
    pageTitle: "Add Language",
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
      console.log("created language");
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
      return axios.get("http://127.0.0.1:3000/admin/v1/languages", languages);

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

////////////// select Table /////////////
exports.getSelectTable = (req, res, next) => {
  res.render("admin/selectTable", {
    pageTitle: "Select Table",
    path: "/admin/select-table",
    editing: false,
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

exports.postWaiter = (req, res, next) => {
  const tableNumber = req.body.tableNumber;
  const textMessage = req.body.textMessage;
  const waiter = new Waiter({
    tableNumber: tableNumber,
    textMessage: textMessage,
  });
  console.log(waiter);
  waiter
    .save()
    .then((result) => {
      console.log("created Product");
    })
    .catch((err) => {
      console.log(err);
    });
  // res.redirect("/admin");
};
