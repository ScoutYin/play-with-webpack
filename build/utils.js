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

	const generateLoaders = (loader, loaderOptions) => {
		const loaders = options.usePostcss ? [cssLoader, postcssLoader] : [cssLoader]

		if (loader) {
			loaders.push({
				loader: `${loader}-loader`,
				options: {
					...loaderOptions,
					sourceMap: options.sourceMap
				}
			})
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
