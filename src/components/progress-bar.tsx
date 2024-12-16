"use client"

import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100

  return (
    <div className="w-full bg-red-500 p-4 h-16 flex items-center">
      <div className="text-white text-sm mr-4 w-16 text-center">
        {current} из {total}
      </div>
      <Progress value={progress} className="flex-grow" />
    </div>
  )
}

