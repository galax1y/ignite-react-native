import { ArrowIcon, Container, Heading, Span } from './styles';

export function StatsPreview() {
  return (
    <Container activeOpacity={0.6}>
      <Heading>90.86%</Heading>
      <Span>das refeições dentro da dieta</Span>

      <ArrowIcon />
    </Container>
  )
}