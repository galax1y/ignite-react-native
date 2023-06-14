import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...props } : Props) {
  return (
    <Container activeOpacity={0.7} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}