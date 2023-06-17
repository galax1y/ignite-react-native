import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '@screens/Home'
import { Stats } from '@screens/Stats'
import { Create } from '@screens/Create'
import { Created } from '@screens/Created'

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='stats' component={Stats} />
      <Screen name='create' component={Create} />
      <Screen name='created' component={Created} />
    </Navigator>
  )
}