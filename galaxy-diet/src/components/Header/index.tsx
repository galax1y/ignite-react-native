import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, BackButton, Container, Heading } from './styles';

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation()

  return (
    <Container>
      <BackButton
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon
          color={'#333638'}
          weight={'bold'}
          size={24}
        />
      </BackButton>

      <Heading>{title}</Heading>
    </Container>
  )
}