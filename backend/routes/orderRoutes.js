const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

module.exports = router;