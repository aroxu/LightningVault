import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/pages/Home'
import AuthScreen from './src/pages/Auth'
import SetupScreen from './src/pages/Setup'
import LoadingScreen from './src/pages/Loading'

const Stack = createStackNavigator()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Loading' component={LoadingScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Auth' component={AuthScreen} />
        <Stack.Screen name='Setup' component={SetupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
