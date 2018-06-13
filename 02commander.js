#!/usr/bin/env node
/**
 * commander 基本语法
 */
var program = require('commander');

program
    .version('0.0.1')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

// commander 默认带有 -h -V option
// node 02commander.js -h
    // Usage: 02commander [options]
    // Options:

    // -V, --version        output the version number
    // -p, --peppers        Add peppers
    // -P, --pineapple      Add pineapple
    // -b, --bbq            Add bbq sauce
    // -c, --cheese [type]  Add the specified type of cheese [marble] (default: marble)
    // -h, --help           output usage information

console.log('you ordered a pizza with:');
console.log('---------------')
console.log(program.peppers)
console.log(program.pineapple)
console.log(program.bbq)
console.log(program.cheese)
console.log('---------------')
if (program.peppers) console.log('peppers');
if (program.pineapple) console.log('pineapple');
if (program.bbq) console.log('bbq',program.bbq);
// %s -> 命令行获取的值; （program.cheese 替换到 %s 的位置）
console.log('%s cheese', program.cheese);      // marble cheese
console.log('chee %s se', program.cheese);     // chee marble se

// 使用简写
// node 02commander.js -pc
    // you ordered a pizza with:
    // ---------------
    // undefined
    // undefined
    // undefined
    // marble
    // ---------------
    // peppers
    // marble cheese
    // chee marble se

// 使用全写+简写
// node 02commander.js --peppers -b
    // you ordered a pizza with:
    // ---------------
    // true
    // undefined
    // true
    // marble
    // ---------------
    // peppers
    // bbq
    // marble cheese
    // chee marble se

// 带参数
// node 02commander.js -c fff
    // you ordered a pizza with:
    // ---------------
    // undefined
    // undefined
    // undefined
    // fff
    // ---------------
    // fff cheese
    // chee fff se


