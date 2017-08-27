const diffAbs = require('./diffAbs')

module.exports = (f,u) => f.reduce((sum, val, idx) => sum + diffAbs(val, u[idx]), 0)