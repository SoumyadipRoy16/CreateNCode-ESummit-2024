import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../../components/Footer'
import { Web3Provider } from '../../context/Web3Context'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeFi Crowdfunding Platform',
  description: 'Empower Ideas Through Tokenized Crowdfunding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <Web3Provider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow relative">
              {/* Grid Background */}
              <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
              <div className="relative z-10">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </Web3Provider>
      </body>
    </html>
  )
}