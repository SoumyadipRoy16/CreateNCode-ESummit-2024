import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Web3Provider } from '../../context/Web3Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DeFi Crowdfunding Platform',
  description: 'Empower Ideas Through Tokenized Crowdfunding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Web3Provider>
      </body>
    </html>
  )
}