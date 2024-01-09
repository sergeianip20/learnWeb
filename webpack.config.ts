import  path  from 'path';
import  HtmlWebpackPlugin from'html-webpack-plugin';
import   webpack  from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development'
 interface EnrVariables {
  mode: Mode
  port: number
 }

export default  (env: EnrVariables)=>{
  const isDev = env.mode === 'development'
  const config: webpack.Configuration = { 
    entry: {
    app: './src/index.tsx',
  },
  devtool: isDev ? 'inline-source-map': false ,
  devServer: isDev ?  {
    static: './dist',
    port: env.port ?? 3000,
    open:true

  }: undefined,
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
    new webpack.ProgressPlugin(),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: env.mode ?? 'development',
 optimization: {
   usedExports: true,
   runtimeChunk: 'single',
 },}
  return config
    
  
} 