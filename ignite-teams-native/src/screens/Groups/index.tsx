import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


import { Container } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { GroupGetAll } from '@storage/group/group-get-all';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await GroupGetAll()
      setGroups(data)
    } catch (err) {
      console.error('Something went wrong.')
    }
  }

  // With useEffect, if I create a group in the next screen and come back to this one, the groups will be outdated
  // useFocusEffect is created for this purpose, it's a React Navigation hook for fetching data when a screen comes back to focus
  
  // useEffect-> run side-effects when specific events are triggered, if no event dependencies are specified, executes when the screen is loaded for the first time
  // useFocusEffect -> run side-effects when the specified screen is focused
  // Side effect -> fetch data in LocalStorage

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []))

  return (
    <Container>
      <Header />

      <Highlight
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            message='Que tal cadastrar a primeira turma?'
          />
        )}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />   
    </Container>
  );
}
