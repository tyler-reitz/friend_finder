const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'home.html'))
})

router.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'survey.html'))
})

module.exports = router