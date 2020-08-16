import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home
