import { Container, Heading, Span } from './styles';

interface KeypointProps {
  point: string
  description: string
  color?: 'green' | 'red' | 'neutral'
}

export function Keypoint({ point, description, color='neutral' }: KeypointProps) {
  return (
    <Container color={color}>
      <Heading>
        {point}
      </Heading>
      <Span>
        {description}
      </Span>
    </Container>
  )
}