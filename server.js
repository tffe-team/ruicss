var path = require("path");
var express = require('express');
var opn = require('opn');
var webpack = require("webpack");

var devConfig = require("./build/webpack.dev.js");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware')


var app = new express();
var port = '8282';
var host = '127.0.0.1';
var compiler = webpack(devConfig);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath:  devConfig.output.publicPath,
    stats: {color: true}
}))
app.use(webpackHotMiddleware(compiler))
app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
app.get(/element|fragment|layout|widget/, function(req, res, next) {
    res.sendFile(path.join(__dirname, 'views', req.path))
})
app.listen(port, function(error) {
    console.info("==> 🌎  Listening on port %s. Open up http://127.0.0.1 in your browser.", port, port)
    // opn(host + ':'+ port + '/')
})
