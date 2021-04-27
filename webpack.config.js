const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode : 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules : [
      {
        test : /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ] 
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          // publicPath: "./dist/assets",
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
      title: "Vanillajs"
    })
  ]
};