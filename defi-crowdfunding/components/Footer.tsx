import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">DeFi Crowdfunding</h3>
            <p className="text-sm">Empowering ideas through blockchain technology</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <Link href="/faq" className="text-sm hover:text-gray-300 mr-4">FAQ</Link>
            <Link href="/terms" className="text-sm hover:text-gray-300 mr-4">Terms of Service</Link>
            <Link href="/privacy" className="text-sm hover:text-gray-300">Privacy Policy</Link>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            {/* Add social media icons here */}
            <p className="text-sm">© 2023 DeFi Crowdfunding. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}