import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient'

import PINCode from '@haskkor/react-native-pincode'

const Setup: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <LinearGradient
          colors={['#9795f0', '#fbc8d4']}
          style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faCheck} size={36} color='#ffffff' />
        </LinearGradient>
        <Text style={styles.topTitle}>Welcome</Text>
      </View>
      <View style={styles.bottom}>
        <PINCode status={'choose'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 1,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8'
  },
  iconWrapper: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
    // backgroundColor: '#000000'
  },
  topTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 12
  },
  bottom: {
    height: '60%',
    backgroundColor: '#ECECEC'
  }
})

export default Setup
