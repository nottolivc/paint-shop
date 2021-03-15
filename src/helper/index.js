const candidateSol = require('./candidateSol')
const prepareCustomerPreferences = require('./preferences')
const checkSolution = require('./checkSolution')

const helper = ({ numColors, customerPreferences }) => {
  const pref = prepareCustomerPreferences(customerPreferences)
  const candidates = candidateSol(pref)

  for (let candidate of candidates()) {
    const solution = checkSolution(numColors, candidate, pref)
    if (solution) {
      return solution
    }
  }

  return 'No solution was found'
}

module.exports = helper
