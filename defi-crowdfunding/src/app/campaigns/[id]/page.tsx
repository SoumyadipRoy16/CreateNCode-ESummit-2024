'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useWeb3 } from '../../../../context/Web3Context'
import ProgressBar from '../../../../components/ProgressBar'

// This data should come from your backend or blockchain in a real application
const campaignData = {
  id: '1',
  title: 'Innovative Green Energy Project',
  description: 'Help us develop sustainable energy solutions for a brighter future. Our project aims to create affordable and efficient solar panels for residential use.',
  fundingGoal: 100000,
  currentFunding: 75000,
  daysLeft: 15,
  creator: '0x1234...5678',
}

export default function CampaignDetailPage() {
  const { id } = useParams()
  const { address, connect } = useWeb3()
  const [contributionAmount, setContributionAmount] = useState('')

  const handleContribute = async () => {
    if (!address) {
      await connect()
    } else {
      // Here you would interact with your smart contract to make the contribution
      console.log(`Contributing ${contributionAmount} to campaign ${id}`)
    }
  }

  const progress = (campaignData.currentFunding / campaignData.fundingGoal) * 100

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">{campaignData.title}</h1>
      <p className="text-gray-600 mb-6">{campaignData.description}</p>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <ProgressBar progress={progress} />
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">{`$${campaignData.currentFunding.toLocaleString()} raised of $${campaignData.fundingGoal.toLocaleString()}`}</span>
          <span className="text-gray-500">{`${campaignData.daysLeft} days left`}</span>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Contribute to this campaign</h2>
        <input
          type="number"
          value={contributionAmount}
          onChange={(e) => setContributionAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleContribute}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {address ? 'Contribute' : 'Connect Wallet to Contribute'}
        </button>
      </div>
    </div>
  )
}