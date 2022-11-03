const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MealSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  categoryIds: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  complexity: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
  ingredients: {
    type: String,
    required: true,
  },
  steps: {
    type: String,
    required: false,
  },
  isGlutenFree: {
    type: String,
    required: false,
  },
  isVegan: {
    type: String,
    required: false,
  },
  isVegetarian: {
    type: Boolean,
    required: false,
  },
  isLactoseFree: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Meal", MealSchema);
