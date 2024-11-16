"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number
  showPercentage?: boolean
  color?: "default" | "success" | "warning" | "danger"
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progress, showPercentage = false, color = "default", className, ...props }, ref) => {
    const cappedProgress = Math.min(Math.max(progress, 0), 100)

    const colorClasses = {
      default: "bg-blue-600",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500"
    }

    return (
      <div
        ref={ref}
        className={cn("w-full bg-gray-200 rounded-full h-4 relative overflow-hidden", className)}
        role="progressbar"
        aria-valuenow={cappedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      >
        <motion.div
          className={cn("h-full rounded-full", colorClasses[color])}
          initial={{ width: 0 }}
          animate={{ width: `${cappedProgress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-white drop-shadow">
              {cappedProgress.toFixed(0)}%
            </span>
          </div>
        )}
      </div>
    )
  }
)

ProgressBar.displayName = "ProgressBar"

export { ProgressBar }