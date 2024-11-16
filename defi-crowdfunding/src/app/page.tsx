import Link from 'next/link'
import Image from 'next/image'
import CampaignCard from '../../components/CampaignCard'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <section className="text-center py-20 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Empower Ideas Through Tokenized Crowdfunding!</h1>
        <p className="text-xl mb-8">Join our decentralized platform and bring your projects to life.</p>
        <div className="space-x-4">
          <Link href="/campaigns" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Browse Campaigns
          </Link>
          <Link href="/campaigns/create" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Create Campaign
          </Link>
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace with actual campaign data */}
          <CampaignCard
            id="1"
            title="Innovative Green Energy Project"
            description="Help us develop sustainable energy solutions for a brighter future."
            fundingGoal={100000}
            currentFunding={75000}
            daysLeft={15}
          />
          <CampaignCard
            id="2"
            title="Community Art Installation"
            description="Support local artists in creating a landmark piece for our city."
            fundingGoal={50000}
            currentFunding={30000}
            daysLeft={7}
          />
          <CampaignCard
            id="3"
            title="Educational VR Platform"
            description="Revolutionize learning with immersive virtual reality experiences."
            fundingGoal={200000}
            currentFunding={150000}
            daysLeft={30}
          />
        </div>
      </section>
    </div>
  )
}