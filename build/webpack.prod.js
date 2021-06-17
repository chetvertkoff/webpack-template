const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
    },
    minimize: true,
    minimizer: [new TerserPlugin(
      {
        terserOptions: {
          compress: {
            arrows: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            toplevel: false,
            typeofs: false,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true
          },
          mangle: {
            safari10: true
          }
        },
        parallel: true,
        extractComments: false
      }
    )],
  },
  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        },{
          loader: 'postcss-loader',
          options: { sourceMap: true, postcssOptions: { config: `./build/postcss.config.js` } }
        }
      ]
    }]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true }
          },
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: `${baseWebpackConfig.externals.paths.assets}css/[name].[contenthash].css`,
    }),
  ]
})

module.exports = buildWebpackConfig;
