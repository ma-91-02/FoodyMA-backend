
const Category = require("../../models/admin/category");
const CategoryContent = require("../../models/admin/categoryContent");
const Languages = require("../../models/language");


exports.getAddWaiterContent = async (req, res, next) => {
  await Languages.find().then((data) => {
    res.render("admin/category/addCategory", {
      langs: data,
      pageTitle: "Add Category",
      path: "/admin/add-waiter",
      editing: false,
    });
  });
};

// get content select table api
exports.getCategoryApi = (req, res, next) => {
  Category.find().then((data) => {
        res.status(200).json(data);
      });
    };

// post Waiter page from admin
exports.postAddCategory = (req, res, next) => {
  const language = req.body.language;
  const title = req.body.title;
  const category = new Category({
    language: language,
    title: title,
  });
  category
    .save()
    .then((result) => {
      console.log("created category");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/admin/add-category");
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