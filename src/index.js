const parseFile = require('./parseFile');
const helper = require('./helper');

const execute = `
  Execution:

  ${process.argv[0]} ${process.argv[1]} <inputFile>
`
const inputFile = process.argv[2]

if (!inputFile) {
  console.error('Error: no input file specified, filename must follow index.js')
  console.log(execute)
  process.exit(1)
}

try {

  const data = parseFile(inputFile)
  const result = helper(data)
  console.log(result)
} catch (err) {
  console.error(err)
  process.exit(1)
}
