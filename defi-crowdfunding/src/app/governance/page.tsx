'use client'

import { useState } from 'react'
import { useWeb3 } from '../../../context/Web3Context'

// This data should come from your backend or blockchain in a real application
const proposals = [
  {
    id: '1',
    title: 'Increase Staking Rewards',
    description: 'Proposal to increase staking rewards from 5% to 7% APY.',
    votesFor: 1500,
    votesAgainst: 500,
    deadline: '2023-07-01',
  },
  {
    id: '2',
    title: 'Add New Campaign Category',
    description: 'Introduce a new category for environmental projects with special incentives.',
    votesFor: 2000,
    votesAgainst: 800,
    deadline: '2023-06-25',
  },
]

export default function GovernancePage() {
  const { address, connect } = useWeb3()
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null)

  const handleVote = async (proposalId: string, voteType: 'for' | 'against') => {
    if (!address) {
      await connect()
    } else {
      // Here you would interact with your smart contract to cast the vote
      console.log(`Voting ${voteType} on proposal ${proposalId}`)
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Governance</h1>
      <div className="space-y-6">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{proposal.title}</h2>
            <p className="text-gray-600 mb-4">{proposal.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span>Votes For: {proposal.votesFor}</span>
              <span>Votes Against: {proposal.votesAgainst}</span>
              <span>Deadline: {proposal.deadline}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleVote(proposal.id, 'for')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Vote For
              </button>
              <button
                onClick={() => handleVote(proposal.id, 'against')}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Vote Against
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}