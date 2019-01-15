const globalPublics = require("./public");
const globalSecrets = require("./secret");

const envPublics = __DEV__
  ? require("./development/public")
  : require("./production/public");
const envSecrets = __DEV__
  ? require("./development/secret")
  : require("./production/secret");

module.exports = {
  ...globalPublics,
  ...globalSecrets,
  ...envPublics,
  ...envSecrets
};
