const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: {
      import: "./src/app.js",
    },
  },
  output: {
    path: path.resolve("dist"),
    publicPath: "",
    filename: "index.min.js",
    chunkFilename: 'chunk/[name]/index.js',
    library: "bi",
    libraryTarget: "umd",
    umdNamedDefine: true,
    sourcePrefix: "\t", // 更改输出包中每行的前缀
  },
  externals: {
    vue: "Vue",
    iview: "iview",
  },
  module: {
    rules: [
      {
        test: /\.js(x)*$/,
        exclude: /^node_modules$/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|icon|ico|webp)$/,
        use: ["url-loader?limit=4192&name=imgs/[name].[hash:5].[ext]"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue", ".less", ".css"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      i18: path.resolve("src/lang/"),
      store: path.resolve("src/store/"),
      utils: path.resolve("src/utils/"),
      assets: path.resolve("src/assets/"),
      router: path.resolve("src/router/"),
      view: path.resolve("src/view/"),
      components: path.resolve("src/components/"),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/templates/index.html",
    }),
  ],
};

/*

npm i vue vue-loader vue-style-loader vue-template-compiler --save-dev

npm i webpack webpack-cli webpack-dev-server ip html-webpack-plugin clean-webpack-plugin --save-dev

npm i autoprefixer-loader babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 --save-dev

npm i style-loader css-loader less less-loader url-loader --save-dev

npm i eslint eslint-config-airbnb eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue eslint-plugin-jsx-a11y eslint-plugin-react -g

 */
