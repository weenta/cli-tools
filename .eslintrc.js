module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    // for vue proj
    "plugin:vue/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": [
      "warn"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-mixed-spaces-and-tabs": [
      "error"
    ],
    "constructor-super": [
      "error"
    ],
    "no-this-before-super": [
      "error"
    ],

    // 最大空行1
    "no-multiple-empty-lines": [
      "error",
      { "max": 1 }
    ],

    // {} 内部前后有空格
    "block-spacing": [
      "error",
      "always"
    ],

    // 禁止多空格 评论除外
    "no-multi-spaces": [
      "error",
      { "ignoreEOLComments": true }
    ],

    // 关键字后有空格
    "keyword-spacing": ["error", {
      "before": false,
      "after": true
    }],

    // 操作符前后有空格
    "space-infix-ops": [
      "error"
    ],

    "no-console": [
      "off"
    ],
  },
  // for vue proj
  "plugins": [
    "vue"
  ]
};
