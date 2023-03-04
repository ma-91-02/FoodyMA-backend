const mongoose = require("mongoose");

const { Schema } = mongoose;

const languageSchema = new Schema({
  lang: {
    type: String,
    required: true,
  },
}, {
  collection: 'languages',
  timestamps: true
});

module.exports = mongoose.model("Language", languageSchema);
