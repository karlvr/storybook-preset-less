function wrapLoader(loader, options) {
	if (!loader || options === false) {
		return [];
	}

	return [
		{
			loader,
			options,
		},
	];
}

function webpack(webpackConfig = {}, options = {}) {
	const { module = {} } = webpackConfig;
	const {
		styleLoaderOptions,
		cssLoaderOptions,
		postcssLoaderOptions,
		lessLoaderOptions,
		rule = {},
	} = options;

	let postcssLoader;
	if (typeof postcssLoaderOptions === "object") {
		postcssLoader = require.resolve('postcss-loader');
	}

	return {
		...webpackConfig,
		module: {
			...module,
			rules: [
				...(module.rules || []),
				{
					test: /\.less$/,
					...rule,
					use: [
						...wrapLoader(require.resolve('style-loader'), styleLoaderOptions),
						...wrapLoader(require.resolve('css-loader'), cssLoaderOptions),
						...wrapLoader(postcssLoader, postcssLoaderOptions),
						...wrapLoader(require.resolve('less-loader'), lessLoaderOptions),
					],
				},
			],
		},
	};
}

module.exports = { webpack };
