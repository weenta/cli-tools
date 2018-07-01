const ora = require('ora')

// const spinner = ora('Loading unicorns').start()
const spinner = ora({
  color: 'green',
  text: 'hello world'
}).start()

setTimeout(() => {
  spinner.color = 'yellow'
  spinner.text = 'Loading rainbows'
}, 2000)

setTimeout(() => {
  // spinner.stop()
  spinner.succeed(['success'])
  spinner.fail(['error'])
  spinner.warn(['warn'])
}, 4000)

