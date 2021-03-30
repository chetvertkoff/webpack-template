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
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = devWebpackConfig;
