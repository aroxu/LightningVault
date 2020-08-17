import React from 'react'
import { View, StyleSheet } from 'react-native'
// eslint-disable-next-line no-unused-vars
import { Password } from '../models'

import { StackNavigationProp } from '@react-navigation/stack'

import PasswordItem from '../components/PasswordItem'

type props = {
  navigation: StackNavigationProp<{
    data: Array<Password>
  }>
}

const PasswordList: React.FC<props> = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {navigation.data.map((data: Password, index: string | number) => (
        <PasswordItem key={index} data={data} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default PasswordList
