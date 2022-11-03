const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WaiterPageSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  pageContent: {
    type: String,
    required: true,
  },
  buttonMenu: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("WaiterPage", WaiterPageSchema);
