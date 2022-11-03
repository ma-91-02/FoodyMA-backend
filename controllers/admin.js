const Language = require("../models/language");
const SelectTable = require("../models/selectTable");
const Waiter = require("../models/waiter");
const axios = require("axios");

// home page in admin
exports.getHomePage = (req, res, next) => {
  res.render("admin/home", {
    pageTitle: "Home",
    path: "/admin/home",
    editing: false,
  });
};
/////////// Language section ///////////
// for add new language from admin
exports.getAddLanguage = (req, res, next) => {
  res.render("admin/edit-language", {
    pageTitle: "Add Language",
    path: "/admin/add-language",
    editing: false,
  });
};

// for get all languages
exports.getLanguages = async (req, res, next) => {
  await Language.find().then((dataLangs) => {
    res.render("admin/languages", {
      dataLangs: dataLangs,
      pageTitle: "Languages",
      path: "/admin/languages",
      editing: false,
    });
  });
};

// add new language
exports.postAddLanguage = (req, res, next) => {
  const lang = req.body.language;
  const simpleLang = req.body.simpleLang;
  const language = new Language({ lang: lang, simpleLang: simpleLang });
  language
    .save()
    .then((result) => {
      console.log("created ");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/admin/languages");
};
// git api language
exports.getLanguage = async (req, res, next) => {
  try {
    await Language.find().then((languages) => {
      res.status(200).json(languages);
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Delete language
exports.postDeleteLanguage = (req, res, next) => {
  const langId = req.body.langId;
  Language.findByIdAndDelete(langId)
    .then(() => {
      console.log("Deleted");
      res.redirect("/admin/languages");
    })
    .catch((err) => console.log(err));
};

////////////// select Table /////////////
exports.getAddSelectTable = async (req, res, next) => {
  await Language.find().then((l) => {
    res.render("admin/AddselectTable", {
      langs: l,
      pageTitle: "Add Select Table",
      path: "/admin/add-select-table",
      editing: false,
    });
  });
};

// get content select table api
exports.getSelectTableApi = (req, res, next) => {
  SelectTable.find().then((selectTable) => {
    res.status(200).json(selectTable);
  });
};

// get content slect table from admin
exports.getSelectTableContent = (req, res, next) => {
  SelectTable.find().then((selectTableContant) => {
    res.render('admin/selectTableContent',{
      contents:selectTableContant,
      pageTitle:'Select Table',
      path:'/admin/select-table',
      editing:false,
    })
  });
};
// post select table from admin
exports.postAddSelectTable = (req, res, next) => {
  const language = req.body.language;
  const buttonContent = req.body.buttonContent;
  const pageContent = req.body.pageContent;
  const pageTitle = req.body.pageTitle;
  const selectTable = new SelectTable({
    language: language,
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
  res.redirect("/admin/select-table");
};

// Delete language
exports.postDeleteLanguage = (req, res, next) => {
  const contentId = req.body.contentId;
  SelectTable.findByIdAndDelete(contentId)
    .then(() => {
      console.log("Deleted");
      res.redirect("/admin/select-table");
    })
    .catch((err) => console.log(err));
};


////////////// Waiter Section  /////////////
exports.postWaiter = (req, res, next) => {
  const tableNumber = req.body.tableNumber;
  const textMessage = req.body.textMessage;
  const waiter = new Waiter({
    tableNumber: tableNumber,
    textMessage: textMessage,
  });
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
