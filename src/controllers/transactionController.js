const express = require('express')
const crudController = require('./crudController')

const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')

const router = express.Router()

router.post('', async (req, res) => {
  try {
    const item = await Transaction.create(req.body)
    const user = await User.findById(req.body.user)

    if (req.body.type == 'deposit') {
      user.set('balance', user.balance + req.body.amount)
    } else if (req.body.type == 'withdraw') {
      user.set('balance', user.balance - req.body.amount)
    }
    user.save()

    return res.status(201).send({ item, user })
  } catch (err) {
    return res.status(500).json({ status: 'failed', message: err.message })
  }
})

router.get('', crudController.getAll(Transaction))

router.get('/transact', async (req, res) => {
  try {
    const transations = await Transaction.find({ user: req.body.userId })
    //   .populate('user', { password: false })
      .lean()
      .exec()
    return res.status(201).send({ transations })
  } catch (err) {
    return res.status(500).json({ status: 'failed', message: e.message })
  }
})

module.exports = router
