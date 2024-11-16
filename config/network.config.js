// network.config.js
const networkConfig = {
    31337: {
      name: "localhost",
      platformFee: "250", // 2.5%
      minContribution: "10000000000000000", // 0.01 ETH
    },
    11155111: {
      name: "sepolia",
      platformFee: "250",
      minContribution: "10000000000000000",
      vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
    },
    1: {
      name: "mainnet",
      platformFee: "250",
      minContribution: "10000000000000000",
      vrfCoordinatorV2: "0x271682DEB8C4E0901D1a1550aD2e64D568E69909",
    },
  };
  
  const developmentChains = ["hardhat", "localhost"];
  const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
  
  module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
  };