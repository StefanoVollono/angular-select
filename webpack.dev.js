const path = require("path");
const buildPath = path.resolve(__dirname, "dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'delevopment',

  entry: {
    angular: 'angular',
    index: './src/demo/index.js',
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/demo/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /.s?css$/,
        use: ["style-loader", 'css-loader', "resolve-url-loader", 'sass-loader'],
      },
    ]
  }
  
  
};
