import React, { useState, useEffect } from 'react'
import { deleteUserPinCode } from '@haskkor/react-native-pincode'

import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Home: React.FC = () => {
  useEffect(() => {})

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => deleteUserPinCode()}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home
