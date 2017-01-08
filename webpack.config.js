const path = require('path'),
      webpack = require('webpack'),
      UglifyJsPlugin = require('uglify-js-plugin');

module.exports = {
	entry: './components/index.jsx',
	output: {
		path: `${__dirname}/public`,
		filename: 'scripts.js'
	},
	devtool: 'source-map',
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