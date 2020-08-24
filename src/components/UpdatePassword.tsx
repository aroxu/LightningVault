import React, { useState, useEffect } from 'react'
import { Modal, Text, TouchableOpacity, TextInput, View } from 'react-native'
import {
  updatePassword,
  removePassword,
  removePasswordFromFolder
} from '../utils/manageData'
// eslint-disable-next-line no-unused-vars
import { Password } from '../models'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Modal.style'

type props = {
  password: Password | null
  folderID: string
  visible: boolean
  onCancel: () => void
  onUpdate: () => void
}

const UpdatePassword: React.FC<props> = ({
  // eslint-disable-next-line react/prop-types
  password: passwordProp,
  // eslint-disable-next-line react/prop-types
  visible,
  // eslint-disable-next-line react/prop-types
  onCancel,
  // eslint-disable-next-line react/prop-types
  onUpdate,
  // eslint-disable-next-line react/prop-types
  folderID
}) => {
  if (!passwordProp) {
    return <View></View>
  }
  const [name, setName] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const onClickUpdate = async (): Promise<void> => {
    onCancel()
    const passwordID = passwordProp.id
    await updatePassword(passwordID, text, name, password)
    onUpdate()
  }

  const onClickDelete = async (): Promise<void> => {
    onCancel()
    const passwordID = passwordProp.id
    await removePasswordFromFolder(folderID, passwordID)
    await removePassword(passwordID)
    onUpdate()
  }

  useEffect(() => {
    setName(passwordProp.name)
    setPassword(passwordProp.password)
    setText(passwordProp.text)
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
                  Update Password
                </Text>
                <TouchableOpacity onPress={onCancel}>
                  <Icon name='ios-close-outline' size={22} />
                </TouchableOpacity>
              </View>
              <TextInput
                style={[{ marginTop: 12 }, styles.textInputStyle]}
                placeholder='Label'
                underlineColorAndroid='transparent'
                maxLength={32}
                placeholderTextColor='#232323'
                value={text}
                onChangeText={(text) => setText(text)}
              />
              <TextInput
                style={[{ marginTop: 12 }, styles.textInputStyle]}
                placeholder='User Name'
                underlineColorAndroid='transparent'
                maxLength={32}
                placeholderTextColor='#232323'
                value={text}
                onChangeText={(text) => setName(text)}
              />
              <TextInput
                style={[{ marginTop: 12 }, styles.textInputStyle]}
                placeholder='Password'
                underlineColorAndroid='transparent'
                maxLength={32}
                placeholderTextColor='#232323'
                value={text}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={styles.actions}>
              <View>
                <TouchableOpacity onPress={onClickDelete}>
                  <Text style={{ color: '#ff0000' }}>Delete</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={onClickUpdate}>
                  <Text>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default UpdatePassword
