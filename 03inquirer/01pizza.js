const inquirer = require('inquirer')
const logger = require('../01chalk/logger')

logger.log('Hi welcome to node pizza:')

const questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'is this for delivery?',
    default: false
  },
  {
    type: 'input',
    name: 'phone',
    message: 'what\'s your phone number?',
    validate: function (val) {
      if (/^1[3-9][\d]{9}$/.test(val)) return true
      else return 'please enter a valid phone number'
    }
  },
  {
    type: 'list',
    name: 'size',
    message: 'what size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter: function (val) {
      return val.toLowerCase()
    }
  },
  {
    type: 'list',
    name: 'comments',
    message: 'how do you feel about this purchase experance?',
    choices: ['just soso', 'good', 'excellent']
  },
  {
    type: 'list',
    name: 'prize',
    message: 'choose a your prize for your comments',
    choices: ['$5 cash', '$9 coupon'],
    when: function (answers) {
      return answers.comments === 'excellent'
    }
  }
]
inquirer.prompt(questions).then(answers => {
  logger.log(answers)
  // logger.cyan('toBeDelivered: ' + answers.toBeDelivered)
})