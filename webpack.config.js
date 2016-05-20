var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports= {
  context : __dirname,
  entry: "./js/script.js",
  output: {
    path: __dirname,
    filename:'bundle-min.js'
  },
  devtool: debug ? 'inline-source-map' : null,
  plugins : debug ? [] : [
  new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false , sourcemap : false }),
  ],
  module : {
    loaders: [
      { test: /\.css$/, loader:'style!css!'},
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  }
};
