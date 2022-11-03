
const Category = require("../../models/admin/category");
const CategoryContent = require("../../models/admin/categoryContent");
const Languages = require("../../models/language");


exports.getAddCategoryContent = async (req, res, next) => {
  await Languages.find().then((data) => {
    // console.log(l);
    res.render("admin/category/addCategoryContent", {
      langs: data,
      pageTitle: "Add Category Content",
      path: "/admin/add-category-content",
      editing: false,
    });
  });
  // console.log(l);
};

// get content select table api
exports.getCategoryContentApi = (req, res, next) => {
  CategoryContent.find().then((data) => {
        res.status(200).json(data);
        console.log('Get Category Content api')
      });
    };

// post Waiter page from admin
exports.postAddCategory = (req, res, next) => {
  const language = req.body.language;
  const pageTitle = req.body.pageTitle;
  const categoryContent = new CategoryContent({
    language: language,
    pageTitle: pageTitle,
  });
  categoryContent
    .save()
    .then((result) => {
      console.log("created category content");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/admin/add-category-content");
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