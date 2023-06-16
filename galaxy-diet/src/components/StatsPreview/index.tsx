import { ArrowIcon, Container, Heading, Span } from './styles';

interface StatsPreviewProps {
  handlePress: () => void
}

export function StatsPreview({ handlePress }: StatsPreviewProps) {
  return (
    <Container onPress={handlePress} activeOpacity={0.6}>
      <Heading>90.86%</Heading>
      <Span>das refeições dentro da dieta</Span>

      <ArrowIcon />
    </Container>
  )
}