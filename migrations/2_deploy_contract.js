const DiacomContract = artifacts.require("DiacomContract");

module.exports = function(deployer) {
  deployer.deploy(DiacomContract);
};
