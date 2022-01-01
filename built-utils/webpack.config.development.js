module.exports = (env) => {
  console.log("env", env);
  return {
    output: {
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devServer: {
      hot: "only",
    },
  };
};
