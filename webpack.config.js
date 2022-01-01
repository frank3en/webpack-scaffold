var webpack = require("webpack");
var HTMLWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge").default;

const path = require("path");
const loadPresets = require("./built-utils/loadPresets");
const modeConfig = (env) =>
  require(path.resolve(__dirname, `built-utils/webpack.config.${env.mode}`))(
    env
  );

module.exports = ({ mode, presets } = { mode: "production" }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "[contenthash].[name].[id].js", // temp,not set
      },
      module: {
        rules: [
          {
            test: /\.jpe?g$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      plugins: [new HTMLWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig({ mode, presets }),
    loadPresets({ mode, presets })
  );
};
