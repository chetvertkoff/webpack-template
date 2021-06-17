const webpack = require('webpack')
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.common');

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: baseWebpackConfig.externals.paths.dist,
    hot: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  target: 'web'
})

module.exports = devWebpackConfig;
