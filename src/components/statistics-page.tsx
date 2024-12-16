import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface StatisticsPageProps {
  correctAnswers: number
  totalQuestions: number
  onRestart: () => void
}

export function StatisticsPage({ correctAnswers, totalQuestions, onRestart }: StatisticsPageProps) {
  const percentage = (correctAnswers / totalQuestions) * 100

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Результаты квиза</h2>
          <Progress value={percentage} className="w-full mb-6" />
          <p className="text-xl mb-4 text-center">
            Вы ответили правильно на {correctAnswers} из {totalQuestions} вопросов
          </p>
          <p className="text-4xl font-bold mb-6 text-center text-primary">
            {percentage.toFixed(1)}%
          </p>
          <p className="text-2xl font-semibold mb-8 text-center text-muted-foreground">
            {percentage >= 80 ? "Отличная работа!" : percentage >= 60 ? "Хороший результат!" : "Есть куда стремиться!"}
          </p>
          <Button onClick={onRestart} size="lg" className="text-lg">Начать заново</Button>
        </CardContent>
      </Card>
    </div>
  )
}

