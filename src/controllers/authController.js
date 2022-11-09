const e = require('express')
const User = require('../models/userModel')

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec()

    if (user) {
      return res.status(400).json({
        status: 'failed',
        message: 'Email already registeres, login instead.',
      })
    }

    user = await User.create(req.body)
    return res.status(201).json({ user })
  } catch {
    return res.status(500).json({ status: 'failed', message: e.message })
  }
}

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.query.email }).lean().exec()
    if (!user)
      return res.status(400).json({
        status: 'failed',
        message: "User doesn't exist, please create account with us.",
      })
      
    if (user.password != req.query.password)
      return res.status(400).json({
        status: 'failed',
        message: 'Enter Valid Credentials',
      })

    return res.status(200).send({ user })
  } catch (e) {
    return res.status(500).json({ status: 'failed', message: e.message })
  }
}

module.exports = { register, login }
