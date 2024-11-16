'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { ethers } from 'ethers'

interface Web3ContextType {
  provider: ethers.providers.Web3Provider | null
  signer: ethers.Signer | null
  address: string | null
  connect: () => Promise<void>
  disconnect: () => void
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined)

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)
  const [signer, setSigner] = useState<ethers.Signer | null>(null)
  const [address, setAddress] = useState<string | null>(null)

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        setProvider(provider)
        setSigner(signer)
        setAddress(address)
      } catch (err) {
        console.error('Failed to connect wallet:', err)
      }
    } else {
      console.error('Please install MetaMask!')
    }
  }

  const disconnect = () => {
    setProvider(null)
    setSigner(null)
    setAddress(null)
  }

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0])
        } else {
          disconnect()
        }
      })
    }
  }, [])

  return (
    <Web3Context.Provider value={{ provider, signer, address, connect, disconnect }}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  const context = useContext(Web3Context)
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider')
  }
  return context
}