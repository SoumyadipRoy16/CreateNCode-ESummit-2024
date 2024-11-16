import Link from 'next/link'
import ProgressBar from './ProgressBar'

interface CampaignCardProps {
  id: string
  title: string
  description: string
  fundingGoal: number
  currentFunding: number
  daysLeft: number
}

export default function CampaignCard({
  id,
  title,
  description,
  fundingGoal,
  currentFunding,
  daysLeft
}: CampaignCardProps) {
  const progress = (currentFunding / fundingGoal) * 100

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ProgressBar progress={progress} />
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">{`$${currentFunding.toLocaleString()} raised`}</span>
          <span className="text-sm text-gray-500">{`${daysLeft} days left`}</span>
        </div>
      </div>
      <Link href={`/campaigns/${id}`} className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2">
        View Details
      </Link>
    </div>
  )
}