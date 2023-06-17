import { View } from 'react-native'
import { Container, Content, Form } from './styles';
import { CreateHeader } from '@components/CreateHeader';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Label } from '@components/Label';
import { ToggleButton } from '@components/ToggleButton';
import { useNavigation } from '@react-navigation/native';

export function Create() {
  const navigation = useNavigation()
  return (
    <Container>
      <CreateHeader />

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
                  isSelected={false}
                  backgroundColor='#E5F0DB'
                  mainColor='#639339'
                />
              </View>
              <View style={{flex: 1}}>
                <ToggleButton
                  isSelected={false}
                  backgroundColor='#E5F0DB'
                  mainColor='#BF3B44'
                />
              </View>
            </View>
          </View>
        </Form>

        <Button
          title='Cadastrar refeição'
          onPress={() => navigation.navigate('created')}
        />
      </Content>
        
    </Container>
  )
}