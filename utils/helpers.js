// helpers.js
const { ethers } = require("hardhat");

const SECONDS_IN_DAY = 86400;

async function increaseTime(seconds) {
  await ethers.provider.send("evm_increaseTime", [seconds]);
  await ethers.provider.send("evm_mine");
}

async function getLatestBlock() {
  return await ethers.provider.getBlock("latest");
}

async function getCurrentTimestamp() {
  const block = await getLatestBlock();
  return block.timestamp;
}

module.exports = {
  SECONDS_IN_DAY,
  increaseTime,
  getLatestBlock,
  getCurrentTimestamp,
};