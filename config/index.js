const globalPublics = require("./public");
const globalSecrets = require("./secret");

const env = "dev";

const envPublics =
  env === "dev"
    ? require("./development/public")
    : require("./production/public");
const envSecrets =
  env === "dev"
    ? require("./development/secret")
    : require("./production/secret");

module.exports = {
  ...globalPublics,
  ...globalSecrets,
  ...envPublics,
  ...envSecrets
};
