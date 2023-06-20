import AsyncStorage from '@react-native-async-storage/async-storage'

import { dayGetAll } from './day-get-all'
import { DayProps } from 'src/@types/storage'
import { DAY_COLLECTION } from '@storage/storage-config'

export async function dayCreate(newDay: DayProps) {
  try {
    const days = await dayGetAll()

    const dayAlreadyExists = days.some((item) => item.day === newDay.day)

    if (dayAlreadyExists) {
      throw new Error('Day already exists')
    }

    const updatedDays = [...days, newDay]

    await AsyncStorage.setItem(DAY_COLLECTION, JSON.stringify(updatedDays))
  } catch (err) {
    console.error('Something went wrong.')
    throw err
  }
}