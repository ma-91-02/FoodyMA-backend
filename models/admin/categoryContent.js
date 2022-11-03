const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategoryContentSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CategoryContent", CategoryContentSchema);
