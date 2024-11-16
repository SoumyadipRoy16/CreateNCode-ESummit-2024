"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Wallet, ChevronDown } from 'lucide-react'
import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('bg-slate-900/95')
          navbar.classList.remove('bg-slate-900/80')
        } else {
          navbar.classList.add('bg-slate-900/80')
          navbar.classList.remove('bg-slate-900/95')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const connectWallet = async () => {
    // Implement wallet connection logic here
    setConnected(true)
    setWalletAddress("0x1234...5678") // Replace with actual wallet address
  }

  const disconnectWallet = () => {
    setConnected(false)
    setWalletAddress("")
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold text-white">
                DeFi Crowdfunding
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/campaigns" className="text-white/80 hover:text-white transition-colors">
                  Campaigns
                </Link>
                <Link href="/governance" className="text-white/80 hover:text-white transition-colors">
                  Governance
                </Link>
                <Link href="/staking" className="text-white/80 hover:text-white transition-colors">
                  Staking
                </Link>
                <Link href="/profile" className="text-white/80 hover:text-white transition-colors">
                  Profile
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {!connected ? (
                <Button variant="outline" className="flex items-center space-x-2" onClick={connectWallet}>
                  <Wallet className="h-4 w-4" />
                  <span>Connect Wallet</span>
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Wallet className="h-4 w-4" />
                      <span>{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Wallet Connected</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={disconnectWallet}>
                      Disconnect Wallet
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}