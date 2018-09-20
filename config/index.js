const globalKeys = require("./keys");

const env = "prod";
const envKeys =
  env === "dev" ? require("./development/keys") : require("./production/keys");

module.exports = {
  ...globalKeys,
  ...envKeys
};
