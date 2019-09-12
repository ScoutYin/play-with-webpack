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
	// 将遇到的资源 URL 转换为 webpack 模块请求
	// 比如 <img src="../image.png"> 将会被编译成为：
	// createElement('img', {
	// attrs: {
	// 	src: require('../image.png') // 现在这是一个模块的请求了
	// }
	// })
  	transformToRequire: {
		video: ['src', 'poster'],
		source: 'src',
		img: 'src',
		image: 'xlink:href'
	}
}