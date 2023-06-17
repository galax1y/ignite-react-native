import { Image } from 'react-native'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { Box, Container, Heading, Span, Strong } from './styles'
import SuccessImage from '@assets/success.png'
import failImage from '@assets/fail.png'

export function Created() {
  const navigation = useNavigation()
  const isOnDiet = false // Receive as prop

  return (
    <Container>
      <Box>
        <Heading color={isOnDiet ? 'success' : 'fail'}>
          {isOnDiet ? 'Continue assim!' : 'Que pena!'}
        </Heading>
        {
        isOnDiet ? 
          (<Span>
            Você continua{' '}
            <Strong>dentro da dieta.{' '}</Strong>
            Muito bem!
          </Span>)
        :
          (<Span>
            Você{' '}
            <Strong>saiu da dieta{' '}</Strong>
            dessa vez, mas continue se esforçando e não desista!
          </Span>)
        }
      </Box>

      <Image
        source={isOnDiet ? SuccessImage : failImage}
        style={{marginBottom: 32}}
      />
      
      <Button
        title='Ir para a página inicial'
        onPress={() => navigation.navigate('home')}
        style={{ paddingHorizontal: 24 }}
      />
    </Container>
  )
}