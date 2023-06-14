import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION, GROUP_COLLECTION } from '@storage/storage-config'
import { groupGetAll } from './group-get-all'

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupGetAll()

    const groups = storedGroups.filter(group => group !== groupDeleted)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  } catch (err) {
    throw err
  }
}