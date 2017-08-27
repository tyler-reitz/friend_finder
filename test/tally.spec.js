const assert = require('assert')
const tally = require('../app/lib/tally')

const db = require('../app/data/friends')
const usr = require('../app/data/mock')

describe('tally', function () {
  
  it('it should return an object of type User', function () {
    assert.deepStrictEqual({
      name: "Bad Luck Brian",
      photo: "http://media.veryfunnypics.eu/2013/08/bad-luck-brian-001.jpg",
      scores: [2, 3, 2, 5, 1]
    }, tally(db, usr))
  })
  
})