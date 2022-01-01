const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = () => {
  return {
    plugins: [new CompressionWebpackPlugin()],
  };
};
