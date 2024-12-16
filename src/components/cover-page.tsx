import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CoverPageProps {
  title: string
  onStart: () => void
}

export function CoverPage({ title, onStart }: CoverPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-10">
          <h1 className="text-4xl font-bold mb-6 text-center text-primary">{title}</h1>
          <p className="text-lg mb-8 text-center text-muted-foreground">Готовы проверить свои знания? Нажмите кнопку ниже, чтобы начать увлекательное путешествие!</p>
          <Button onClick={onStart} size="lg" className="text-lg">Начать квиз</Button>
        </CardContent>
      </Card>
    </div>
  )
}

