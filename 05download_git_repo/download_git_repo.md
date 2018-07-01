# download_git_repo.md
> Download a git repository to a destination folder with options, and callback.

## API
`download(repo, destination, options, callback)`

## notes
- 如果`destination`已存在， 会被覆盖掉
- repo    
  master分支可简写为： `weenta/cli_tools_test`    
  其他分支： `weenta/cli_tools_test#dev`

  