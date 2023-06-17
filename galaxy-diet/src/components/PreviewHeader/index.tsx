import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, BackButton, Container, Heading, Span } from './styles';

interface HeaderProps {
  inDietPercentage: number
}

export function PreviewHeader({ inDietPercentage }: HeaderProps) {
  const navigation = useNavigation()

  const isHealthy = inDietPercentage > 50 ? true : false

  return (
    <Container isHealthy={isHealthy}>
      <BackButton
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon
          color={isHealthy ? '#639339' : '#BF3B44'}
          weight={'bold'}
          size={24}
        />
      </BackButton>

      <Heading>{inDietPercentage.toFixed(2)}%</Heading>
      <Span>das refeições dentro da dieta</Span>
    </Container>
  )
}