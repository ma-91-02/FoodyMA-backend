const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WaiterSchema = new Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  textMessage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Waiter", WaiterSchema);
