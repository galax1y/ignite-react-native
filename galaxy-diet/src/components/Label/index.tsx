import { StyledText } from './styles';

interface LabelProps {
  text: string
}

export function Label({ text }: LabelProps) {
  return (
    <StyledText>
      {text}
    </StyledText>
  )
}