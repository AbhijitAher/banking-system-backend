const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    isBanker: { type: Boolean, required: true },
    balance: {type: Number, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const User = mongoose.model('user', userSchema)
module.exports = User
