var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
if(app.get('env') === 'dev')
{
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
console.log('before compiler')
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler,{
        log: console.log,
        reload: true
    }));
}

app.use(express.static(path.join(__dirname, 'public'),{
  redirect : false,
  maxAge : '365 days'
}));
module.exports = app;
