 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 module.exports = {
   entry: "./src/index.js",
    module: {
    rules: [
    {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    {
    test: /\.html$/i,
    loader: "html-loader",
    },
    {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    },
    ],
    },
   plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    }),
  ],
   output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: 'assets/[name][hash][ext][query]',
    },
   optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
 };