const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../node_modules', '.cache')
  },
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
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        'thread-loader',
        'babel-loader',
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
          },
        },
      ],
    },{
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
        test: /\.(scss|sass|css)$/,
        use: [
          'thread-loader',
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
    }]
  },

  resolve: {
    extensions: ["*", ".tsx", ".ts", ".js"],
    alias: {
      '@': path.join(__dirname, '../src'),
    }
  },



  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {from: `${PATHS.src}/${PATHS.assets}icon`,
    //     to: `${PATHS.assets}icon`}
    //   ]
    // }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: 'index.html',
    }),
  ],
}
