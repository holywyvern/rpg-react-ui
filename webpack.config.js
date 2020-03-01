const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, "dist"),
    library: "rpg-react-ui",
    libraryTarget: "commonjs"
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
