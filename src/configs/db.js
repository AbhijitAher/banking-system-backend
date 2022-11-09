const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@mini-projects.fm1ubcp.mongodb.net/enpointeIO-Banking-System`
  )
}

module.exports = connect
