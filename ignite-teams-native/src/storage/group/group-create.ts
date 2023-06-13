import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@utils/AppError'
import { GroupGetAll } from './group-get-all'
import { GROUP_COLLECTION } from '@storage/storage-config'

export async function groupCreate(newGroupName: string) {
  try {
    const groups = await GroupGetAll()

    const groupAlreadyExists = groups.includes(newGroupName)

    if (groupAlreadyExists) {
      throw new AppError('Group already exists.')
    }
    
    const updatedGroups = [...groups, newGroupName]

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(updatedGroups))
  } catch (err) {
    console.error('Something went wrong', err)
    throw err
  }
}