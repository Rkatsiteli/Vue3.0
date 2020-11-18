const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("./webpack.config");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  ...webpack,
  plugins:
    (webpack.plugins || []) &&
    webpack.plugins.concat([
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(`src/assets/`),
            to: `assets/`,
          },
        ],
      }),
    ]),
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
