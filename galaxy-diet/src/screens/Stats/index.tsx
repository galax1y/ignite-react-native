import { View } from 'react-native'
import { Container, Content, Title } from './styles';
import { Header } from '@components/Header';
import { Keypoint } from '@components/Keypoint';

export function Stats() {
  const inDietPercentage = 51.03
  return (
    <Container>
      <Header inDietPercentage={inDietPercentage} />
        
      <Content>
        <Title>Estatísticas gerais</Title>

        <View style={{ gap: 12}}>
          <Keypoint point='22' description='melhor sequência de pratos dentro da dieta' />
          <Keypoint point='109' description='refeições registradas' />

          <View style={{ width: '100%', flexDirection: 'row', height: 108, gap: 12 }}>
            <Keypoint point='99' description='refeições dentro da dieta' color='green' />
            <Keypoint point='10' description='refeições fora da dieta' color='red' />
          </View>
        </View>
      </Content>

    </Container>
  )
}