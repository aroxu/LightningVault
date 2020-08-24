import React, { useState, useEffect } from 'react'
import { Modal, Text, TouchableOpacity, TextInput, View } from 'react-native'
import { removeFolder, renameFolder } from '../utils/manageData'
// eslint-disable-next-line no-unused-vars
import { Folder } from '../models'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Modal.style'
import { useDispatch } from 'react-redux'
import { setFolder } from '../store/data'

type props = {
  folder: Folder | null
  visible: boolean
  onCancel: () => void
}

const UpdateFolder: React.FC<props> = ({
  visible,
  onCancel,
  folder
}: props) => {
  if (!folder) {
    return <></>
  }
  const [text, setText] = useState<string>('')
  const [showDelete, setShowDelete] = useState<boolean>(false)
  const [isRenameAble, setIsRenameAble] = useState<boolean>(true)

  const cancel = () => {
    onCancel()
    setShowDelete(false)
  }

  const dispatch = useDispatch()

  const onClickUpdate = async (): Promise<void> => {
    cancel()
    const data = await renameFolder(folder.id, text) // folder.id가 지랄함
    dispatch(setFolder(data))
  }

  const deleteFolder = async (): Promise<void> => {
    cancel()
    const data = await removeFolder(folder.id)
    dispatch(setFolder(data))
  }

  useEffect(() => {
    setText(folder.name)
  }, [])

  useEffect(() => {
    setIsRenameAble(text.trim() === '' || text.trim() === folder.name)
  }, [text])

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
            {!showDelete ? (
              <>
                <View style={{ alignItems: 'flex-start', width: '100%' }}>
                  <View style={styles.header}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>
                      Update Folder
                    </Text>
                    <TouchableOpacity onPress={cancel}>
                      <Icon name='ios-close-outline' size={22} />
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    style={[{ marginTop: 12 }, styles.textInputStyle]}
                    placeholder='Label'
                    underlineColorAndroid='transparent'
                    maxLength={16}
                    placeholderTextColor='#2323232'
                    value={text}
                    onChangeText={(text) => setText(text)}
                  />
                </View>
                <View style={styles.actions}>
                  <View>
                    <TouchableOpacity
                      disabled={isRenameAble}
                      onPress={onClickUpdate}>
                      <Text
                        style={{ color: isRenameAble ? '#000000' : '#343434' }}>
                        Rename
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => setShowDelete(true)}>
                      <Text style={{ color: '#ff0000' }}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <>
                <View style={{ alignItems: 'flex-start', width: '100%' }}>
                  <View style={styles.header}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>
                      Delete Folder
                    </Text>
                    <TouchableOpacity onPress={cancel}>
                      <Icon name='ios-close-outline' size={22} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.actions}>
                  <View>
                    <TouchableOpacity onPress={deleteFolder}>
                      <Text style={{ color: '#ff0000' }}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity onPress={cancel}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default UpdateFolder
