import React, { useState, useEffect } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
// eslint-disable-next-line no-unused-vars
import { Password, Folder } from '../models'
// eslint-disable-next-line no-unused-vars
import { useNavigation, RouteProp } from '@react-navigation/native'
import FAB from 'react-native-fab'

import PasswordItem from '../components/PasswordItem'

import {
  getPasswordByFolder,
  getFolderByID,
  getFolder
} from '../utils/manageData'

import Icon from 'react-native-vector-icons/Ionicons'

import AddPassword from '../components/AddPassword'
import UpdatePassword from '../components/UpdatePassword'
// eslint-disable-next-line no-unused-vars
import { StackParamList } from '../../App'

import { useDispatch } from 'react-redux'
import { setFolder } from '../store/data'

import AppContainer from '../components/AppContainer'

type props = {
  route: RouteProp<StackParamList, 'PasswordList'>
}

const PasswordList: React.FC<props> = ({
  route
}: {
  route: RouteProp<StackParamList, 'PasswordList'>
}) => {
  const [passwordList, setPasswordList] = useState<Array<Password>>([])
  const [addPassword, setAddPassword] = useState<boolean>(false)
  const [updatePassword, setUpdatePassword] = useState<boolean>(false)
  const [
    updatePasswordTarget,
    setUpdatePasswordTarget
  ] = useState<Password | null>(null)
  const navigation = useNavigation()

  const dispatch = useDispatch()

  useEffect(() => {
    loadPassword()
  }, [])

  const reloadFolder = async (): Promise<void> => {
    const folderList = await getFolder()
    dispatch(setFolder(folderList))
  }

  const loadPassword = async (): Promise<void> => {
    reloadFolder()
    const folder = await getFolderByID(route.params.data.id)
    const list = await getPasswordByFolder(folder.list)
    setPasswordList(list)
  }

  const handleClickFAB = () => setAddPassword(true)

  const handlePasswordLongPress = (password: Password) => {
    setUpdatePasswordTarget(password)
    setUpdatePassword(true)
  }

  return (
    <>
      <AppContainer onBack={navigation.goBack}>
        <View>
          <AddPassword
            visible={addPassword}
            onCancel={() => setAddPassword(false)}
            folder={route.params.data}
            onAdd={() => loadPassword()}
          />
        </View>
        <View>
          <UpdatePassword
            visible={updatePassword}
            onCancel={() => {
              setUpdatePasswordTarget(null)
              setUpdatePassword(false)
            }}
            password={updatePasswordTarget}
            folderID={route.params.data.id}
            onUpdate={() => {
              loadPassword()
            }}
          />
        </View>
        <View>
          <ScrollView>
            <View style={{ marginTop: 12 }}>
              {passwordList.map(
                (data: Password | undefined, index: string | number) => {
                  if (data !== undefined) {
                    return (
                      <PasswordItem
                        key={index}
                        data={data}
                        onLongPress={(data) => handlePasswordLongPress(data)}
                      />
                    )
                  }
                  return <></>
                }
              )}
            </View>
          </ScrollView>
        </View>
      </AppContainer>
      <SafeAreaView>
        <View>
          <FAB
            buttonColor='red'
            iconTextColor='#FFFFFF'
            onClickAction={handleClickFAB}
            iconTextComponent={<Icon name='ios-add' />}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default PasswordList
