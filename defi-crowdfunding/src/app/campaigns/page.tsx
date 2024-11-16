"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../../../components/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/card"
import CampaignCard from "../../../components/CampaignCard"
import { ProgressBar } from "../../../components/ProgressBar"
import { Lightbulb, Palette, Headphones, Wallet } from 'lucide-react'
import { ethers } from "ethers"
import { Web3Provider } from "@ethersproject/providers"
import WalletConnect from "@walletconnect/client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/dropdown-menu"

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
  const [connected, setConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [provider, setProvider] = useState<Web3Provider | null>(null)

  const connectMetaMask = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const ethProvider = new Web3Provider(window.ethereum)
        await window.ethereum.request({ method: "eth_requestAccounts" })
        const signer = ethProvider.getSigner()
        const address = await signer.getAddress()
        setWalletAddress(address)
        setProvider(ethProvider)
        setConnected(true)
      } catch (error) {
        console.error("Failed to connect to MetaMask:", error)
        alert("Failed to connect to MetaMask. Please try again.")
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.")
    }
  }

  const connectWalletConnect = async () => {
    try {
      const walletConnect = new WalletConnect({
        bridge: "https://bridge.walletconnect.org",
      })

      if (!walletConnect.connected) {
        await walletConnect.createSession()
      }

      const provider = new Web3Provider(walletConnect as any)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      setWalletAddress(address)
      setProvider(provider)
      setConnected(true)
    } catch (error) {
      console.error("Failed to connect with WalletConnect:", error)
      alert("Failed to connect with WalletConnect. Please try again.")
    }
  }

  const disconnectWallet = () => {
    setConnected(false)
    setWalletAddress("")
    setProvider(null)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Glass effect header */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-sm">
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Wallet className="h-4 w-4" />
                      <span>Connect Wallet</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={connectMetaMask}>
                      Connect MetaMask
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={connectWalletConnect}>
                      Connect WalletConnect
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Wallet className="h-4 w-4" />
                      <span>{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
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

      {/* Header Section */}
      <header className="bg-white/30 backdrop-blur-xl text-white py-6 px-8 rounded-lg mb-8 shadow-lg">
        <h1 className="text-3xl font-bold">Active Campaigns</h1>
      </header>

      {/* Campaign cards */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>
    </div>
  )
}
