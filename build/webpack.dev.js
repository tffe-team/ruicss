const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname,  dir)
}

module.exports = {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    entry : {
        app: './views/index.js'
    },
    output: {
        path : path.resolve(__dirname, "assets"),
        publicPath : "/assets/",
        filename: 'app.js'
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
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: '/'
                        }
                    },
                  'css-loader',
                  'sass-loader',
                ],
           },
            {
                test: /\.(png|jpg|gif)?$/,
                loaders: ['url-loader?limit=8192&name=[name]_[sha512:hash:base64:7].[ext]']
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
