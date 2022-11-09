const express = require('express')
const crudController = require('./crudController')
const User = require('../models/userModel')

const { register } = require('./authController')

const router = express.Router()

router.post('/', register)
router.get('/', crudController.getAll(User))

module.exports = router
