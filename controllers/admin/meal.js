const Meal = require("../../models/admin/meal");
const Category = require("../../models/admin/category");
const Languages = require("../../models/language");

exports.getAddMeal = async (req, res, next) => {
  const dataCategory = await Category.find();
  await Languages.find().then((data) => {
    res.render("admin/meal/addMeal", {
      langs: data,
      categores: dataCategory,
      pageTitle: "Add Category",
      path: "/admin/add-waiter",
      editing: false,
    });
  });
};

// get content select table api
exports.getMealApi = (req, res, next) => {
  Meal.find().then((data) => {
        res.status(200).json(data);
      });
    };

// post Waiter page from admin
exports.postAddMeal = (req, res, next) => {
  const language = req.body.language;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const duration = req.body.duration;
  const ingredients = req.body.ingredients;
  const categoryIds = req.body.categoryIds;
  const meal = new Meal({
    language: language,
    categoryIds: categoryIds,
    imageUrl: imageUrl,
    price: price,
    duration: duration,
    ingredients: ingredients,
    title: title,
  });
  meal
    .save()
    .then((result) => {
      console.log("created meal");
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
