const path = require('path'); 
const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

const defaults = { 
	entry: './app/app.js', 
	output: { 
		path: path.join(__dirname, './dist'), 
		filename: 'bundle.js', 
	}, 
	devServer: { 
		contentBase: path.join(__dirname, "dist"), 
		compress: true, 
		port: 9000 
	}, 
	module: { 
		loaders: [{ 
			test: /\.js?$/, 
			exclude: /(node_modules)/, 
			loader: "babel-loader" 
		}, { 
			test: /\.css?$/, 
			loader: ['style-loader', 'css-loader'   ]
		}], 
	}, 
	plugins: [ 
		new webpack.NoEmitOnErrorsPlugin(), 
		new HtmlWebpackPlugin({ 
			template: path.join(__dirname, './app/index.html'), 
			filename: 'index.html', 
			inject: 'body' 
		}) 
	], 
	devtool: 'source-map',
}; 

module.exports = defaults;