const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '/',
		hot: true,
		port: 8000,
		quiet: true
	},
	plugins: [
		// 需要devServer配合 quiet: true
		new FriendlyErrorsPlugin({
			compilationSuccessInfo: {
				messages: ['You application is running here: http://localhost:8000'],
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
		})
	]
})