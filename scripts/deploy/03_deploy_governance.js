
// 03_deploy_governance.js
const { ethers } = require("hardhat");
const deployPlatform = require("./02_deploy_platform");

async function main() {
  const { token, platform } = await deployPlatform();

  const DAOGovernor = await ethers.getContractFactory("DAOGovernor");
  const governor = await DAOGovernor.deploy(token.address);
  await governor.deployed();

  console.log("DAOGovernor deployed to:", governor.address);
  return { token, platform, governor };
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}