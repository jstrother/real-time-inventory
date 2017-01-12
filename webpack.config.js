const path = require('path'),
      webpack = require('webpack');

module.exports = {
	entry: './components/index.jsx',
	output: {
		path: `${__dirname}/js`,
		filename: 'scripts-webpack.js'
	},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: [
					'latest',
					'react'
				],
				plugins: [
					'transform-class-properties'
				]
			}
		}]
	}
};