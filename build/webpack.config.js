const path = require('path')

const resolve = (dir) => {
	return path.resolve(__dirname, dir)
}

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: resolve('dist')
	}
}