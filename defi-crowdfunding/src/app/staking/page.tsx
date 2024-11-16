"use client"

import { motion } from "framer-motion"
import { Button } from "../../../components/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/card"
import { ProgressBar } from "../../../components/ProgressBar"

export default function Staking() {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white"
      >
        Staking
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-white/60"
      >
        Stake your tokens to earn rewards and support the platform.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Staking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 mb-4">Current staked amount: 1000 DEFI</p>
              <ProgressBar progress={75} color="success" className="mb-4" />
              <p className="text-white/60 mb-4">Rewards earned: 50 DEFI</p>
              <Button>Claim Rewards</Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Stake More</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 mb-4">Increase your staking to earn more rewards.</p>
              <Button variant="outline">Stake Tokens</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}