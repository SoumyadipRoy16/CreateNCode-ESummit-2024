"use client";

import React from "react";
import Link from "next/link";
import CampaignCard from "../../components/CampaignCard";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900">
      {/* Background frame */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className="absolute inset-0 z-0" />

      <div className="container mx-auto px-6 py-8 relative z-30">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className={cn("md:text-5xl text-4xl font-bold mb-4 text-white")}>
            Empower Ideas Through Tokenized Crowdfunding!
          </h1>
          <p className="md:text-xl text-lg mb-8 text-neutral-300">
            Join our decentralized platform and bring your projects to life.
          </p>
          <div className="space-x-4">
            <Link
              href="/campaigns"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Browse Campaigns
            </Link>
            <Link
              href="/campaigns/create"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Create Campaign
            </Link>
          </div>
        </div>

        <section className="my-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Featured Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CampaignCard
              id="1"
              title="Innovative Green Energy Project"
              description="Help us develop sustainable energy solutions for a brighter future."
              fundingGoal={100000}
              currentFunding={75000}
              daysLeft={15}
            />
            <CampaignCard
              id="2"
              title="Community Art Installation"
              description="Support local artists in creating a landmark piece for our city."
              fundingGoal={50000}
              currentFunding={30000}
              daysLeft={7}
            />
            <CampaignCard
              id="3"
              title="Educational VR Platform"
              description="Revolutionize learning with immersive virtual reality experiences."
              fundingGoal={200000}
              currentFunding={150000}
              daysLeft={30}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
