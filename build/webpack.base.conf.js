const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const config = require('../config')

const resolve = (dir) => {
	return path.resolve(__dirname, '..', dir)
}

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: config.prod.assetsRoot,
		publicPath: config.prod.assetsPublicPath
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		contentBase: '../dist'
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
		new CleanWebpackPlugin(),
		// if you got following error, you probably use vue-loader v15, so you have to use an extra plugin: VueLoaderPlugin
		// `vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.`
		new VueLoaderPlugin()
	]
}