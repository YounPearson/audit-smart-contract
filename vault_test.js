const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VulnerableVault", function () {
  let vault, attacker;
  let owner, addr1;

  beforeEach(async () => {
    [owner, addr1, attacker] = await ethers.getSigners();
    const Vault = await ethers.getContractFactory("VulnerableVault");
    vault = await Vault.deploy();
    await vault.deployed();

    // Deposit ETH
    await vault.connect(addr1).deposit({ value: ethers.utils.parseEther("1") });
  });

  it("should allow deposit and withdrawal", async () => {
    await vault.connect(addr1).withdraw(ethers.utils.parseEther("0.5"));
    const balance = await vault.balances(addr1.address);
    expect(balance).to.equal(ethers.utils.parseEther("0.5"));
  });
});
