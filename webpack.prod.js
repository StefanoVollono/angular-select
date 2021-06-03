const path = require("path");
const buildPath = path.resolve(__dirname, "dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: "source-map",

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: './src/lib/angular-select.js',

  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: "angular-select-directive.min.js",
    path: buildPath,
    clean: true,
    library: {
      name: "angularSelectDirective",
      type: "umd"
    },  
  },

  // externals: {
  //   angular: {
  //     commonjs: 'angular',
  //     commonjs2: 'angular',
  //     amd: 'angular',
  //     root: 'angular',
  //   },
  // },

  // https://webpack.js.org/concepts/loaders/
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: "babel-loader",
    //     options: {
    //       presets: ["@babel/preset-env"],
    //     },
    //   },
      
    // ],
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "lib/*",
    //       context: "./src/",
    //     },
    //   ],
    // }),
  ],

  // https://webpack.js.org/configuration/optimization/
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     (compiler) => {
  //       const TerserPlugin = require('terser-webpack-plugin');
  //       new TerserPlugin({
  //         terserOptions: {
  //               compress: {},
  //           }
  //       }).apply(compiler);
  //     },
  //     new CssMinimizerPlugin(),
  //   ],
  // },
};
