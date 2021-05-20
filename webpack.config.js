const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: ['web', 'es5'],
  entry: ['@babel/polyfill','whatwg-fetch','./src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  resolve :{
    alias :{
      Style : path.resolve(__dirname,'./src/css')
    }
  },
  module:{
    rules : [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test : /\.css$/,
        use : [MiniCssExtractPlugin.loader,'css-loader']
        // use: [ 'style-loader','css-loader'] 
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: 'assets/[name].[ext]'
        },
      },
    ]
  },
  plugins :[
    new CleanWebpackPlugin({
       cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      title: "Vanillajs",
      filename :"index.html",
      template : "src/index.html"
    }),
    new MiniCssExtractPlugin({filename : 'app.css'})
  ]
};