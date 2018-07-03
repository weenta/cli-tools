const async = require('async')
const Metalsmith = require('metalsmith')
const render = require('consolidate').handlebars.render

const manualData = {
  name: 'test_name',
  description: 'test_description',
  license: 'test_license',
  greet: 'hello world!'
}

const metalsmith = Metalsmith('../template')
  .use(template)
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

function template(files, metalsmith, done) {
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