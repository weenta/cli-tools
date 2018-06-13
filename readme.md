# 搭建cli脚手架常用工具说明     

## chalk     
[chalk](https://www.npmjs.com/package/chalk)  
> 命令行输出彩色信息(粉笔)          
```js
    const chalk = require('chalk')
    const log = console.log

    // 输出蓝色 hello world
    log(chalk.blue("hello world"))

    // 输出红色 hello world
    log(chalk.red('hello world'))

    // 输出红色背景 hello world
    log(chalk.bgRed('Hello world!'));

    // 绿色前景 红色背景 加粗   
    log(chalk.green.bgRed.bold('Hello world!'))
```

## commander
[commander](https://www.npmjs.com/package/commander) 
[API documentation](http://tj.github.io/commander.js/)       
> The complete solution for node.js command-line interfaces     

http://blog.gejiawen.com/2016/09/21/make-a-node-cli-program-by-commander-js/        
http://blog.fens.me/nodejs-commander/       
http://www.imooc.com/article/3156   