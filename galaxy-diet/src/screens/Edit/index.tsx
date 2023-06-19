import { useState } from 'react'
import { View } from 'react-native'
import { Container, Content, Form } from './styles'
import { useNavigation } from '@react-navigation/native'

import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { ToggleButton } from '@components/ToggleButton'

export function Edit() {
  const navigation = useNavigation()

  function handleEditMeal() {
    navigation.goBack()
  }

  const [radioButtonState, setRadioButtonState] = useState<boolean | undefined>(undefined)

  function handleToggleButton(button: string) {
    // Porcaria mas já serve. Não vou gastar tempo nisso
    if (button === 'yes' && radioButtonState === true) {
      setRadioButtonState(undefined)
    }
    else if (button === 'no' && radioButtonState === false) {
      setRadioButtonState(undefined)
    }
    else if (button === 'yes') {
      setRadioButtonState(true)
    }
    else if (button === 'no') {
      setRadioButtonState(false)
    }
  }

  return (
    <Container>
      <Header title='Editar refeição' />

      <Content>
        <Form
          showsVerticalScrollIndicator
          contentContainerStyle={{ rowGap: 24 }}
        >
          <View>
            <Label text='Nome' />
            <Input />
          </View>

          <View>
            <Label text='Descrição' />
            <Input />
          </View>

          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={{flex: 1}}>
                <Label text='Data' />
                <Input />
              </View>
              <View style={{flex: 1}}>
                <Label text='Hora' />
                <Input />
              </View>
          </View>

          <View>
            <Label text='Está dentro da dieta?' />
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={{flex: 1}}>
                <ToggleButton
                  title='Sim'
                  state={radioButtonState}
                  mainColor={radioButtonState === true ? '#639339' : '#DDDEDF'}
                  backgroundColor={radioButtonState === true ? '#E5F0DB' : '#EFF0F0'}
                  onPress={() => handleToggleButton('yes')}
                />
              </View>
              <View style={{flex: 1}}>
                <ToggleButton
                  title='Não'
                  state={!radioButtonState}
                  mainColor={radioButtonState === false ? '#BF3B44' : '#DDDEDF'}
                  backgroundColor={radioButtonState === false ? '#F4E6E7' : '#EFF0F0'}
                  onPress={() => handleToggleButton('no')}
                />
              </View>
            </View>
          </View>
        </Form>
        
        <Button
          title='Salvar alterações'
          onPress={handleEditMeal}
        />
      </Content>
    </Container>
  )
}