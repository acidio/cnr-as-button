let path = require('path');
let webpack = require('webpack');
let autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'eventsource-polyfill', // necessary for hot reloading with IE
    //'webpack-hot-middleware/client', // add float with lint erros
    './src/demo/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: [ '', '.json', '.js' ]
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loaders: [ 'babel', 'eslint-loader' ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/i,
        loaders: ['style-loader','css-loader?sourceMap','postcss-loader','sass-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?limit=100000&name=img/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};
