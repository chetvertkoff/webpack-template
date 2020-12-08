const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  devtool: false,
  output: {
    path: baseWebpackConfig.externals.paths.dist,
    publicPath: '/',
    filename: `${baseWebpackConfig.externals.paths.assets}js/[name].[contenthash].bundle.js`,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          filename: 'assets/js/vendor[name].js',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, postcssOptions: { config: `./build/postcss.config.js` } }
        }
      ]
    }]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: `${baseWebpackConfig.externals.paths.assets}css/[name].[contenthash].css`,
    }),
  ]
})

module.exports = buildWebpackConfig;
