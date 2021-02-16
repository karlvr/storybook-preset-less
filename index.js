function wrapLoader(loader, options) {
	if (options === false) {
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
		lessLoaderOptions,
		rule = {},
	} = options;

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
						...wrapLoader(require.resolve('less-loader'), lessLoaderOptions),
					],
				},
			],
		},
	};
}

module.exports = { webpack };
