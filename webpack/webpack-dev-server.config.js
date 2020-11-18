const webpack = require("./webpack.config");
const ip = require("ip");
const path = require("path");

module.exports = {
  ...webpack,
  plugins:
    (webpack.plugins || []) &&
    webpack.plugins.concat([
      //用户存放特殊plugins配置
    ]),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    disableHostCheck: true,
    host: ip.address() || "0.0.0.0",
    open: true,
    inline: true,
    proxy: {
      "*": {
        target: "127.0.0.1:9000",
      },
    },
  },
};
