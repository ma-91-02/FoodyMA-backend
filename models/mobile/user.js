const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  tableNumber: {
    type: Number,
    required: true,
  },
  cart: {
    items: [
      {
        mealId: {
          type: Schema.Types.ObjectId,
          ref: "Meal",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

userSchema.methods.addToCart = function (meal) {
  const cartMealIndex = this.cart.items.findIndex((cp) => {
    return cp.mealId.toString() === meal._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartMealIndex >= 0) {
    newQuantity = this.cart.items[cartMealIndex].quantity + 1;
    updatedCartItems[cartMealIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      mealId: meal._id,
      quantity: newQuantity,
    });
  }
  const updatedCart = {
    items: updatedCartItems,
  };
  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.removeFromCart = function (mealId) {
  const updatedCartItems = this.cart.items.filter((item) => {
    return item.mealId.toString() === mealId.toString();
  });

  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.clearCart = function () {
  // this.cart = { items: [] };
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
