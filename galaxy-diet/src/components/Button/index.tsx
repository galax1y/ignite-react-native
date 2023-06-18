import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  variant?: 'default' | 'outline'
}

export function Button({ title, variant='default', ...props } : Props) {
  return (
    <Container
      variant={variant}
      activeOpacity={0.7}
      {...props}
    >
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}