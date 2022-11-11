const mongoose = require('mongoose')

let transactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    amount: { type: Number, required: true },
    type: { type: String, required: true, min: 1, required: true },
  },
  {
    timestamps: true,
  }
)

let Transaction = mongoose.model('transaction', transactionSchema)

module.exports = Transaction
