import { useNavigation } from '@react-navigation/native';
import { Container, Meal, StatusIndicator, Timestamp, TimestampText } from './styles';

interface MealCardProps {
  name: string
  description: string
  time: string
  isHealthy: boolean
}

export function MealCard({ name, description, time, isHealthy }: MealCardProps) {
  const navigation = useNavigation()
  
  return (
    <Container
      onPress={() => navigation.navigate('meal', { name, description, time, isHealthy })}
      activeOpacity={0.6}
    >
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