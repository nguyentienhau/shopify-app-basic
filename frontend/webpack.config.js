const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const frontendConfig = {
	host: "localhost",
	port: "3000",
};

if (process.env.HOST) {
	frontendConfig.host = process.env.HOST.replace(/https?:\/\//, "");
	frontendConfig.port = process.env.FRONTEND_PORT;
}

module.exports = function (env, argsObject) {
	return {
		entry: "./src/index.jsx",
		output: {
			path: path.join(__dirname, argsObject.mode || "build"),
			filename: "index.js",
		},
		target: ["web"],
		devServer: {
			static: {
				directory: "public",
			},
			...frontendConfig,
			historyApiFallback: true,
		},
		resolve: {
			modules: ["src", "node_modules", "styles"],
			extensions: [".js", ".jsx", ".ts", ".tsx"],
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx|ts|tsx)$/,
					exclude: /node_modules/,
					use: ["babel-loader"],
				},
				{
					test: /\.(css|scss|sass)$/,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.(png|jpeg|jpg|bmp|svg|gif)$/,
					use: ["file-loader"],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "public/index.html",
			}),
		],
	};
};
