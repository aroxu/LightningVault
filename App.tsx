import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { hasUserSetPinCode } from '@haskkor/react-native-pincode'

import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// eslint-disable-next-line no-unused-vars
import rootReducer, { RootState } from './src/store'
import { setSetupEnd } from './src/store/nav'
import ReduxThunk from 'redux-thunk'

import { Folder } from './src/models'

import HomeScreen from './src/pages/Home'
import PasswordListScreen from './src/pages/PasswordList'
import AuthScreen from './src/pages/Auth'
import SetupScreen from './src/pages/Setup'
import SettingsScreen from './src/pages/Settings'
import LoadingScreen from './src/components/Loading'

export type StackParamList = {
  PasswordList: {
    data: Folder
  }
}

const Stack = createStackNavigator<StackParamList>()

const Nav: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  const isHome = useSelector((state: RootState) => state.nav.showHome)
  const setupEnd = useSelector((state: RootState) => state.nav.setupEnd)
  const dispatch = useDispatch()

  useEffect(() => {
    const setup = async () => {
      const endSetup: boolean = await hasUserSetPinCode()
      dispatch(setSetupEnd(endSetup))
      setLoading(false)
    }
    setup()
  }, [])

  return (
    <>
      <StatusBar barStyle='dark-content' />
      {loading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isHome ? (
              <>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Settings' component={SettingsScreen} />
                <Stack.Screen
                  name='PasswordList'
                  component={PasswordListScreen}
                />
              </>
            ) : (
              <>
                {setupEnd ? (
                  <Stack.Screen name='Auth' component={AuthScreen} />
                ) : (
                  <Stack.Screen name='Setup' component={SetupScreen} />
                )}
              </>
            )}
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
