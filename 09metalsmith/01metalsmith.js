const async = require('async')
const Metalsmith = require('metalsmith')
const render = require('consolidate').handlebars.render
const path = require('path')
var sum = 0

const manualData = {
  name: 'tmp_demo4',
  description: 'test_description',
  // license: 'test_license',
  // greet: 'hello world!'
}
// let src = path.join('/Users/weenta/01data/05node/03cli_tools/', 'template')
let src = path.join('/Users/weenta/01data/05node/03cli_tools/template-vadmin-default/template')
let dest = path.join('/Users/weenta/01data/05node/03cli_tools/', manualData.name)
const metalsmith = Metalsmith(src)
  .use(renderTemplate)
  .source('.')
  .destination(dest)
  .build(function (err) {
    if (err) throw err
  })

/**
 * Template in place plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */

function renderTemplate(files, metalsmith, done) {
  var keys = Object.keys(files)
  console.log(keys)
  // async.each(keys, run, done)
  async.each(keys, (file, next) => {
    const str = files[file].contents.toString() // buffer流转成json格式
    // do not attempt to render files that do not have mustaches
    // hasMustaches 是否包含{{}}的文件
    let hasMustaches = /{{([^{}]+)}}/g.test(str)
    if (!hasMustaches) {
      return next()
    }
    // 渲染包含{{}}的文件,将inquirer获取到的值写入替换掉{{}}
    render(str, manualData, (err, res) => {
      if (err) {
        err.message = `[${file}] ${err.message}`
        return next(err)
      }
      files[file].contents = new Buffer(res)
      next()
    })
  }, done)

  // function run(file, done) {
  //   var str = files[file].contents.toString()
  //   console.log((sum++) + ' ' + file)
  //   render(str, manualData, function (err, res) {
  //     if (err) return done(err)
  //     files[file].contents = new Buffer(res)
  //     done()
  //   })
  // }
}