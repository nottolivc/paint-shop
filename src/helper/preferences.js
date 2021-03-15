const sortColor = (a, b) => {
  // G is always smaller than M
  if (a.finish === 'G' && b.finish === 'M') {
    return -1
  }

  // M is always bigger than G
  if (a.finish === 'M' && b.finish === 'G') {
    return 1
  }

  // if same finish, sort by color ascendent
  return a.color - b.color
}

const preferences = (customerPreferences) =>
  customerPreferences
    // sort by finish and color
    .map(l => l.sort(sortColor))
    .map(l => {
      if (l.length === 1) {
        l[0].readOnly = true
      }

      return l
    })

module.exports = preferences