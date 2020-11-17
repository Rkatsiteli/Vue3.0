const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("./webpack.config");
const ip = require("ip");

module.exports = {
  ...webpack,
  plugins:
    (webpack.plugins || []) &&
    webpack.plugins.concat([
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/templates/index.html",
      }),
    ]),
  devServer: {
    disableHostCheck: true,
    host: ip.address() || "0.0.0.0",
    port: 9000,
    open: true,
    inline: true,
    proxy: {
      "*": {
        target: "127.0.0.1",
      },
    },
  },
};
