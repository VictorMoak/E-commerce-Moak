const cors = require('cors')
const express = require('express')
const app = express()
const routes = require('./config/routes')
const bodyParser = require('body-parser')

app.use(cors())

app.use(routes)

app.use(express.json())

app.listen(4567)
