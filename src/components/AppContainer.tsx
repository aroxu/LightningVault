import React from 'react'
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

type props = {
  onBack: () => void
}

const AppContainer: React.FC<props> = ({ children, onBack }: props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name='arrow-back' onPress={onBack} size={24} />
        </TouchableOpacity>
      </View>
      <View>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 18
  },
  header: {
    marginTop: 18,
    marginHorizontal: 12
  }
})

export default AppContainer
