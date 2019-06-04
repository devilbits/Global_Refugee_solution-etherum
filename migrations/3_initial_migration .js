const Migrations = artifacts.require("RefugeeToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
