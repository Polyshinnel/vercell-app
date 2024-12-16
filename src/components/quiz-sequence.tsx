"use client"

import { useState } from "react"
import { NavigationBar } from "./navigation-bar"
import { MultipleChoice } from "./quiz-steps/multiple-choice"
import { TrueFalse } from "./quiz-steps/true-false"
import { ImageChoice } from "./quiz-steps/image-choice"
import { CoverPage } from "./cover-page"
import { StatisticsPage } from "./statistics-page"
import { ProgressBar } from "./progress-bar"
import { Menu } from "./menu"

interface Question {
  id: number
  type: "multiple-choice" | "true-false" | "image-choice"
  question: string
  options: string[]
  correctAnswer: string
}

interface QuizSequenceProps {
  questions: Question[]
  title: string
}

type QuizState = "cover" | "quiz" | "statistics"

export function QuizSequence({ questions, title }: QuizSequenceProps) {
  const [quizState, setQuizState] = useState<QuizState>("cover")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null))

  const handleStart = () => {
    setQuizState("quiz")
  }

  const handleRestart = () => {
    setQuizState("cover")
    setCurrentQuestion(0)
    setSelectedAnswers(Array(questions.length).fill(null))
  }

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setQuizState("statistics")
    }
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[currentQuestion] = answer
      return newAnswers
    })
  }

  const renderQuizStep = (question: Question) => {
    const props = {
      question: question.question,
      options: question.options,
      onAnswerSelect: handleAnswerSelect,
      selectedAnswer: selectedAnswers[currentQuestion],
    }

    switch (question.type) {
      case "multiple-choice":
        return <MultipleChoice {...props} />
      case "true-false":
        return <TrueFalse {...props} />
      case "image-choice":
        return <ImageChoice {...props} />
      default:
        return null
    }
  }

  const correctAnswers = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length

  if (quizState === "cover") {
    return <CoverPage title={title} onStart={handleStart} />
  }

  if (quizState === "statistics") {
    return <StatisticsPage correctAnswers={correctAnswers} totalQuestions={questions.length} onRestart={handleRestart} />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-none flex items-center">
        <div className="w-16 flex justify-center">
          <span className="text-sm">{currentQuestion + 1} из {questions.length}</span>
        </div>
        <div className="flex-grow">
          <ProgressBar current={currentQuestion + 1} total={questions.length} />
        </div>
        <div className="w-16 flex justify-center">
          <Menu />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {renderQuizStep(questions[currentQuestion])}
        </div>
        <div className="flex-none">
          <NavigationBar
            onPrevious={handlePrevious}
            onNext={handleNext}
            canGoPrevious={currentQuestion > 0}
            canGoNext={true}
          />
        </div>
      </div>
    </div>
  )
}

