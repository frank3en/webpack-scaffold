const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = () => {
  return {
    plugins: [new BundleAnalyzerPlugin()],
  };
};
