require('dotenv').config()
const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: resolve('./src/GameOfChips.js'),
  mode: process.env.WEBPACK_MODE,
  output: {
    path: resolve('./dist'),
    filename: 'bundle.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}
