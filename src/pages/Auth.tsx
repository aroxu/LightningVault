import React from 'react'

import { SafeAreaView, View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from '../styles/Auth.style'

import PINCode from '@haskkor/react-native-pincode'

import { useDispatch } from 'react-redux'
import { showHome } from '../store/nav'

const Auth: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <LinearGradient
          colors={['#9795F0', '#FBC8D4']}
          style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faCheck} size={36} color='#ffffff' />
        </LinearGradient>
        <Text style={styles.topTitle}>Welcome</Text>
      </View>
      <View style={styles.bottom}>
        <PINCode
          status={'enter'}
          passwordLength={6}
          finishProcess={(data) => {
            dispatch(showHome())
          }}
          touchIDDisabled={true}
        />
      </View>
    </SafeAreaView>
  )
}

export default Auth
