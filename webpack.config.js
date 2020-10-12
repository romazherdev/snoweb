const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  entry: './demo/example.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      cleanStaleWebpackAssets: false,
      template: './demo/index.html'
    }),
  ],
});
