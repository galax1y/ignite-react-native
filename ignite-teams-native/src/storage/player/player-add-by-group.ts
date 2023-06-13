import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'

import { PLAYER_COLLECTION } from '@storage/storage-config'
import { PlayerStorageDTO } from './player-storage-dto'
import { playersGetByGroup } from './player-get-by-group'

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storagePlayers = await playersGetByGroup(group)

    const playerAlreadyExists = storagePlayers.filter(player => player.name === newPlayer.name)

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')
    }

    const updatedStorage = JSON.stringify([...storagePlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, updatedStorage)
  } catch (err) {
    throw err
  }
}
