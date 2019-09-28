const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonConfig = require('./webpack.common')
const utils = require('./utils')
const config = require('../config')

module.exports = merge(commonConfig, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: utils.styleLoaders({ sourceMap: config.prod.cssSourceMap, usePostcss: true })
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		// new UglifyJSPlugin({
		// 	sourceMap: true
		// }),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	]
})