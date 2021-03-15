const getSolution = (i, customerPrefs) => {
  const lengths = customerPrefs.map(l => l.length)
  let x = i
  const solutionIndexes = lengths.reverse().map(length => {
    const index = x % length
    x = Math.floor(x / length)
    return index
  }).reverse()
  const candidateSolution = solutionIndexes.map((index, line) => customerPrefs[line][index])

  return candidateSolution
}

const candidateSol = (customerPrefs) => function * getNext () {
  // total possible combinations is obtained by multiplying element in every set of pref at yield 1
  const combinations = customerPrefs.reduce((acc, curr) => acc * curr.length, 1)
  for (let i = 0; i < combinations; i++) {
    
    yield getSolution(i, customerPrefs)
  }

  return 
}

module.exports = candidateSol