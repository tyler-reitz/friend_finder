const assert = require('assert')
const tally = require('../app/lib/tally')

const db = require('../app/data/friends')
const usr = require('../app/data/mock')

describe('tally', function () {
  
  it('it should return an object of type User', function () {
    assert.deepStrictEqual({
      name: "test5",
      photo: "http://media.veryfunnypics.eu/2013/08/bad-luck-brian-001.jpg",
      scores: [2, 2, 2, 2, 2]
    }, tally(db, usr))
  })
  
})