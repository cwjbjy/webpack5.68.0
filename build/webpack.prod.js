const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
    }),
    new CompressionPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "vendor",
      cacheGroups: {
        "echarts.vendor": {
          name: "echarts.vendor",
          priority: 40,
          test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
          chunks: "all",
        },
        lodash: {
          name: "lodash",
          chunks: "all",
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 40,
        },
        "async-common": {
          chunks: "async",
          minChunks: 2,
          name: "async-commons",
          priority: 30,
        },
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
          priority: 20,
        },
      },
    },
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    ],
  },
});
