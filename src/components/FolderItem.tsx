/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// eslint-disable-next-line no-unused-vars
import { Folder } from '../models'

import Icon from 'react-native-vector-icons/Ionicons'

type props = {
  data: Folder
  onLongPress: () => void
}

const FolderItem: React.FC<props> = ({ data, onLongPress }) => {
  if (!data) {
    console.warn('adsf')
    return <></>
  }
  const navigation = useNavigation()

  const handleClickCard = () => {
    navigation.navigate('PasswordList', { data })
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handleClickCard}
      onLongPress={onLongPress}>
      <Icon name='ios-folder-open-outline' size={18} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 12,
          marginRight: 6
        }}>
        <Text style={{}}>{data.name}</Text>
        <Text>
          {data.list.length
            ? `${data.list.length} ${data.list.length === 1 ? 'Item' : 'Items'}`
            : 'No Item'}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5fd',
    flex: 1,
    borderRadius: 12,
    margin: 8,
    padding: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  }
})

export default FolderItem
