"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface NavigationBarProps {
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
}

export function NavigationBar({ onPrevious, onNext, canGoPrevious, canGoNext }: NavigationBarProps) {
  return (
    <div className="bg-green-500 p-4 flex justify-between items-center">
      <Button
        variant="secondary"
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>
      <Button
        variant="secondary"
        onClick={onNext}
        disabled={!canGoNext}
      >
        Next
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

