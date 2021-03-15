const { spawn } = require('child_process')
const { join } = require('path')

describe('Test base cases provided: ', () => {
  // if all cases pass, then basic functionality is working
  
  const cases = [
    ['case1.txt', 'G G G G M'],
    ['case2.txt', 'No solution exists'],
    ['case3.txt', 'G M G M G'],
    ['case4.txt', 'M M'],
  ]

  cases.forEach(([file, expectedOutput], index) => {
    test(`Case testing all ${index}`, done => {
      const executable = join(__dirname, '..', 'index.js')
      const terminal = spawn(executable, [ join(__dirname, '..', '..', 'testfiles', file) ])
      
      let output = ''

      terminal.stdout.on('data', function(data) {
        output += data
      })
      terminal.on('exit', function(code) {
        expect(output.trim()).toEqual(expectedOutput)
        done()
      })
      terminal.stdin.write('')
      terminal.stdin.end()
      done()
    })
  })
})