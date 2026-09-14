const { DefinePlugin } = require("webpack");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const { LOCALHOST, NODE_ENV } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	webpack(config, { isServer }) {
		if (!isServer) {
			config.plugins.push(
				new DefinePlugin({
					"process.env": {
						LOCALHOST: JSON.stringify(LOCALHOST),
						NODE_ENV: JSON.stringify(NODE_ENV),
					},
				})
			);
		} else if (NODE_ENV === "development") {
			config.plugins.push(
				new FriendlyErrorsWebpackPlugin({
					compilationSuccessInfo: {
						messages: [`Local development build: ${LOCALHOST || "http://localhost:3000"}`],
						notes: ["The development build is not optimized."],
					},
					clearConsole: false,
				})
			);
		}

		return config;
	},
};

module.exports = nextConfig;
