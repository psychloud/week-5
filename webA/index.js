const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()
var urlencodeParser = bodyParser.urlencoded({extended: false})


app.use(cors())
app.use(jsonParser)
app.use(urlencodeParser)

app.get('/', (res) => {
  res.json('Website A')
})

app.post('/cek', (req, res) => {
  if ( req.body.secret !== 'secret123') {
    return res.status(403).json({ error: "Invalid secret" })
  }

  console.log('launching Webhook')
  res.json("")
})

app.listen(port, () => {
  console.log(`Example app listening at on port ${port}`)
})