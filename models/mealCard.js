const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MealCardSchema = new Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  MealTitle: {
    type: String,
    required: true,
  },
  MealCount: {
    type: Number,
    required: true,
  },
  simpleLang: {
    type: String,
    required: true,
  },
  MealId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MealCard", MealCardSchema);
