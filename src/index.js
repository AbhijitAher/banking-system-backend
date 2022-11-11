const express = require('express')
const userController = require('./controllers/userController')
const transactionController = require('./controllers/transactionController')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/user', userController)
app.use('/transaction', transactionController)

module.exports = app
