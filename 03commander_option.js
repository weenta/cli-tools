#!/usr/bin/env node

/**
 * commander option 语法
 */
const program = require('commander')


// 语法
// .option('-简写','--全写 [可选参数]','注释','默认值（可选）')
// .option('-简写','--全写 <必填参数>','注释','默认值（可选）')

program
    .version('0.0.2')
    .option('-p, --province [province]', '填写省')      // -p 带可选参数 不写参数返回true
    .option('-c, --city [city]>', '填写市',"泉州市")    // -c 带可选参数 带默认值(泉州市) 不写返回默认值
    .option('-C, --county <county>', '县区')                // 必填参数 执行-C 必填county参数
    .option('-s, --street <street>', '街道','东海街道')      // 必填参数  执行-s 必填street参数
    .parse(process.argv);

console.log(program.province)
console.log(program.city)
console.log(program.county)
console.log(program.street)

// node 03commander_option.js -h
    // Usage: 03commander_option [options]

    // Options:

    //   -V, --version              output the version number
    //   -p, --province [province]  填写省
    //   -c, --city [city]>         填写市 (default: 泉州市)
    //   -C, --county <county>      县区
    //   -s, --street <street>      街道 (default: 东海街道)
    //   -h, --help                 output usage information

// 不带任何命令和参数
// node 03commander_option.js
    // undefined
    // 泉州市
    // undefined
    // 东海街道


// node 03commander_option.js -p    // === node 03commander_option.js -pc
    // true
    // 泉州市
    // undefined
    // 东海街道


// node 03commander_option.js -pcC
    // error: option `-C, --county <county>' argument missing

// node 03commander_option.js -pcC 丰泽区
    // true
    // 泉州市
    // 丰泽区
    // 东海街道

// node 03commander_option.js -pcC 丰泽区 -s 北峰街道
    // true
    // 泉州市
    // 丰泽区
    // 北峰街道