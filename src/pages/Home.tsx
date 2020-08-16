import React from 'react'

import { SafeAreaView, Text, StyleSheet } from 'react-native'

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home
