const path = require('path')

module.exports = {
	assetsRoot: path.resolve(__dirname, '../dist'),
	assetsPublicPath: './', // 决定了打包后html中引入文件的基础路径

	cssSourceMap: true
}