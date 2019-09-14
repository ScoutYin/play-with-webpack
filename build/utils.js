const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.cssLoaders = (options = {}) => {
	const cssLoader = {
		loader: 'css-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	const postcssLoader = {
		loader: 'postcss-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	/**
	 * 生成sass-loader的prependData的 @import 
	 * @param {Array} files eg. ['var.scss']
	 */
	const generateSassPrependData = (files) => {
		const urls = files.map(it => path.join('~@assets/style/', it))
		return urls.map(it => `@import '${it}';`).join('\n')
	}

	const generateLoaders = (loader, loaderOptions) => {
		const loaders = options.usePostcss ? [cssLoader, postcssLoader] : [cssLoader]

		if (loader) {
			const loaderItem = {
				loader: `${loader}-loader`,
				options: {
					...loaderOptions,
					sourceMap: options.sourceMap
				}
			}
			// sass-loader 可配置prependData
			if (loader === 'sass') {
				loaderItem.options.prependData = generateSassPrependData(['var.scss'])
			}
			loaders.push(loaderItem)
		}

		return options.extractCss
			? [MiniCssExtractPlugin.loader, ...loaders]
			: ['vue-style-loader', ...loaders]
	}

	return {
		css: generateLoaders(),
		postcss: generateLoaders(),
		less: generateLoaders('less'),
		sass: generateLoaders('sass', { indentedSyntax: true }),
		scss: generateLoaders('sass'),
		stylus: generateLoaders('stylus'),
		styl: generateLoaders('stylus')
	}
} 

exports.styleLoaders = (options = {}) => {
	const output = []

	const loaders = exports.cssLoaders(options)

	for (let extension in loaders) {
		output.push({
			test: new RegExp('\\.' + extension + '$'),
			use: loaders[extension]
		})
	}

	return output
}
