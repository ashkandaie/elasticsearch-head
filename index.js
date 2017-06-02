const express = require('express')
const app = express()

app.use(express.static('.'))

app.listen(9100, function () {
  console.log('elastic-head listening on port 9100!')
})