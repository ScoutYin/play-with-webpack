const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const commonConfig = require('./webpack.common')
const utils = require('./utils')
const config = require('../config')

const devConfig = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '/',
		hot: true,
		port: 8000,
		quiet: true
	},

	module: {
		rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostcss: true })
	},
	plugins: [
		// 需要devServer配合 quiet: true
		new FriendlyErrorsPlugin({
			compilationSuccessInfo: {
				messages: ['Your application is running here: http://localhost:8000'],
				notes: ['Success!']
			},
			onErrors: function (severity, errors) {
				// You can listen to errors transformed and prioritized by the plugin
				// severity can be 'error' or 'warning'
			  },
			// should the console be cleared between each compilation?
			 // default is true
			clearConsole: true,
			// add formatters and transformers (see below)
  			additionalFormatters: [],
  			additionalTransformers: []
		}),
		new StylelintPlugin({
			files: '**/*.s?(a|c)ss',
			// true 以error形式提示  false以警告形式提示
			// https://github.com/webpack-contrib/stylelint-webpack-plugin#emiterrors
			emitErrors: false
		})
	]
})

module.exports = devConfig
