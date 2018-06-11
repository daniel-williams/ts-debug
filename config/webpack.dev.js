const helpers = require('./helpers');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = helpers.root('src');
const DIST = helpers.root('dist');

module.exports = {
  context: ROOT,
  entry: {
    'app': './index.ts'
  },
  output: {
    filename: '[name].js',
    path: DIST
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      ROOT,
      'node_modules'
    ]
  },
  module: {
    rules: [
      /****************
      * PRE-LOADERS
      *****************/
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'tslint-loader'
      },

      /****************
      * LOADERS
      *****************/
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      showErrors: true
    }),
  ],
  devtool: 'source-map',
  devServer: {},
};
