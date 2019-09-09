const utils = require('./utils')
const config = require('../config')

const ENV_IS_DEV = process.env.NODE_ENV === 'development'

const cssSourceMap = ENV_IS_DEV ? config.dev.cssSourceMap : config.prod.cssSourceMap

module.exports = {
	loaders: utils.cssLoaders({
		extractCss: !ENV_IS_DEV,
		sourceMap: cssSourceMap
	}),
	cssSourceMap: cssSourceMap,
  	cacheBusting: config.dev.cacheBusting,
  	transformToRequire: {
		video: ['src', 'poster'],
		source: 'src',
		img: 'src',
		image: 'xlink:href'
	}
}