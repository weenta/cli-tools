const download = require('download-git-repo')
const ora = require('ora')
const spinner = ora({
  color: 'green',
  text: 'downloading template...'
})

let path = '/Users/weenta/01data/05node/03cli_tools/test_down'
let repo = 'weenta/cli_tools_test'
let repo2 = 'weenta/cli_tools_test#dev'

spinner.start()
download(repo, path, (err) => {
  if (err) spinner.error([err.message])
  else spinner.succeed('success')
})