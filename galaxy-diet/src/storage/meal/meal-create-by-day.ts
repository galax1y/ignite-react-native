import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storage-config';
import { MealProps } from 'src/@types/storage';

export async function mealCreateByDay(newMeal: MealProps, day: Date) {
  const dayFormat = day.toISOString()

  const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${dayFormat}`)

  const meals: MealProps[] = storage ? JSON.parse(storage) : []

  // Se já existe uma refeição criada com mesmo nome e o mesmo horário da nova refeição, então não permite que a nova seja criada.
  const mealAlreadyExists = meals.filter(meal => (meal.name === newMeal.name) && (meal.time === newMeal.time))

  if (mealAlreadyExists.length > 0) {
    throw new Error('Meal already exists.')
  }

  const updatedMeals = JSON.stringify([...meals, newMeal])

  await AsyncStorage.setItem(`${MEAL_COLLECTION}-${dayFormat}`, updatedMeals)
}