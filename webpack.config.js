'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var colorFunction = require('postcss-color-function');
var cssVariables = require('postcss-simple-vars');

module.exports = {
  'devtool': 'eval',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/dev-server',
    './src/client.js'
  ],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/__build__/',
    publicPath: '/__build__/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?playground&experimental']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass']
      },
      {
        test: /\.(png|woff)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: [autoprefixer, colorFunction(), cssVariables()]
}
