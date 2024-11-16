"use client"

import { motion } from "framer-motion"
import { Button } from "../../../components/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/card"
import { FileText, PlusCircle } from 'lucide-react'

export default function Governance() {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white"
      >
        Governance
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-white/60"
      >
        Participate in the decision-making process of our platform.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-slate-800 border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="border-b border-slate-700 pb-4">
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-400" />
                Active Proposals
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white/80 mb-6">Vote on current proposals to shape the future of our platform.</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300">
                View Proposals
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-slate-800 border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="border-b border-slate-700 pb-4">
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <PlusCircle className="w-6 h-6 text-green-400" />
                Create Proposal
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-white/80 mb-6">Submit your own proposal for the community to vote on.</p>
              <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Create Proposal
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}