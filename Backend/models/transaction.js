const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
