import { Image, VStack, Text, Center } from 'native-base'

import LogoSvg from '@assets/logo.svg'
import bgImage from '@assets/background.png'

export function SignIn() {
  return (
    <VStack flex={1} bg={'gray.700'}>
      <Image
        source={bgImage}
        alt='Pessoas treinando'
        resizeMode='contain'
        position='absolute'
      />

      <Center my={24}>
        <LogoSvg />

        <Text color='gray.100' fontSize='sm'>
          Treine sua mente e o seu corpo.
        </Text>
      </Center>
    </VStack>
  )
}