import './globals.css'
import { Inter } from 'next/font/google'
import AppLayout from '../../components/AppLayout'
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
      <body className={inter.className}>
        <Web3Provider>
          <AppLayout>
            {children}
          </AppLayout>
        </Web3Provider>
      </body>
    </html>
  )
}