import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { groupCreate } from '@storage/group/group-create'
import { AppError } from '@utils/AppError'

import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { Container, Content, Icon } from './styles'
import { Alert } from 'react-native'

export function NewGroup() {
  const navigation = useNavigation()
  const [group, setGroup] = useState<string>('')

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome da turma.')
      }

      await groupCreate(group)
      
      navigation.navigate('players', { group })
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Novo grupo', err.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.')
        console.log(err)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Input
          placeholder='Nome da turma'
          onChangeText={setGroup}
          value={group}
        />

        <Button
          title='Criar'
          style={{ marginTop: 20}}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}