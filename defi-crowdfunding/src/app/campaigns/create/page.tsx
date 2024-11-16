'use client'

import { useState } from 'react'
import { useWeb3 } from '../../../../context/Web3Context'

export default function CreateCampaignPage() {
  const { address, connect } = useWeb3()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fundingGoal: '',
    deadline: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!address) {
      await connect()
    } else {
      // Here you would interact with your smart contract to create the campaign
      console.log('Creating campaign with data:', formData)
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Create a New Campaign</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fundingGoal" className="block text-gray-700 text-sm font-bold mb-2">
            Funding Goal (in ETH)
          </label>
          <input
            type="number"
            id="fundingGoal"
            name="fundingGoal"
            value={formData.fundingGoal}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
            Campaign Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {address ? 'Create Campaign' : 'Connect Wallet to Create Campaign'}
        </button>
      </form>
    </div>
  )
}