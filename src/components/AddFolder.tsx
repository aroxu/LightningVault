import React, { useState, useEffect } from 'react'
import { Modal, Text, TouchableOpacity, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Modal.style'
import { useDispatch } from 'react-redux'
import { addFolder } from '../utils/manageData'

import { setFolder } from '../store/data'

type props = {
  visible: boolean
  onCancel: () => void
}

const AddFolder: React.FC<props> = ({ visible, onCancel }: props) => {
  const [text, setText] = useState<string>('')
  const [addAble, setAddAble] = useState<boolean>(false)

  const dispatch = useDispatch()

  const onClickAdd = async () => {
    onCancel()
    setText('')
    const data = await addFolder(text, '')
    dispatch(setFolder(data))
  }

  useEffect(() => {
    setAddAble(text.trim() !== '')
  }, [])

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onCancel()
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <View style={styles.header}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>
                  Add Folder
                </Text>
                <TouchableOpacity onPress={onCancel}>
                  <Icon name='ios-close-outline' size={22} />
                </TouchableOpacity>
              </View>
              <TextInput
                style={[{ marginTop: 18 }, styles.textInputStyle]}
                placeholder='Folder Name'
                placeholderTextColor='#232323'
                maxLength={16}
                onChangeText={(value) => setText(value)}
              />
            </View>
            <View style={styles.actions}>
              <View />
              <View>
                <TouchableOpacity
                  style={{ marginTop: 12 }}
                  // disabled={addAble}
                  onPress={onClickAdd}>
                  <Text>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AddFolder
