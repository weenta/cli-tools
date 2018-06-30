# inquirer
> A collection of common interactive command line user interfaces.
[documentation](https://www.npmjs.com/package/inquirer#documentation)

## 语法
```js
// questions 对象或对象数组
// answers 对象
inquirer.prompt(questions).then(answers => {})
```

### questions 参数
- `type` 类型

|可选值     |类型      |其他|      
|----------|---------|-----|    
|confirm   |boolean  |  默认false  |    
|input     |-        |通过validate进行验证|   
|list      |-        |须搭配`choice`使用| 
|...                      |
[for more](https://www.npmjs.com/package/inquirer#questions)


- `name` key

- `message` 提示信息

- `default` 默认值

- `validate` 验证器 type为input时验证 function(){}
必须返回boolean值

- `choices`  (Array|Function) type为list时使用

- `filter` (Function) 过滤器， 过滤用户输入的值

- `when` (Function（answers）) 当 answers中的某一属性满足条件时调用该question
```js
  {
    type: 'list',
    name: 'prize',
    message: 'choose a your prize for your comments',
    choices: ['$5 cash', '$9 coupon'],
    when: function (answers) {
      return answers.comments === 'excellent'
    }
  }
```