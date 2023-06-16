import { Container, Meal, StatusIndicator, Timestamp, TimestampText } from './styles';

interface MealCardProps {
  time: string
  name: string
  isHealthy: boolean
}

export function MealCard({ name, time, isHealthy }: MealCardProps) {
  return (
    <Container activeOpacity={0.6}>
      <Timestamp>
        <TimestampText>
          {time}
        </TimestampText>
      </Timestamp>
      <Meal>{name}</Meal>

      <StatusIndicator isHealthy={isHealthy} />
    </Container>
  )
}