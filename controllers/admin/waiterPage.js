
const WaiterPage = require("../../models/admin/waiterPage");
const Languages = require("../../models/language");


exports.getAddWaiterContent = async (req, res, next) => {
  await Languages.find().then((data) => {
    // console.log(l);
    res.render("admin/waiter/addWaiterContent", {
      langs: data,
      pageTitle: "Add Waiter Content",
      path: "/admin/add-waiter",
      editing: false,
    });
  });
  // console.log(l);
};

// get content select table api
exports.getWaiterPageApi = (req, res, next) => {
  WaiterPage.find().then((waiterPage) => {
        res.status(200).json(waiterPage);
        console.log('get waiter page api')
      });
    };

// post Waiter page from admin
exports.postAddWaiterPage = (req, res, next) => {
  const language = req.body.language;
  const buttonMenu = req.body.buttonMenu;
  const pageContent = req.body.pageContent;
  const pageTitle = req.body.pageTitle;
  const waiterPage = new WaiterPage({
    language: language,
    buttonMenu: buttonMenu,
    pageContent: pageContent,
    pageTitle: pageTitle,
  });
  waiterPage
    .save()
    .then((result) => {
      console.log("created page Waiter");
    })
    .catch((err) => {
      console.log(err);
    });
  // res.redirect("/admin/select-table");
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