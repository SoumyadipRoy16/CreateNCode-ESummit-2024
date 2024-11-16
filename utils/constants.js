// constants.js
const CAMPAIGN_DURATION = 30 * 24 * 60 * 60; // 30 days
const MIN_CONTRIBUTION = ethers.utils.parseEther("0.01");
const PLATFORM_FEE = 250; // 2.5% in basis points
const VOTING_DELAY = 1; // 1 block
const VOTING_PERIOD = 5760; // about 1 day
const QUORUM_PERCENTAGE = 4; // 4%

module.exports = {
  CAMPAIGN_DURATION,
  MIN_CONTRIBUTION,
  PLATFORM_FEE,
  VOTING_DELAY,
  VOTING_PERIOD,
  QUORUM_PERCENTAGE,
};