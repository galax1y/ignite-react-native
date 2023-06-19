import { TouchableOpacityProps } from 'react-native';
import { Container, StatusIndicator, StyledText } from './styles';

type ToggleButtonProps = TouchableOpacityProps & {
  title: string
  mainColor: string
  backgroundColor: string
  state?: boolean
}

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <Container
      activeOpacity={0.4}
      {...props}
    >
      <StatusIndicator color={props.mainColor} />
      <StyledText>
        {props.title}
      </StyledText>
    </Container>
  )
}