const express = require("express");
const Transaction = require("../models/transaction");
const Customer = require("../models/customer");

const router = express.Router();

router.get("/", async (req, res) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.send(transactions);
});


router.post("/", async (req, res) => {
  const { from, to, amount } = req.body;

  try {
    const fromCustomer = await Customer.findOne({ name: from });
    if (!fromCustomer) {
      return res.status(404).json({ error: `Customer ${from} not found` });
    }
    const toCustomer = await Customer.findOne({ name: to });
    if (!toCustomer) {
      return res.status(404).json({ error: `Customer ${to} not found` });
    }

    const amountNum = parseFloat(amount); // Ensure the amount is treated as a number

    if (fromCustomer.balance < amountNum) {
      return res.status(400).json({ error: "Insufficient balance" });
    }

    fromCustomer.balance = parseFloat(fromCustomer.balance) - amountNum; // Ensure balance is treated as a number
    await fromCustomer.save();

    toCustomer.balance = parseFloat(toCustomer.balance) + amountNum; // Ensure balance is treated as a number
    await toCustomer.save();
    const newTransaction = new Transaction({
      from: fromCustomer.name,
      to: toCustomer.name,
      amount: amount
  })
  const savedTransaction = await newTransaction.save();
    res
      .status(200)
      .json({ message: "Transfer successful",savedTransaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
