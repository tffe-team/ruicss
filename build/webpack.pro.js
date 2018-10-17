/**
 * @file webpack 配置
 */

var fs = require('fs')
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = 'production'

function resolve(dir) {
  return path.join(__dirname,  dir)
}

module.exports = {
    entry: {
      entry : './views/index.js',
    },
    output: {
        path: path.join(__dirname, '../','min'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
        publicPath: '',
    },
    module: {
        rules: [
          {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
              })
          },
          {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
              })
          },
          {
              test: /\.(png|jpg|gif)?$/,
              loaders: ['url?limit=8192&name=[name]_[sha512:hash:base64:7].[ext]'],
          },
          {
              test: /\.(eot|woff|ttf|svg)$/,
              loader: 'file?limit=81920&name=[name]_[sha512:hash:base64:7].[ext]'
          },
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          }
        ]
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('sass'),
        'lib': resolve('sass/lib'),
        'usage': resolve('src/usage')
      }
    },
    externals: {},
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
            ,sourceMap: false
        }),
        new ExtractTextPlugin('[name].[contenthash:20].css')
    ]
};
