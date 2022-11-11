const express = require('express')
const crudController = require('./crudController')

const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')

const router = express.Router()

router.post('', async (req, res) => {
  
  const data = req.body.data
  try {
    const item = await Transaction.create(data)
    const user = await User.findById(data.user)
    
    let balance;
    if (data.type == 'deposit') {
      user.set('balance', user.balance + data.amount)
      // balance = user.balance + data.amount
      // user.balance = user.balance + req.body.data.amount
    } else if (data.type == 'withdraw') {
      // balance = user.balance - data.amount
      user.set('balance', user.balance - data.amount)
      // user.balance = user.balance - req.body.data.amount
    }
    
    // user.set("balance", balance)
    user.save()
     

    return res.status(201).send({ item, user })
  } catch (err) {
    return res.status(500).json({ status: 'failed', message: err.message })
  }
})

router.get('', crudController.getAll(Transaction))

router.get('/transact', async (req, res) => {
  try {
    console.log(req.query)
    const transactions = await Transaction.find({ user: req.query.userID })
      //   .populate('user', { password: false })
      .lean()
      .exec()
    return res.status(201).send({ transactions })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ status: 'failed', message: err.message })
  }
})

module.exports = router
