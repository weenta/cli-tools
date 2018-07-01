const download = require('download-git-repo')
const ora = require('ora')

const spinner = ora({
  color: 'green',
  text: 'downloading template ...'
})

let path = '/Users/weenta/01data/05node/03cli_tools/test_down'

// master分支
let repo = 'weenta/cli_tools_test'

// dev分支
let repo2 = 'weenta/cli_tools_test#dev'

// 不存在的分支-检验报错信息
let repo_error = 'weenta/cli_tools_test#error'

spinner.start()
download(repo_error, path, (err) => {
  if (err) spinner.fail([err.message])
  else spinner.succeed('success')
})
