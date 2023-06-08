import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Form, HeaderList, PlayerAmount } from './styles';

import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { PlayerCard } from '@components/PlayerCard';
import { Button } from '@components/Button';

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

      <FlatList
        data={players}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty message='Não há pessoas nesse time.' />}
        contentContainerStyle={[ { paddingBottom: 100 }, players.length === 0 && { flex: 1 } ]}
        renderItem={({ item}) => (
          <PlayerCard
            name={item}
            onRemove={() => {}}
          />
        )}
      />

      <Button
        title='Remover Turma'
        type='SECONDARY'
      />
    </Container>
  )
}