const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: Array,
  amount: Number,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", orderSchema);