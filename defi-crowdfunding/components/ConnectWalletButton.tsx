'use client'

import { useWeb3 } from '../context/Web3Context'

export default function ConnectWalletButton() {
  const { connect, disconnect, address } = useWeb3()

  return (
    <button
      onClick={address ? disconnect : connect}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      {address ? `Disconnect ${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
    </button>
  )
}