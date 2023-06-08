import { StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from './src/theme'
import { ThemeProvider } from 'styled-components';

import { Groups } from '@screens/Groups'
import { Loading } from '@components/Loading';

export default function App() {
  const [loaded] =  useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      { loaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
  );
}