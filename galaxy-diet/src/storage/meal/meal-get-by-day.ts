import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storage-config'
import { MealProps } from 'src/@types/storage'

export async function mealGetByDay(day: Date) {
  try {
    const dayFormat = day.toISOString()

    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${dayFormat}`)

    const meals: MealProps[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (err) {
    console.error('Something went wrong.')
    throw err
  }
}