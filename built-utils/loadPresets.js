const webpackMerge = require("webpack-merge").default;
const loadPresets = (env = { presets: "" }) => {
  let { presets } = env;
  presets = presets.split(",");
  console.log(presets, typeof presets);
  const mergedPresets = [].concat(...[presets]);

  const mergedConfig = mergedPresets.map((preset) => {
    return require(`./add-ons/webpack.${preset}`)(env);
  });
  return webpackMerge({}, ...mergedConfig);
};

module.exports = loadPresets;
