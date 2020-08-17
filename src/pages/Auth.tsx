import React, { useEffect } from 'react'

import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { styles } from './Auth.style'

import PINCode, { hasUserSetPinCode } from '@haskkor/react-native-pincode'

const Auth: React.FC = () => {
  const navigation = useNavigation()

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
            navigation.navigate('Home')
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Auth
