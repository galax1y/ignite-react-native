import { useTheme } from 'styled-components/native';
import { Container } from './styles';
import { TextInputProps, TextInput } from 'react-native'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...props }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_3}
      {...props}
    />
  )
}