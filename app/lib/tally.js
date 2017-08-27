const diffScores = require('../lib/diffScores')

module.exports = (possibleMatches, usersAnswers) => {
  const uScores = usersAnswers.scores
  let match,
      diff  
  
  possibleMatches.forEach(isMatch => {
    const mScores = isMatch.scores
    
    if (!match) {
      match = isMatch
    }

    if (diffScores(mScores, uScores) < diff) {
      match = isMatch
    }

    diff = diffScores(mScores, uScores)
  })

  return match
}