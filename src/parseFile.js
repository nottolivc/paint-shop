const { readFileSync } = require('fs');

const parseFile = (filePath) => {
  const content = readFileSync(filePath, 'utf8')
  const lines = content.split(/[\r\n]+/)

  const numColors = parseInt(lines.shift(), 10)
  const customerPreferences = lines
    .map(line => line.split(/\s+/))
    .filter(records => Boolean(records[0] !== '')) 
    .map(l => l.reduce((accum, current) => { 
      if (current === 'M' || current === 'G') {
        accum[accum.length - 1].finish = current
      } else {
        accum.push({ color: parseInt(current, 10) })
      }
      return accum
    }, []))

  return { numColors, customerPreferences }
}

module.exports = parseFile
