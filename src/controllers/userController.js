const express = require('express')
const crudController = require('./crudController')
const User = require('../models/userModel')

const { register, login } = require('./authController')

const router = express.Router()

router.get('/', login)
router.get('/', crudController.getOne(User))
router.get('/all', crudController.getAll(User))

router.post('/', register)
module.exports = router
