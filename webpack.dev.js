const path = require("path");
const buildPath = path.resolve(__dirname, "dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'delevopment',

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: "source-map",

  entry: {
    angular: 'angular',
    index: './src/demo/index.js',
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    }
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
    ]
  }
  
  
};
