import { GROUP_COLLECTION } from '@storage/storage-config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GroupGetAll } from './group-get-all'

export async function groupCreate(newGroupName: string) {
  try {
    const groups = await GroupGetAll()

    const updatedGroups = [...groups, newGroupName]

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(updatedGroups))
  } catch (err) {
    console.error('Something went wrong', err)
    throw err
  }
}