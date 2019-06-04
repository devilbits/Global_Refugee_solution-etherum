const Migrations = artifacts.require("refugeeIdentity");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
