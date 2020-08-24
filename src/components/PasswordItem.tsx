import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Clipboard from '@react-native-community/clipboard'
// eslint-disable-next-line no-unused-vars
import { Password } from '../models'
import Snackbar from 'react-native-snackbar'
import Icon from 'react-native-vector-icons/Ionicons'

type props = {
  data: Password
  onLongPress: (password: Password) => void
}

const PasswordItem: React.FC<props> = ({
  data,
  onLongPress
}: {
  data: Password
  onLongPress: (password: Password) => void
}) => {
  const handleClickCard = () => {
    Clipboard.setString(data.password)
    Snackbar.show({
      text: 'Your password has been copied',
      duration: Snackbar.LENGTH_SHORT
    })
  }
  const handleLongPress = () => {
    onLongPress(data)
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={handleClickCard}
        onLongPress={handleLongPress}>
        <View style={styles.cardDetail}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{data.text}</Text>
        </View>
        <View style={[styles.cardDetail, { marginTop: 8 }]}>
          <Icon name='at' size={18} />
          <Text style={{}}>{data.name}</Text>
        </View>
        <View style={styles.cardDetail}>
          <Icon name='key-outline' size={18} />
          <Text style={{}}>{data.password}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5fd',
    flex: 1,
    borderRadius: 12,
    margin: 8,
    padding: 15,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    paddingHorizontal: 12
  },
  cardDetail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3
  }
})

export default PasswordItem
