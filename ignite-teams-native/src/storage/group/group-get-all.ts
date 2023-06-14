import { GROUP_COLLECTION } from '@storage/storage-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function groupGetAll() {
  const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

  const groups: string[] = storage ? JSON.parse(storage) : []

  return groups
}