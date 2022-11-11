const express = require('express')
const crudController = require('./crudController')

const Transaction = require('../models/transactionModel')

const router = express.Router()

router.post('', crudController.post(Transaction))

router.get('', crudController.getAll(Transaction))

router.get('/transact', async (req, res) => {
  try {
    const transations = await Transaction.find({user: req.body.userId})
      .populate("user")
      .lean()
      .exec()
    return res.status(201).send({ transations })
  } catch (err) {
    return res.status(500).json({ status: 'failed', message: e.message })
  }
})



module.exports = router
