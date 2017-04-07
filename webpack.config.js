var path  = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, "./app/index")

  ],
  output : {
    path : path.join(__dirname,'./'),
    filename : 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        options : {
          presets : ['react','es2015']
        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader:'css-loader',
              options : {modules : true,importLoaders : 1}
            }, {loader : 'sass-loader',options : {outputStyle : 'expanded'}}]
        })
      }
    ]
  },
  resolve : {
    alias : {
      '@components' : path.join(__dirname,'./app/javascript/components'),
      '@data'  :path.join(__dirname,'./app/javascript/data')
    },
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  plugins: [
      new ExtractTextPlugin('[name].css'),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
      template : './app/template.html',
      inject:'body',
      filename : 'index.html'
    }),
  ]
}
