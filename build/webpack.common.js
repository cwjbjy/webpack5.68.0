//webpack.common.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
    clean: true, //每次构建清除dist包
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html",
    }),
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        generator: {
          filename: "static/img/[name].[hash:7][ext]",
        },
      },
      {
        test: /(\.jsx|\.js)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
