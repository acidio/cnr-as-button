let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractSASS = new ExtractTextPlugin('cnr-as-button.min.css');
let autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    './src/index',
    './src/sass/main.scss'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'cnr-as-button.min.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
        test: /\.js$/,
        loaders: [ 'babel' ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/i,
        loader: extractSASS.extract(['css-loader?minimize','postcss-loader','sass-loader'])
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    extractSASS
  ]
};
