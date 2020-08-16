import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/pages/Home'
import AuthScreen from './src/pages/Auth'

const Stack = createStackNavigator()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Auth' component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
