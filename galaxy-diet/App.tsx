import { StatusBar } from 'react-native'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { Routes } from '@routes/index'

import theme from './src/theme'
import { ThemeProvider } from 'styled-components/native'

import { Loading } from '@components/Loading'

export default function App() {
  const [loaded] =  useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />

      {loaded ? <Routes /> : <Loading />}

    </ThemeProvider>
  )
}
