const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SelectServiceSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  pageContent: {
    type: String,
    required: true,
  },
  buttonByApp: {
    type: String,
    required: true,
  },
  buttonByWaiter: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SelectService", SelectServiceSchema);
