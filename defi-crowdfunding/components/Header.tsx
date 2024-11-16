import Link from 'next/link'
import ConnectWalletButton from './ConnectWalletButton'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              DeFi Crowdfunding
            </Link>
            <div className="ml-10 space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              <Link href="/campaigns" className="text-gray-600 hover:text-gray-800">Campaigns</Link>
              <Link href="/governance" className="text-gray-600 hover:text-gray-800">Governance</Link>
              <Link href="/staking" className="text-gray-600 hover:text-gray-800">Staking</Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
            </div>
          </div>
          <ConnectWalletButton />
        </div>
      </nav>
    </header>
  )
}