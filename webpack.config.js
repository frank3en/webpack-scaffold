var webpack = require("webpack");
var HTMLWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge").default;

const path = require("path");
const modeConfig = (env) =>
  require(path.resolve(__dirname, `built-utils/webpack.config.${env}`))(env);

module.exports = ({ mode } = { mode: "production" }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "[contenthash].[name].[id].js", // temp,not set
      },
      plugins: [new HTMLWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  );
};
