import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  title?: string
  variant?: 'default' | 'outline'
}

export function ButtonIcon({ title, variant='default', ...props } : Props) {
  return (
    <Container
      activeOpacity={0.7}
      variant={variant}
      {...props}
    >
      {props.children}

      {title ? <Title variant={variant}>{title}</Title> : null}
    </Container>
  )
}