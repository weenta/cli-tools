const async = require('async')
const Metalsmith = require('metalsmith')
const render = require('consolidate').handlebars.render
const path = require('path')

const manualData = {
  name: 'tmp_demo',
  description: 'test_description',
  license: 'test_license',
  greet: 'hello world!'
}
let src = path.join('/Users/weenta/01data/05node/03cli_tools/', 'template')
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
  async.each(keys, run, done)

  function run(file, done) {
    var str = files[file].contents.toString()
    render(str, manualData, function (err, res) {
      if (err) return done(err)
      files[file].contents = new Buffer(res)
      done()
    })
  }
}