"use client"

import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface MultipleChoiceProps {
  question: string
  options: string[]
  onAnswerSelect: (answer: string) => void
  selectedAnswer: string | null
}

export function MultipleChoice({ question, options, onAnswerSelect, selectedAnswer }: MultipleChoiceProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        <RadioGroup value={selectedAnswer || ""} onValueChange={onAnswerSelect}>
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}

