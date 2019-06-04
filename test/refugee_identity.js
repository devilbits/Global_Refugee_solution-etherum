var refugeeIdentity = artifacts.require("refugeeIdentity");

contract("refugeeIdentity", function(accounts) {
  it("should assert true", function(done) {
    var refugee_identity = refugeeIdentity.deployed();
    assert.isTrue(true);
    done();
  });
});
