const mongoose = require('mongoose')

const strT = { type: String, required: true, trim: true }

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: strT,
    password: strT,
    isBanker: { type: Boolean, required: true },
    balance: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('user', userSchema)

module.exports = User
