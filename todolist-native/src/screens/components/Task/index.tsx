import { View, Text, TouchableHighlight, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Colors } from '../../../../styles/colors'

export interface TaskProps {
  id: string
  description: string
  isCompleted: boolean
  onDelete?: (id: string) => void
  onCheck?: (id: string) => void
}

export function Task({ id, description, isCompleted, onDelete, onCheck }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={isCompleted ? styles.checkboxDone : styles.checkboxUndone}
        onPress={onCheck ? () => onCheck(id) : () => {}}
      >
        <Text style={styles.checkmark}>
          {isCompleted ? '✓': ''}
        </Text>
      </TouchableHighlight>

      <Text style={styles.content}>
        {description}
      </Text>

      <TouchableOpacity
        onPress={onDelete ? () => onDelete(id) : () => {}}
      >
        <Image style={styles.trash} source={require('../../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}