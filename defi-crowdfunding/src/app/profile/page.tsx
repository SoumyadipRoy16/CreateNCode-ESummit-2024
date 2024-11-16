"use client"

import { motion } from "framer-motion"
import { Button } from "../../../components/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/card"

export default function Profile() {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white"
      >
        Profile
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-white/60"
      >
        Manage your account and view your activity.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 mb-2">Wallet Address: 0x1234...5678</p>
              <p className="text-white/60 mb-4">Joined: January 1, 2023</p>
              <Button variant="outline">Edit Profile</Button>
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
              <CardTitle>Your Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 mb-2">Campaigns Created: 2</p>
              <p className="text-white/60 mb-2">Campaigns Backed: 5</p>
              <p className="text-white/60 mb-4">Total Contributed: 1000 DEFI</p>
              <Button>View History</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}