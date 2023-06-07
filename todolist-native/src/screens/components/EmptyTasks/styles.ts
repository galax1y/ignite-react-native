import { StyleSheet } from 'react-native'
import { Colors } from '../../../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
  },
  baseText: {
    marginTop: 16,
    color: Colors.gray300,
    fontSize: 14,
  },
  strongText: {
    fontWeight: 'bold',
  },
})