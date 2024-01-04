const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = (env)=>{
  return {
    entry: {
      app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader'],
       },
     ],
   },
    plugins: [
      new HtmlWebpackPlugin(    {template: path.resolve(_s_dirname, 'public', 'index.html')}),
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: env.mode ?? 'development',
   optimization: {
     usedExports: true,
   },
  };
} 