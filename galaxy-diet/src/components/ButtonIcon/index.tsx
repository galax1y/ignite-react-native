import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  title?: string
}

export function ButtonIcon({ title, ...props } : Props) {
  return (
    <Container activeOpacity={0.7} {...props}>
      {props.children}

      {title ? <Title>{title}</Title> : null}
    </Container>
  )
}