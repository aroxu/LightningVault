import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, TextInput, View } from 'react-native'
import { addPassword, addPasswordToFolder } from '../utils/manageData'
// eslint-disable-next-line no-unused-vars
import { Folder } from '../models'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Modal.style'

type props = {
  folder: Folder
  visible: boolean
  onCancel: () => void
  onAdd: () => void
}

const AddPassword: React.FC<props> = ({
  folder,
  visible,
  onCancel,
  onAdd
}: props) => {
  const [text, setText] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const onClickAdd = async (): Promise<void> => {
    onCancel()
    const passwordID = await addPassword(text, name, password)
    await addPasswordToFolder(folder.id, passwordID)
    onAdd()
  }

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
                  Add Password
                </Text>
                <TouchableOpacity onPress={onCancel}>
                  <Icon name='ios-close-outline' size={22} />
                </TouchableOpacity>
              </View>
              <TextInput
                style={[{ marginTop: 18 }, styles.textInputStyle]}
                placeholder='Label'
                placeholderTextColor='#232323'
                underlineColorAndroid='transparent'
                onChangeText={(text) => setText(text)}
              />
              <TextInput
                style={[{ marginTop: 12 }, styles.textInputStyle]}
                placeholder='User Name'
                underlineColorAndroid='transparent'
                placeholderTextColor='#232323'
                onChangeText={(text) => setName(text)}
              />
              <TextInput
                style={[{ marginTop: 12 }, styles.textInputStyle]}
                placeholder='Password'
                placeholderTextColor='#232323'
                underlineColorAndroid='transparent'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={styles.actions}>
              <View>
                <TouchableOpacity
                  style={{ marginTop: 12 }}
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

export default AddPassword
