"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TrueFalseProps {
  question: string
  onAnswerSelect: (answer: string) => void
  selectedAnswer: string | null
}

export function TrueFalse({ question, onAnswerSelect, selectedAnswer }: TrueFalseProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        <div className="flex justify-center space-x-4">
          <Button 
            variant={selectedAnswer === "True" ? "default" : "outline"}
            onClick={() => onAnswerSelect("True")}
          >
            True
          </Button>
          <Button 
            variant={selectedAnswer === "False" ? "default" : "outline"}
            onClick={() => onAnswerSelect("False")}
          >
            False
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

