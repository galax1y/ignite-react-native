import { StyleSheet } from 'react-native'
import { Colors } from '../../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.gray400,

    backgroundColor: Colors.gray500,
    
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  content: {
    flex: 1,
    color: Colors.gray100,
    fontSize: 14,
    lineHeight: 14,
  },

  checkboxUndone: {
    height: 24,
    width: 24,
    backgroundColor: 'transparent',
    borderRadius: 999,
    borderStyle: 'solid',
    borderColor: Colors.blue,
    borderWidth: 3,
  },
  checkboxDone: {
    height: 24,
    width: 24,
    backgroundColor: Colors.purpleDark,
    borderRadius: 999,
    borderStyle: 'solid',
    borderColor: Colors.purpleDark,
    borderWidth: 3,
  },
  checkmark: {
    textAlign: 'center',
    color: '#FFF',
  },
  trash: {
    height: 14,
  }
})