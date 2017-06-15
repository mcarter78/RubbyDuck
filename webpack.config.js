const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: './dist/js/[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './dist/styles/main.css',
      allChunks: true
    })
  ]
}
