"use client"

import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Question {
  id: number
  question: string
  options: string[]
}

interface QuizStepProps {
  question: Question
  onAnswerSelect: (answer: string) => void
  selectedAnswer: string | null
}

export function QuizStep({ question, onAnswerSelect, selectedAnswer }: QuizStepProps) {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
          <RadioGroup value={selectedAnswer || ""} onValueChange={onAnswerSelect}>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  )
}

