import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/clipboard.png')} style={styles.image} />
      <Text style={styles.baseText}>
        <Text style={styles.strongText}>
          Você ainda não tem tarefas cadastradas.
          {'\n'}
        </Text>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}