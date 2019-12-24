/**
 * @file webpack 配置
 */

var fs = require('fs')
var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

process.env.NODE_ENV = 'production'

function resolve(dir) {
  return path.join(__dirname,  dir)
}

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
      'ruicss' : './views/index.js',
    },
    output: {
        path: path.join(__dirname, '../','min'),
        filename: '[name].min.js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.js', '.scss',],
        alias: {
          '@': resolve('sass'),
          'lib': resolve('sass/lib'),
          'usage': resolve('sass/usage')
        }
    },
    module: {
        rules: [
           {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        }
                    },
                  'css-loader',
                  'sass-loader',
                ],
           },
          {
              test: /\.(png|jpg|gif)?$/,
              loaders: ['url-loader?limit=8192&name=[name]_[sha512:hash:base64:7].[ext]'],
          },
          {
              test: /\.(eot|woff|ttf|svg)$/,
              loader: 'url-loader?limit=81920&name=[name]_[sha512:hash:base64:7].[ext]'
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
        new MiniCssExtractPlugin({
            filename: 'ruicss.min.css',
            allChunks: true,
         }),
        new OptimizeCSSPlugin({
            cssProcessorOptions:{ safe: true, map: { inline: false } }
        })
    ]
};
