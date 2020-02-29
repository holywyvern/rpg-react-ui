const path = require("path");

module.exports = {
  components: "src/components/**/index.js",
  styleguideDir: "docs",
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src", "styleguide", "StyleGuideWrapper"),
    StyleGuideRenderer: path.join(
      __dirname,
      "src",
      "styleguide",
      "StyleGuideRender"
    )
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
