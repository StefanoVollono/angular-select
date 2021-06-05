const path = require("path");
const buildPath = path.resolve(__dirname, "dist/demo");

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
  entry: {
    index: "./src/demo/index.js"
  },

  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: "[name].[fullhash:20].js",
    path: buildPath,
    clean: true
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          "resolve-url-loader",
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /demo/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/demo/index.html",
      inject: "body",
      chunks: ["index"],
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "demo/bg.png",
    //       context: "./src/",
    //     },
    //   ],
    // }),
  ],

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          terserOptions: {
                compress: {},
            }
        }).apply(compiler);
      },
      new CssMinimizerPlugin(),
    ],
  },
};
