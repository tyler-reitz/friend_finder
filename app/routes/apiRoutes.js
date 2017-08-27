const path = require('path')
const express = require('express')
const router = express.Router()
const tally = require('../lib/tally')
const friends = require('../data/friends')/* ? */

router.get('/api/friends', (req, res) => {
  res.json(friends)
})

router.post('/api/friends', (req, res) => {
  res.json(tally(friends, req.body))
})

module.exports = router