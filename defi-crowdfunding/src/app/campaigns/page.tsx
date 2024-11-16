"use client"

import { motion } from "framer-motion"
import { Button } from "../../../components/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/card"
import { ProgressBar } from "../../../components/ProgressBar"
import { Lightbulb, Palette, Headphones, Rocket, Coffee, Book } from 'lucide-react'

export default function Campaigns() {
  const campaigns = [
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
    {
      title: "Space Exploration Initiative",
      description: "Fund cutting-edge research for the next generation of space travel.",
      icon: <Rocket className="h-6 w-6 text-red-400" />,
      raised: 500000,
      goal: 1000000,
      progress: 50,
      daysLeft: 60,
      color: "default" as const,
    },
    {
      title: "Sustainable Coffee Farm",
      description: "Support fair trade and eco-friendly coffee production in developing regions.",
      icon: <Coffee className="h-6 w-6 text-yellow-600" />,
      raised: 25000,
      goal: 40000,
      progress: 62.5,
      daysLeft: 20,
      color: "warning" as const,
    },
    {
      title: "Open Source Education Platform",
      description: "Create a free, accessible learning platform for students worldwide.",
      icon: <Book className="h-6 w-6 text-indigo-400" />,
      raised: 80000,
      goal: 120000,
      progress: 66.7,
      daysLeft: 45,
      color: "success" as const,
    },
  ]

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white"
      >
        Active Campaigns
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-white/60"
      >
        Explore and support innovative projects from around the world.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-slate-800/50 border-white/5 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
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
                <Button className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300">
                  View Campaign
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}