/* eslint-disable react/prop-types */
import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// eslint-disable-next-line no-unused-vars
import { Folder } from '../models'

type props = {
  data: Folder
}

const FolderItem: React.FC<props> = ({ data }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.card}
      // onPress={() => navigation.navigate('PasswordList', [])}
    >
      <Text>{data.name}</Text>
      <Text>
        {data.list.length
          ? `${data.list.length} ${data.list.length === 1 ? 'Item' : 'Items'}`
          : 'No Item'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5fd',
    flex: 1,
    borderRadius: 12,
    margin: 8,
    padding: 6
  }
})

export default FolderItem
