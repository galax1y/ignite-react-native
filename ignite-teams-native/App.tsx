import { StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import theme from './src/theme'
import { ThemeProvider } from 'styled-components/native';

import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';

export default function App() {
  const [loaded] =  useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor='transparent'
      />

      { loaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}