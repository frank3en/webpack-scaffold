const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env) => {
  console.log("env", env);
  return {
    output: {
      filename: "bundle.prod.js",
    },
    plugins: [new MiniCSSExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCSSExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
  };
};
