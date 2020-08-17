import React, { useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { hasUserSetPinCode } from '@haskkor/react-native-pincode'

type Props = {}

const Loading: React.FC<Props> = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const setup = async () => {
      const endSetup = await hasUserSetPinCode()
      console.log(endSetup)
      if (endSetup) navigation.navigate('Auth')
      else navigation.navigate('Setup')
    }
    setup()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Replace Text to Loading animation */}
      <Text>Loading</Text>
    </SafeAreaView>
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
