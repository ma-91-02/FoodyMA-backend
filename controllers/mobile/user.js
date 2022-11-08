const User = require("../../models/mobile/user");
///////////////////// add user from mobile app
exports.postUser = (req, res, next) => {
  const tableNumber = req.body.tableNumber;
  const language = req.body.language;
  const userName = req.body.userName;
  // User.findOne()
  //   .then((user) => {
  //     if (!user) {
        const user = new User({
          _id:'55',
          tableNumber: tableNumber,
          language: language,
          userName: userName,
          cart: {
            items: [],
          },
        });
        user.save();
          res.redirect("/admin");
      // }
    // })
    // .then((resulte) => {
    //   console.log("created user");
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  // res.redirect("/admin");
};
