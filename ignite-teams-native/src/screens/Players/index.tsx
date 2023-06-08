import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Form, HeaderList, PlayerAmount } from './styles';

import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';

export function Players() {
  const [team, setTeam] = useState<string>('')
  const [players, setPlayers] = useState<string[]>([])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <Form>
        <Input
          placeholder='Nome do participante'
          autoCorrect={false}
        />

        <ButtonIcon icon='add' />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          horizontal
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        
        <PlayerAmount>
          {players.length}
        </PlayerAmount>
      </HeaderList>
    </Container>
  )
}