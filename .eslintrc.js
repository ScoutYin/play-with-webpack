module.exports = {
	root: true,
	// 设置解析器选项能帮助 ESLint 确定什么是解析错误，所有语言选项默认都是 false
	parserOptions: {
		parser: 'babel-eslint',
		// ecmaVersion: 6, // 不会自动启用es6全局变量，所以需要 { "env":{ "es6": true } }
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		es6: true, // 自动启用es6语法 该选项会自动设置 ecmaVersion 解析器选项为 6
		browser: true,
		node: true
	},

	// 指定全局变量，避免eslint发出 no-undef 警告
	// 设置为 "writable" 以允许重写变量，或 "readonly" 不允许重写变量
	// 使用字符串 "off" 禁用某个全局变量
	globals: {
		app: 'readonly'
	},

	extends: [
		// 四个级别： base/essential/strongly-recommended/recommended, 使用最高约束
		// https://vuejs.github.io/eslint-plugin-vue
		'plugin:vue/recommended',
		'standard'
	],
	plugins: [
		'vue'
	],
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
	}
}