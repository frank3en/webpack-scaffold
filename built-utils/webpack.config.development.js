module.exports = (env) => {
  console.log("env", env);
  return {
    output: {
      filename: "bundle.js",
    },
  };
};
