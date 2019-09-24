module.exports = {
	plugins: [
		require('postcss-import'),
		require('autoprefixer'), // 需指定browserslist，才能生效
		require('postcss-flexbugs-fixes')
	]
}