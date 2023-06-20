import AsyncStorage from '@react-native-async-storage/async-storage'
import { DAY_COLLECTION } from '@storage/storage-config';
import { DayProps } from 'src/@types/storage';


export async function dayGetAll(): Promise<DayProps[]> {
  const storage = await AsyncStorage.getItem(DAY_COLLECTION)

  const days: DayProps[] = storage ? JSON.parse(storage) : []
  
  return days
}