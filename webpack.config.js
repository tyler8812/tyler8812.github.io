const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "./docs"),
    filename: "index_bundle.js",
  },
  target: "web",
  devServer: {
    port: "8888",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    historyApiFallback: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
