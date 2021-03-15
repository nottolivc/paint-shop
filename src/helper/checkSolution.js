const hasAllPreferences = (result, customerPreferences) => {
  return customerPreferences.every(preferences => {
    return preferences.some(selection => result[selection.color - 1] === selection.finish)
  })
}

const checkSolution = (numColors, candidate, customerPreferences) => {
  const colors = Array.from({length: numColors}, i => null)
  const found = candidate.every(preference => {
    if (
      colors[preference.color - 1] &&
      (colors[preference.color - 1].readOnly || preference.readOnly) &&
      colors[preference.color - 1].finish !== preference.finish
    ) {
      return false 
    }

    colors[preference.color - 1] = Object.assign({}, colors[preference.color - 1], preference)
    return true 
  })

  if (!found) {
    return false
  }

  const result = colors
    .map((color, index) => {
      if (color) {
        return color
      }

      return ({
        color: index + 1,
        finish: 'G'
      })
    })
    .map(color => color.finish)

  // verify all pref for customer
  if (!hasAllPreferences(result, customerPreferences)) {
    return false
  }

  return result.join(' ')
}


module.exports = checkSolution