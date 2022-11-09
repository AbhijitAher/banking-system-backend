const app = require('./index.js')
require('dotenv').config()
const connect = require('./configs/db')

app.listen(process.env.PORT, async () => {
  await connect()
  console.log(`Server is live now on PORT ${process.env.PORT}`)
})
