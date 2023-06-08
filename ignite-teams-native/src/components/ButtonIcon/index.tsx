import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'; 
import { ButtonIconTypeStyleProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type='PRIMARY', ...props }: Props) {
  return (
    <Container {...props}>
      <Icon
        name={icon}
        type={type}
        {...props}
      />
    </Container>
  )
}