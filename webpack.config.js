const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "SSR",
      template: "./src/index.html",
    }),
    new MiniCss({
      filename: "[name].css",
    }),
  ],
};
