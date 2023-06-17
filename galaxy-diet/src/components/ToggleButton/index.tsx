import { Container, StatusIndicator, StyledText } from './styles';

interface ToggleButtonProps {
  mainColor: string
  backgroundColor: string
  isSelected: boolean
}

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <Container
      activeOpacity={0.4}
      {...props}
    >
      <StatusIndicator color={props.mainColor} />
      <StyledText>
        Toggle
      </StyledText>
    </Container>
  )
}