const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: path.join(__dirname, "../server/public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ["babel-loader"],
      },
      {
        test: [/\.json$/],
        use: ["file-loader"],
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        use: ["ts-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8085,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devtool: "source-map",
};
