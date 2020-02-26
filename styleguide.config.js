const path = require("path");

module.exports = {
  components: "src/components/**/index.js",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src", "styleguide", "StyleGuideWrapper")
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
};
