'use client'

import { useState } from 'react'
import { useWeb3 } from '../../../context/Web3Context'

export default function StakingPage() {
  const { address, connect } = useWeb3()
  const [stakeAmount, setStakeAmount] = useState('')
  const [unstakeAmount, setUnstakeAmount] = useState('')

  // This data should come from your smart contract in a real application
  const [stakedBalance, setStakedBalance] = useState(1000)
  const [rewardBalance, setRewardBalance] = useState(50)

  const handleStake = async () => {
    if (!address) {
      await connect()
    } else {
      // Here you would interact with your smart contract to stake tokens
      console.log(`Staking ${stakeAmount} tokens`)
    }
  }

  const handleUnstake = async () => {
    if (!address) {
      await connect()
    } else {
      // Here you would interact with your smart contract to unstake tokens
      console.log(`Unstaking ${unstakeAmount} tokens`)
    }
  }

  const handleClaimRewards = async () => {
    if (!address) {
      await connect()
    } else {
      // Here you would interact with your smart contract to claim rewards
      console.log('Claiming rewards')
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Staking</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Staking Overview</h2>
        <p className="mb-2">Staked Balance: {stakedBalance} tokens</p>
        <p className="mb-4">Reward Balance: {rewardBalance} tokens</p>
        <button
          onClick={handleClaimRewards}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Claim Rewards
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Stake Tokens</h2>
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            placeholder="Enter amount to stake"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleStake}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Stake
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Unstake Tokens</h2>
          <input
            type="number"
            value={unstakeAmount}
            onChange={(e) => setUnstakeAmount(e.target.value)}
            placeholder="Enter amount to unstake"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleUnstake}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Unstake
          </button>
        </div>
      </div>
    </div>
  )
}