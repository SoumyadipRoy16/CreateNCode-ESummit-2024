import CampaignCard from '../../../components/CampaignCard'

// This data should come from your backend or blockchain in a real application
const campaigns = [
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
  {
    id: '3',
    title: 'Educational VR Platform',
    description: 'Revolutionize learning with immersive virtual reality experiences.',
    fundingGoal: 200000,
    currentFunding: 150000,
    daysLeft: 30,
  },
]

export default function CampaignsPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Active Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} {...campaign} />
        ))}
      </div>
    </div>
  )
}