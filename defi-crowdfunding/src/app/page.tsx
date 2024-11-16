"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { Button } from "../../components/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/card"
import { ProgressBar } from "../../components/ProgressBar"
import { Lightbulb, Palette, Headphones } from 'lucide-react'

export default function Home() {
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="min-h-screen bg-slate-900">
      <main>
        <motion.section 
          className="relative py-20 text-center overflow-hidden"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 relative z-10"
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
              <Button 
                size="lg" 
                className="min-w-[200px] bg-blue-500 hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Browse Campaigns
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] border-white/20 text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Create Campaign
              </Button>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 opacity-50" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)]" />
        </motion.section>

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
        </section>
      </main>
    </div>
  )
}