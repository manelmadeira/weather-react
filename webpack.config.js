const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['css-loader', 'style-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?.+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        }
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig,
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}