const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('../config')

const ENV_IS_DEV = process.env.NODE_ENV === 'development'

const resolve = (dir) => {
	return path.resolve(__dirname, '..', dir)
}

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: config.prod.assetsRoot,
		publicPath: ENV_IS_DEV
			? config.dev.assetsPublicPath
			: config.prod.assetsPublicPath // 决定了打包后html中引入文件的基础路径
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		contentBase: '/',
		hot: true,
		port: 8000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				include: [resolve('src')]
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			}
		]
	},
	plugins: [
		// new CleanWebpackPlugin(),
		// if you got following error, you probably use vue-loader v15, so you have to use an extra plugin: VueLoaderPlugin
		// `vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.`
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			title: 'Play with webpack',
			inject: 'body', // 指定将资源放在index.html中哪个地方引入，true | body（默认）会把script放在body的底部，还有head或者false
			template: 'index.html'
		})
	]
}