const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "lib"),
    publicPath: "/",
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
