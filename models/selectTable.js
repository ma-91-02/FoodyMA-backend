const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SelectTableSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  buttonContent: {
    type: String,
    required: true,
  },
  pageContent: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SelectTable", SelectTableSchema);
