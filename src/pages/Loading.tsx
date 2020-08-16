import React, { useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'

const Loading: React.FC = ({ navigation }) => {
  useEffect(() => {
    const isSetupEnd = false
    if (isSetupEnd) navigation.navigate('Auth')
    else navigation.navigate('Setup')
  }, [])

  return (
    <View style={styles.container}>
      {/* TODO: Replace Text to Loading animation */}
      <Text>Loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Loading
