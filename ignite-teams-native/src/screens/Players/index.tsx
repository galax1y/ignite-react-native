import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from '@storage/player/player-storage-dto';
import { playerAddByGroup } from '@storage/player/player-add-by-group';
import { playersGetByGroupAndTeam } from '@storage/player/player-get-by-group-and-team';

import { Container, Form, HeaderList, PlayerAmount } from './styles';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { PlayerCard } from '@components/PlayerCard';
import { useRoute } from '@react-navigation/native';
import { playerRemoveByGroup } from '@storage/player/player-remove-by-group';

type RouteParams = {
  group: string
}

export function Players() {
  const [team, setTeam] = useState<string>('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName, setNewPlayerName] = useState<string>('')

  const route = useRoute()
  const { group } = route.params as RouteParams

  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
    }

    const newPlayer : PlayerStorageDTO = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)

      setNewPlayerName('')

      newPlayerNameInputRef.current?.blur()

      fetchPlayersByTeam()
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Nova pessoa', err.message)
      } else {
        console.log(err)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar')
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)

      fetchPlayersByTeam()
    } catch (err) {
      console.log(err)
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.')
    }

  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (err) {
      console.log(err)
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado')
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle='adicione a galera e separe os times'
      />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder='Nome do participante'
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          returnKeyType='done'
        />
        <ButtonIcon
          icon='add'
          onPress={handleAddPlayer}
        />
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
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty message='Não há pessoas nesse time.' />}
        contentContainerStyle={[ { paddingBottom: 100 }, players.length === 0 && { flex: 1 } ]}
        renderItem={({ item}) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
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