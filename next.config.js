const { DefinePlugin } = require("webpack");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const { LOCALHOST, NODE_ENV, PORT } = process.env;
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

module.exports = {
	async headers() {
		return [
			{
				source: "/api/auth/:slug",
				headers: [
					{
						key: "Cache-Control",
						value: "no-store, max-age=0",
					},
				],
			},
		];
	},
};

const plugins = (isServer) => {
	const plugins = [];
	if (!isServer) {
		plugins.push(
			/* OPTIONAL -- append ENVS to client-side process */
			new DefinePlugin({
				"process.env": {
					LOCALHOST: JSON.stringify(LOCALHOST),
					NODE_ENV: JSON.stringify(NODE_ENV),
				},
			})
		);
	} else {
		plugins.push(
			/* add console compilation messages */
			NODE_ENV === "development" &&
				new FriendlyErrorsWebpackPlugin({
					compilationSuccessInfo: {
						messages: [
							`Local development build: \x1b[1m${LOCALHOST}\x1b[0m`,
						].filter(Boolean),
						notes: [
							"Note that the development build is not optimized.",
							"To create a production build, use \x1b[1m\x1b[32myarn export\x1b[0m.\n",
						],
					},
					clearConsole: false,
				})
		);
	}
	return plugins.filter(Boolean);
};

module.exports = {
	webpack(config, { isServer }) {
		/* adds custom plugins to client and/or server */
		config.plugins.push(...plugins(isServer));

		/* return new config to next */
		return config;
	},
};
const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
	/* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
	cssModules: true,
});
module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: [
          "react-syntax-highlighter",
        ]
      }
		],
	])
module.exports = {
	/* Add Your Scss File Folder Path Here */
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

// module.exports = {
// 	images: {
// 		loader: "imgix",
// 		path: "/",
// 	},
// };
