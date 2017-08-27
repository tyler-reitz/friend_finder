const assert = require('assert')
const diffScores = require('../app/lib/diffScores')

describe('diffScore', function () {
  
  it('should return a positive integer', function () {
    assert.strictEqual(0, diffScores([1], [1]))
    assert.strictEqual(0, diffScores([1, 2], [1, 2]))
    assert.strictEqual(2, diffScores([1, 2], [2, 1]))
    assert.strictEqual(4, diffScores([1, 2, 3], [3, 2, 1]));    
  })
  
})