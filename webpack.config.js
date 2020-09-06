const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: resolve('./src/GameOfChips.js'),
  mode: 'development',
  output: {
    path: resolve('./dist'),
    filename: 'bundle.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}
