const chalk = require("chalk")
const log = console.log

// 输出蓝色 hello world
log(chalk.blue("hello world"))

// 输出红色 hello world
log(chalk.red("hello world"))

// 输出红色背景 hello world
log(chalk.bgRed("Hello world!"))

// 绿色前景 红色背景 加粗   
log(chalk.green.bgRed.bold("Hello world!"))

