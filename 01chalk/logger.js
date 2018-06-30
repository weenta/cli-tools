const chalk = require('chalk')
const logger = console.log
module.exports = {
  // 青色
  cyan: (msg) => {
    logger(chalk.cyan(msg))
  },

  // 绿色
  green: (msg) => {
    logger(chalk.green(msg))
  },

  // 红色
  red: (msg) => {
    logger(chalk.red(msg))
  },

  // 默认色
  log: (msg) => {
    logger(msg)
  },
}