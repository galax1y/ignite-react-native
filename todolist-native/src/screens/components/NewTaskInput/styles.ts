import { StyleSheet } from 'react-native'
import { Colors } from '../../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 24,
    marginTop: -32,  },
  input: {
    flex: 1,
    height: 54,
    paddingLeft: 16,
    paddingVertical: 16,
    borderRadius: 6,
    
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.gray700,
    backgroundColor: Colors.gray500,
    
    color: Colors.gray100,
    fontSize: 16,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: Colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    color: Colors.gray100,
    textAlign: 'center',

    aspectRatio: 1/1,
    borderColor: Colors.gray100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10000,
  }
})