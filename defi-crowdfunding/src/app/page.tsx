"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../../components/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/card"
import { ProgressBar } from "../../components/ProgressBar"
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
} from "../../components/dropdown-menu"

export default function Home() {
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

      <main>
        <section className="relative py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6"
          >
            <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-transparent bg-clip-text">
              Empower Ideas Through Tokenized Crowdfunding!
            </h1>
            <p className="mb-8 text-lg text-white/60">
              Join our decentralized platform and bring your projects to life.
              <br />
              Innovate, create, and transform ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="min-w-[200px] bg-blue-500 hover:bg-blue-600">
                Browse Campaigns
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] border-white/20 text-white hover:bg-white/10"
              >
                Create Campaign
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="relative py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Featured Campaigns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovative Green Energy Project",
                  description: "Help us develop sustainable energy solutions for a brighter future.",
                  icon: <Lightbulb className="h-6 w-6 text-green-400" />,
                  raised: 75000,
                  goal: 100000,
                  progress: 75,
                  daysLeft: 15,
                  color: "success" as const,
                },
                {
                  title: "Community Art Installation",
                  description: "Support local artists in creating a landmark piece for our city.",
                  icon: <Palette className="h-6 w-6 text-purple-400" />,
                  raised: 30000,
                  goal: 50000,
                  progress: 60,
                  daysLeft: 7,
                  color: "warning" as const,
                },
                {
                  title: "Educational VR Platform",
                  description: "Revolutionize learning with immersive virtual reality experiences.",
                  icon: <Headphones className="h-6 w-6 text-blue-400" />,
                  raised: 150000,
                  goal: 200000,
                  progress: 75,
                  daysLeft: 30,
                  color: "success" as const,
                },
              ].map((campaign, index) => (
                <Card key={index} className="bg-slate-800/50 border-white/5 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      {campaign.icon}
                      <span>{campaign.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60 mb-6">{campaign.description}</p>
                    <ProgressBar 
                      progress={campaign.progress} 
                      color={campaign.color}
                      className="mb-4 bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-white/60">
                      <span>${campaign.raised.toLocaleString()} raised</span>
                      <span>{campaign.daysLeft} days left</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      View Campaign
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}