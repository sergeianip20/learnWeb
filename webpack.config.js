const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template, ProgressPlugin } = require('webpack');

module.exports = (env)=>{
  return {
    entry: {
      app: './src/index.ts',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin(    {template: path.resolve(__dirname, 'public', 'index.html')}),
      new ProgressPlugin(),
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