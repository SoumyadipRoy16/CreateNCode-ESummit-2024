'use client'

import { useWeb3 } from '../../../context/Web3Context'
import CampaignCard from '../../../components/CampaignCard'

// This data should come from your backend or blockchain in a real application
const userCampaigns = [
  {
    id: '1',
    title: 'Innovative Green Energy Project',
    description: 'Help us develop sustainable energy solutions for a brighter future.',
    fundingGoal: 100000,
    currentFunding: 75000,
    daysLeft: 15,
  },
  {
    id: '2',
    title: 'Community Art Installation',
    description: 'Support local artists in creating a landmark piece for our city.',
    fundingGoal: 50000,
    currentFunding: 30000,
    daysLeft: 7,
  },
]

export default function ProfilePage() {
  const { address, connect, disconnect } = useWeb3()

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      {address ? (
        <div>
          <p className="mb-4">Connected Address: {address}</p>
          <button
            onClick={disconnect}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-8"
          >
            Disconnect Wallet
          </button>
          <h2 className="text-2xl font-bold mb-4">Your Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-4">Please connect your wallet to view your profile.</p>
          <button
            onClick={connect}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  )
}