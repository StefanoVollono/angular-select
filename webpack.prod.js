const path = require("path");
const buildPath = path.resolve(__dirname, "dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const CopyWebpackPlugin = require("copy-webpack-plugin");

const sass = require('sass');

module.exports = {
  mode: 'production',

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  // devtool: "source-map",

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: './src/lib/angular-select.js',

  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: "angular-select.umd.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: {
      name: "angular-select",
      type: "umd"
    },  
  },
  
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "src/lib/angular-select.js",
          to: 'angular-select.esm.js'
        },
        { 
          from: "src/lib/angular-select.scss",
          to: "angular-select.css",
          transform (content, path) {
            const result = sass.renderSync({
              file: path
            });
            return result.css.toString().replace(/\s+/g, ' ').trim();
          }, 
        },
      ],
    }),
  ],

  optimization: {
    minimize: true,
  },
};
