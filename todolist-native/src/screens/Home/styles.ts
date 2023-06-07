import { StyleSheet } from 'react-native'
import { Colors } from '../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: Colors.gray600,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray700,
    height: 172,
  },
  tasks: {
    width: '100%',
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray400,
  },
  tasksCreated: {
    flexDirection: 'row',
    gap: 8,
  },
  tasksFinished: {
    flexDirection: 'row',
    gap: 8,
  },
  created: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 14,
  },
  finished: {
    color: Colors.purple,
    fontWeight: 'bold',
    fontSize: 14,
  },
  amount: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10000,

    backgroundColor: Colors.gray400,
    
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.gray200,
  },

})