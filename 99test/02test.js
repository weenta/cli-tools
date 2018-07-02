const program = require('commander')
const path = require('path')
// 问候
program
  .command('init')
  .description('greeting when you meet you friend')
  .action(() => {
    console.log(program.args[0])  // webpack
    console.log(program.args[1])  // vuedemo
    let name = program.args[1]
    let to = path.resolve(name)
    let joinTo = path.join(name)
    console.log(to)
    console.log(joinTo)
  })

program.parse(process.argv)

// node 02test.js  init webpack vuedemo