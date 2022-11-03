
const SelectService = require("../../models/admin/selectService");
const Languages = require("../../models/language");
const axios = require("axios");




exports.getAddSelectService = async (req, res, next) => {
  await Languages.find().then((data) => {
    res.render("admin/selectServices/AddSelectServices", {
      langs: data,
      pageTitle: "Add Select service",
      path: "/admin/add-select-service",
      editing: false,
    });
  });
};

// get content select table api
exports.getSelectServiceApi = (req, res, next) => {
  SelectService.find().then((selectService) => {
        res.status(200).json(selectService);
      });
    };

// post select table from admin
exports.postAddSelectService = (req, res, next) => {
  const language = req.body.language;
  const buttonByApp = req.body.buttonByApp;
  const buttonByWaiter = req.body.buttonByWaiter;
  const pageContent = req.body.pageContent;
  const pageTitle = req.body.pageTitle;
  const selectService = new SelectService({
    language: language,
    buttonByApp: buttonByApp,
    buttonByWaiter: buttonByWaiter,
    pageContent: pageContent,
    pageTitle: pageTitle,
  });
  selectService
    .save()
    .then((result) => {
      console.log("created page service");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/admin/select-table");
};

    
    // // get content slect table from admin
    // exports.getSelectTableContent = (req, res, next) => {
      //   SelectTable.find().then((selectTableContant) => {
        //     res.render("admin/selectTableContent", {
          //       contents: selectTableContant,
          //       pageTitle: "Select Table",
          //       path: "/admin/select-table",
          //       editing: false,
          //     });
          //   });
          // };
          
          // // Delete 
          // exports.postDeleteLanguage = (req, res, next) => {
            //   const contentId = req.body.contentId;
            //   SelectTable.findByIdAndDelete(contentId)
            //     .then(() => {
              //       console.log("Deleted");
              //       res.redirect("/admin/select-table");
              //     })
              //     .catch((err) => console.log(err));
              // };