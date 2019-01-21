const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/main.js',
	},
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: '[name].js'
		publicPath: "/",
	},
	resolve: {
		modules: ['node_modules'],
		extensopms: ['.js', '.jsx', '.json', '.css']
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			Popper: ['popper.js', 'default']
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [{
			test: /\.(scss)$/,
			use: [
				{
					loader:"style-loader"
				},
				{
					loader: "css-loader"
				},
				{
					loader: "postcss-loader"
					option: {
						plugin: function(){
							return [
								require('autoprefixer')
							]
						}
					}
				},
				{
					loader:"scss-loader"
				}
			]
		}]
	},
	devServer: {
		contentBase: __dirname + '/public/',
		inline: true,
		hot: true,
		host: '0.0.0.0',
		Port: 3000
	}
};
