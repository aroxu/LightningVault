import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { hasUserSetPinCode } from '@haskkor/react-native-pincode'

import HomeScreen from './src/pages/Home'
import AuthScreen from './src/pages/Auth'
import SetupScreen from './src/pages/Setup'
import LoadingScreen from './src/components/Loading'

const Stack = createStackNavigator()

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [setupend, setSetupend] = useState<boolean>(false)
  const [showHome, setShowHome] = useState<boolean>(false)
  useEffect(() => {
    const setup = async () => {
      const endSetup: boolean = await hasUserSetPinCode()
      setSetupend(endSetup)
      setLoading(false)
    }
    setup()
  }, [])
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {showHome ? (
              <>
                {setupend ? (
                  <Stack.Screen
                    name='Auth'
                    component={AuthScreen}
                    initialParams={{ setShowHome: () => setShowHome(true) }}
                  />
                ) : (
                  <Stack.Screen
                    name='Setup'
                    component={SetupScreen}
                    initialParams={{ setShowHome: () => setShowHome(true) }}
                  />
                )}
              </>
            ) : (
              <Stack.Screen name='Setup' component={SetupScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  )
}

export default App
