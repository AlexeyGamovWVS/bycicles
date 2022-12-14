const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		main: "./src/scripts/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		publicPath: "",
	},
	mode: "development",
	devtool: "source-map",
	devServer: {
		static: path.resolve(__dirname, "./dist"),
		open: true,
		compress: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: "/node_modules/",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
				type: "asset/resource",
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					"postcss-loader",
				],
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
						},
					},
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
};
