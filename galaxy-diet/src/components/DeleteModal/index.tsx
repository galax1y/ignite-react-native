import { Button } from '@components/Button';
import { Container, Content, Row, Title } from './styles';

interface DeleteModalProps {
  visibility: boolean
  setVisibility: (state: boolean) => void
}

export function DeleteModal({ visibility, setVisibility }: DeleteModalProps) {
  return (
    <Container
      animationType='fade'
      visible={visibility}
      statusBarTranslucent
      transparent
      onDismiss={() => setVisibility(!visibility)}
    >
      <Content>
        <Title>Deseja realmente excluir o registro da refeição?</Title>

        <Row>
          <Button style={{flex: 1}} variant='outline' title='Cancelar' onPress={() => setVisibility(!visibility)} />
          <Button style={{flex: 1}} variant='default' title='Sim, excluir' />
        </Row>
      </Content>
    </Container>
  )
}