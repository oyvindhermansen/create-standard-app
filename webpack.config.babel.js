import webpack from 'webpack';
import path from 'path';
import HotModuleReplacementPlugin from 'webpack-hot-middleware';

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './src',
    port: '1337',
    noInfo: true,
    hot: true,
    inline: true
  }
};
