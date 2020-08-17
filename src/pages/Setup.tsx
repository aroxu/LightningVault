import React, { useEffect } from 'react'

import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { styles } from './Auth.style'

import PINCode, { hasUserSetPinCode } from '@haskkor/react-native-pincode'

const Setup: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const setup = async () => {}
    setup()
  }, [])

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <LinearGradient
          colors={['#9795F0', '#FBC8D4']}
          style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faCheck} size={36} color='#ffffff' />
        </LinearGradient>
        <Text style={styles.topTitle}>Welcome Back</Text>
      </View>
      <View style={styles.bottom}>
        <PINCode
          status={'choose'}
          passwordLength={6}
          finishProcess={(data) => {
            console.log(data)
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Setup
