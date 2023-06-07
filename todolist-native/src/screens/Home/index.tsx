import { useState } from 'react'
import { View, Image, Text, Alert, FlatList } from 'react-native'

import { styles } from './styles'
import { Task, TaskProps } from '../components/Task'
import { NewTaskInput } from '../components/NewTaskInput'
import { EmptyTasks } from '../components/EmptyTasks'

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [finishedAmount, setFinishedAmount] = useState<number>(0)

  function addTask(newTask: TaskProps) {
    if (newTask.description.length === 0) {
      Alert.alert('Criação de tarefa', 'Nome de tarefa inválido', [{
        text: 'Entendi',
        style: 'destructive',
      }])
    }
    

    setTasks((prevState) => [...prevState, newTask])
  }

  function deleteTask(id: string) {
    setTasks((prevState) => {
      const newState = prevState.filter(item => item.id !== id)

      if (prevState.find(item => item.id === id)?.isCompleted === true) {
        setFinishedAmount(prevState => prevState - 1)
      }

      return [...newState]
    })
  }

  function updateTask(id: string) {
    setTasks((prevState) => {
      const itemIndex = prevState.findIndex(item => item.id === id)

      const toggle = !prevState[itemIndex].isCompleted

      if (toggle === true) {
        setFinishedAmount(prevState => prevState + 1)
      }

      if (toggle === false) {
        setFinishedAmount(prevState => prevState - 1)
      }

      prevState[itemIndex].isCompleted = toggle
      
      prevState.splice(itemIndex, 1, prevState[itemIndex])

      return [...prevState]
    })
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')}></Image>
      </View>

      <NewTaskInput handleNewTask={addTask} />

      <View style={styles.tasks}>
        <View style={styles.tasksHeader}>
          <View style={styles.tasksCreated}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.amount}>{tasks.length}</Text>
          </View>

          <View style={styles.tasksFinished}>
            <Text style={styles.finished}>Concluídas</Text>
            <Text style={styles.amount}>{finishedAmount}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          ItemSeparatorComponent={() => <View style={{height: 8}}></View>}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Task
              key={item.id}
              id={item.id}
              description={item.description}
              isCompleted={item.isCompleted}
              onDelete={deleteTask}
              onCheck={updateTask}
            />
          )}
          ListEmptyComponent={
            <EmptyTasks />
          }
        >
        </FlatList>
      </View>
    </View>
  )
}