import { View } from 'react-native'
import { useState } from 'react'
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
import { ButtonIcon } from '@components/ButtonIcon'
import { Trash } from 'phosphor-react-native'
import { DeleteModal } from '@components/DeleteModal'

interface RouteParams {
  name: string
  description: string
  time: string
  isHealthy: boolean
}

export function Meal() {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const route = useRoute()
  const { name, description, time, isHealthy } = route.params as RouteParams

  return (
    <Container>
      <Header title='Refeição' />

      <DeleteModal
        visibility={modalVisible}
        setVisibility={setModalVisible}
      />
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
          <ButtonIcon
            variant='outline'
            title='Excluir refeição'
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Trash
              color={'#1B1D1E'}
              size={22}
            />
          </ButtonIcon>
        </View>
      </Content>
    </Container>
  )
}