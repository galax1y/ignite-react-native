import { useNavigation } from '@react-navigation/native';
import { Container, Meal, StatusIndicator, Timestamp, TimestampText } from './styles';

interface MealCardProps {
  name: string
  time: string
  isHealthy: boolean
}

export function MealCard({ name, time, isHealthy }: MealCardProps) {
  const navigation = useNavigation()
  
  return (
    <Container
      onPress={() => navigation.navigate('meal', { name, time, isHealthy })}
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