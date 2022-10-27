const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
  lang: {
    type: String,
    required: true,
  },
  simpleLang: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Language", LanguageSchema);
