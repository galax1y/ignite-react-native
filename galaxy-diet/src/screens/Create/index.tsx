import { useRef, useState } from 'react'
import { Alert, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { Container, Content, Form } from './styles'
import { useNavigation } from '@react-navigation/native'

import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { ToggleButton } from '@components/ToggleButton'
import DateTimePicker from '@react-native-community/datetimepicker'

export function Create() {
  const navigation = useNavigation()

  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<Date>(new Date())
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
  const [showHourPicker, setShowHourPicker] = useState<boolean>(false)

  const formattedDate = String(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getUTCFullYear())
  const formattedTime = String(time.getHours() + ':' + time.getMinutes())

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  const toggleHourPicker = () => {
    setShowHourPicker(!showHourPicker)
  }

  const onDateChange = (event: any, selectedDate: any) => {
    if (event.type === 'set') {
      const currentDate = selectedDate
      setDate(currentDate)
      toggleDatePicker()
    }
    if (event.type === 'dismissed') {
      toggleDatePicker()
    }
  }

  const onHourChange = (event: any, selectedHour: any) => {
    if (event.type === 'set') {
      const currentHour = selectedHour
      setTime(currentHour)
      toggleHourPicker()
    }
    if (event.type === 'dismissed') {
      toggleHourPicker()
    }
  }
  
  function handleCreateMeal() {
    if (radioButtonState === undefined) {
      return Alert.alert('Ops...', 'Preencha todos os campos para continuar.')
    }
    console.log(date)
    // navigation.navigate('created', { isOnDiet: Boolean(radioButtonState)})
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
      <Header title='Nova refeição' />

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
                {showDatePicker && 
                  <DateTimePicker
                    mode='date'
                    display='default'
                    value={date}
                    onChange={onDateChange}
                  />
                }
                <TouchableOpacity onPress={toggleDatePicker}>
                  <Input
                    value={formattedDate}
                    editable={false}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <Label text='Hora' />
                {showHourPicker &&
                  <DateTimePicker
                    mode='time'
                    display='default'
                    value={time}
                    onChange={onHourChange} 
                  />
                }
                <TouchableOpacity onPress={toggleHourPicker}>
                  <Input
                    value={formattedTime}
                    editable={false}
                  />
                </TouchableOpacity>
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
          title='Cadastrar refeição'
          onPress={handleCreateMeal}
        />
      </Content>
    </Container>
  )
}