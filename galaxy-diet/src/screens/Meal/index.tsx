import { View } from 'react-native'
import {
  Container,
  Content,
  DateTitle,
  Description,
  Title,
  Date,
  StatusIndicator,
  StatusIndicatorText,
  StatusIndicatorBall
} from './styles'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'

// interface MealProps {
//   name: string
//   time: string
//   isHealthy: boolean
// }
// { name, time, isHealthy }: MealProps
export function Meal() {
  const navigation = useNavigation()

  const route = useRoute()
  const { name, description, time, isHealthy } = route.params

  return (
    <Container>
      <Header title='Refeição' />

      <Content>
        <View style={{gap: 8 }}>
          <Title>{name}</Title>
          <Description>{description ?? 'Sem descrição'}</Description>
        </View>
        
        <View style={{gap: 8 }}>
          <DateTitle>Data e hora</DateTitle>
          <Date>{time}</Date>
        </View>

        <StatusIndicator>
          <StatusIndicatorBall />
          <StatusIndicatorText>{isHealthy ? 'dentro da dieta' : 'fora da dieta'}</StatusIndicatorText>
        </StatusIndicator>

        <View style={{flex: 1}} />

        <View style={{ gap: 8 }}>
          <Button
            title='Editar refeição'
            onPress={() => navigation.navigate('edit', { name, description, time, isHealthy })}
          />
          <Button
            title='Excluir refeição'
          />
        </View>
      </Content>
    </Container>
  )
}