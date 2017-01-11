const path = require('path'),
      webpack = require('webpack'),
      UglifyJsPlugin = require('uglify-js-plugin');

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
				]
			}
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		   compress: {
		     warnings: false
		   },
		   mangle: false
		 }),
		'transform-class-properties'
	]
};