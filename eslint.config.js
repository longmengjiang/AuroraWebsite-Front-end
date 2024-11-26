import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  oxlint.configs['flat/recommended'],

  {
    rules: {
      //  前置条件：
      //  1.  禁用格式化插件 prettier    并且 format on save 关闭
      //  2.  安装EsLint插件，并配置保存时自动修复
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true, // 单引号
          semi: false, //无分号
          printWidth: 80, // 单行代码最大长度
          trailingComma: 'none', //不在对象/数组最后加逗号
          endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
        }
      ],

      // ESLint关注于代码规范，若不规范，报错
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'] // vue组件名称必须多单词组成(忽略index.vue)
        }
      ],

      'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验(props解构会丢失响应式)

      // 'no-undef': 'error' // 添加未定义变量错误提示，create-vue@3.6.3 关闭，这里加上是为了支持下一个章节演示
      'no-undef': 'off' // 这是ai给的，上面是视频给的，为什么要开这个设定，因为下面的ELMessage等会报错，但是这不是长久的方案
    }
  },

  skipFormatting
]
