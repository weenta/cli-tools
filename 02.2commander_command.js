#!/usr/bin/env node

/**
 * commander .command 语法
 */
const program = require('commander')
const chalk = require('chalk')
const logg = (msg) => { console.log(chalk.green(msg)) }
const logr = (msg) => { console.log(chalk.red(msg)) }

program
  .version('0.0.1')
  .option('-w, --weather [weather]', 'talking about weather')

// 问候
program
  .command('greet [name]')    // greet:命令, [name]:可选参数
  .description('greeting when you meet you friend')
  .action(function (name) {
    let greeting
    name = name || 'old friends'
    switch (program.weather) {
      case 'shiny':
        greeting = 'what a lovely day!'
        break
      case 'rain':
        greeting = 'nice to meet you in such a raining day!'
        break
      default:
        greeting = 'how r u'
    }
    let msg = `Hi ${name}, ${greeting}`
    logg(msg)
  })

// 点餐
program
  .command('order <food>') // order:命令, <food>:必填参数
  .description('name a food you for your dinner')
  .action(function (food) {
    let msg = `place wait sir, we will call you when your ${food} is ready`
    logr(msg)
  })

program.parse(process.argv)

