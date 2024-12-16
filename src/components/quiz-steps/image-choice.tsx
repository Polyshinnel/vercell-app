"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ImageChoiceProps {
  question: string
  options: string[]
  onAnswerSelect: (answer: string) => void
  selectedAnswer: string | null
}

export function ImageChoice({ question, options, onAnswerSelect, selectedAnswer }: ImageChoiceProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`p-2 h-auto ${selectedAnswer === option ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => onAnswerSelect(option)}
            >
              <Image
                src={option}
                alt={`Option ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

