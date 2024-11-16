// 01_deploy_token.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const CrowdfundingToken = await ethers.getContractFactory("CrowdfundingToken");
  const token = await CrowdfundingToken.deploy();
  await token.deployed();

  console.log("CrowdfundingToken deployed to:", token.address);
  return token;
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = main;