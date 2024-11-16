"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/card"
import { ProgressBar } from "../components/ProgressBar"
import { Button } from "../components/button"
import { Clock, DollarSign } from 'lucide-react'

interface CampaignCardProps {
  id: string
  title: string
  description: string
  fundingGoal: number
  currentFunding: number
  daysLeft: number
  icon?: React.ReactNode
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  id,
  title,
  description,
  fundingGoal,
  currentFunding,
  daysLeft,
  icon
}) => {
  const progress = (currentFunding / fundingGoal) * 100
  const progressColor = progress >= 100 ? 'success' : progress >= 75 ? 'warning' : 'default'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            {icon && <span className="text-primary">{icon}</span>}
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{description}</p>
          <ProgressBar progress={progress} color={progressColor} showPercentage className="mb-4" />
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>${currentFunding.toLocaleString()} raised</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{daysLeft} days left</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="gradient">View Campaign</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default CampaignCard