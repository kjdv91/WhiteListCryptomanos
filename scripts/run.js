const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
    const whitelistContract = await hre.ethers.getContractFactory("Whitelist");

    const deployedWhiteListContract = await whitelistContract.deploy(30);

    await deployedWhiteListContract.deployed();

    console.log("Whitelist Contract Address ", deployedWhiteListContract.address);





}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });