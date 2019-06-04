var RefugeeToekn = artifacts.require("RefugeeToken");

contract("RefugeeToekn", function(accounts) {
  it("should assert true", function(done) {
    var refugee_toekn = RefugeeToekn.deployed();
    assert.isTrue(true);
    done();
  });
});




let HST;

contract('RefugeeToekn', (accounts) => {
  beforeEach(async () => {
    HST = await RefugeeToekn.new({ from: accounts[0] });
  });

  it('creation: should create an initial balance of 10000 for the creator', async () => {
    const balance = await HST.balanceOf.call(accounts[1]);
    assert.strictEqual(balance.toNumber(), 0);
  });

  it('creation: test correct setting of vanity information', async () => {
    const name = await HST.name.call();
    assert.strictEqual(name, 'RefugeeToken');

    const decimals = await HST.decimals.call();
    assert.strictEqual(decimals.toNumber(), 10);

    const symbol = await HST.symbol.call();
    assert.strictEqual(symbol, 'RTN');
  });

})