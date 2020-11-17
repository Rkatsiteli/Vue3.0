const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('./webpack.config');
const version = process.env.npm_package_version;

const plugins = webpack.plugins && webpack.plugins.concat([
  new CleanPlugin(['*'], {
    root: path.resolve('dist'),
    verbose: true,
    dry: false,
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve('package.json'),
    }, {
      from: path.resolve(`src/assets/`),
      to: `assets/`,
    }
  ]),
]);

module.exports = {
  ...webpack,
  plugins,
  optimization: {
    /* runtimeChunk: {
      name: 'manifest',
    }, */
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          //name: '../assets/js/vendor',
          chunks: 'all',
        },
      },
    },
  },
};
