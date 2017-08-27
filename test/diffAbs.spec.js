const assert = require('assert')
const diffAbs = require('../app/lib/diffAbs')

describe('diffAbs', function () {
  
  it('should return a positive integer', function () {
    assert.strictEqual(2, diffAbs(2, 4))
  })

  it('should return a positive integer for strings args', function () {
    assert.strictEqual(2, diffAbs('3', 5))
    assert.strictEqual(2, diffAbs(3, '5'))
    assert.strictEqual(2, diffAbs('3', '5'))  
  })

  it('should return a positive integer for any amount of negative integer args', function () {
    assert.strictEqual(4, diffAbs(-1, 3))
    assert.strictEqual(4, diffAbs(1, -3))
    assert.strictEqual(2, diffAbs(-1, -3))
  })

})