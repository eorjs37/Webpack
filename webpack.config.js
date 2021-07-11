const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  name: "browser",
  mode: "development",
  target: ["web", "es5"],
  entry: ["@babel/polyfill", "whatwg-fetch", "./src/index.js"],
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      ImagePath: path.resolve(__dirname, "./src/assets"),
      Load: path.resolve(__dirname, "./src/load"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]",
        },
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
    new HtmlWebpackPlugin({
      title: "Vanillajs",
      filename: "index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "app.css" }),
  ],
  devServer: {
    port: 9001,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
