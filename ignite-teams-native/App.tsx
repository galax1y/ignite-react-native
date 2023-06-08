import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native'
import { Groups } from '@screens/Groups'
import theme from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Groups />
    </ThemeProvider>
  );
}