const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname,  dir)
}

module.exports = {
    devtool: '#cheap-module-eval-source-map',
    entry : './views/index.js',
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
        // 'fonts': resolve('sass/font')
      }
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
        new ExtractTextPlugin('app.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
}
