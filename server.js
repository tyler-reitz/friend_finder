const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.json({ type: 'application/*+json'}))

app.use(express.static('app/public'))

app.use(require("./app/routes/htmlRoutes"))
app.use(require("./app/routes/apiRoutes"))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))