import { QuizSequence } from "@/components/quiz-sequence"
import quizData from "../quiz-data.json"

export default function QuizPage() {
  return (
    <QuizSequence questions={quizData.questions} title={quizData.title} />
  )
}