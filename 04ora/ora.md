# ora

```js
const ora = require('ora')

// const spinner = ora('Loading unicorns').start()
const spinner = ora({
  color: 'green',
  text: 'hello world'
}).start()

setTimeout(() => {
  spinner.color = 'yellow'
  spinner.text = 'Loading rainbows'
}, 5000)

setTimeout(() => {
  spinner.stop()
}, 10000)

```