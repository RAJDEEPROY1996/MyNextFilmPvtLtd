const Migrations = artifacts.require("myNextFilm");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
