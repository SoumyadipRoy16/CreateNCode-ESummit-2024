// 02_deploy_platform.js
const { ethers } = require("hardhat");
const deployToken = require("./01_deploy_token");

async function main() {
  const token = await deployToken();
  
  const CrowdfundingPlatform = await ethers.getContractFactory("CrowdfundingPlatform");
  const platform = await CrowdfundingPlatform.deploy(token.address);
  await platform.deployed();

  console.log("CrowdfundingPlatform deployed to:", platform.address);
  return { token, platform };
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