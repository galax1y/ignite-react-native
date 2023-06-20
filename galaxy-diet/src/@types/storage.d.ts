export interface MealProps {
  name: string
  description: string
  isHealthy: boolean
  time: string
}

export interface DayProps {
  day: Date
  data: MealProps[]
}