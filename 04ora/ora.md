# ora

## API
- `.start()`
- `.stop()`
- `.succeed([text])`
- `.fail([text])`

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
  // spinner.stop()
  spinner.succeed(['success'])
}, 10000)

```