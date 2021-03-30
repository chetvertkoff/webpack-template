const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    path: PATHS.dist,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
    // JS
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        loaders: {
          js: 'babel-loader'
        }
      }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }
      ]
    }]
  },

  resolve: {
    extensions: ["*", ".vue", ".js"],
    alias: {
      "@": path.join(__dirname, "../src/App"),
      vue$: "vue/dist/vue.js"
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from: `${PATHS.src}/${PATHS.assets}icon`,
        to: `${PATHS.assets}icon`}
      ]
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: 'index.html',
      // inject: true
    }),
  ],
}
