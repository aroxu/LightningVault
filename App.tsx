import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { hasUserSetPinCode } from '@haskkor/react-native-pincode'

import { Provider, useSelector } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// eslint-disable-next-line no-unused-vars
import rootReducer, { RootState } from './src/store'
import ReduxThunk from 'redux-thunk'

import HomeScreen from './src/pages/Home'
import AuthScreen from './src/pages/Auth'
import SetupScreen from './src/pages/Setup'
import LoadingScreen from './src/components/Loading'

const Stack = createStackNavigator()

const Nav: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [setupend, setSetupend] = useState<boolean>(false)

  const isHome = useSelector((state: RootState) => state.nav.showHome)

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
            {/* {isHome ? ( */}
            <Stack.Screen name='Home' component={HomeScreen} />
            {/* ) : (
              <>
                {setupend ? (
                  <Stack.Screen name='Auth' component={AuthScreen} />
                ) : (
                  <Stack.Screen name='Setup' component={SetupScreen} />
                )}
              </>
            )} */}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  )
}

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  )
}

export default App
