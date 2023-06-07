import { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';
import { Colors } from '../../../../styles/colors';
import { TaskProps } from '../Task';
import uuid from 'react-native-uuid';

interface NewTaskInputProps {
  handleNewTask: (task: TaskProps) => void
}

export function NewTaskInput({ handleNewTask }: NewTaskInputProps) {
  const [inputText, setInputText] = useState<string>('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={Colors.gray300}
      />
      <TouchableOpacity
        onPress={() => handleNewTask({
          id: uuid.v4().toString(),
          description: inputText,
          isCompleted: false,
        })}
        style={styles.button}
      >
        <Text style={styles.text}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}