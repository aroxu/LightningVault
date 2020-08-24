import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setFolder as setFolderAction } from '../store/data'
import { showAuth } from '../store/nav'

import { setFolder, setPassword } from '../utils/manageData'

import AppContainer from '../components/AppContainer'
import ConfirmReset from '../components/ConfirmReset'
import ResetPinCode from '../components/ResetPincodeConfirm'

import Snackbar from 'react-native-snackbar'
import { deleteUserPinCode } from '@haskkor/react-native-pincode'

type props = {}

const Settings: React.FC<props> = () => {
  const [confirmResetVisible, setConfirmResetVislible] = useState<boolean>(
    false
  )
  const [resetPincodeVisible, setResetPincodeVisible] = useState<boolean>(false)

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const resetAll = async () => {
    await setFolder([])
    await setPassword([])
    dispatch(setFolderAction([]))
    Snackbar.show({
      text: 'All data has been reset',
      duration: Snackbar.LENGTH_SHORT
    })
  }

  const onDeleteConfirmClose = (del: boolean) => {
    setConfirmResetVislible(false)
    if (del) resetAll()
  }

  const onResetPincodeClose = async (reset: boolean) => {
    setResetPincodeVisible(false)
    if (reset) {
      await deleteUserPinCode()
      dispatch(showAuth())
    }
  }

  return (
    <AppContainer onBack={navigation.goBack}>
      <SafeAreaView>
        <View>
          <ConfirmReset
            visible={confirmResetVisible}
            onCancel={onDeleteConfirmClose}
          />
          <ResetPinCode
            visible={resetPincodeVisible}
            onCancel={onResetPincodeClose}
          />
        </View>
        <View style={{ marginTop: 24, marginHorizontal: 24 }}>
          <BuildCategory name={'danger zone'}>
            <BuildButton
              name='Change Auth Password'
              buttonName='Update'
              description='Update Your Auth Password.'
              color='#ff0000'
              onPress={() => setResetPincodeVisible(true)}
            />
            <BuildButton
              name='Delete All Data'
              buttonName='Delete All'
              description='Delete All data of password and folder.'
              color='#ff0000'
              onPress={() => setConfirmResetVislible(true)}
            />
          </BuildCategory>
        </View>
      </SafeAreaView>
    </AppContainer>
  )
}

type buildCategoryProps = {
  name: string
}
const BuildCategory: React.FC<buildCategoryProps> = ({
  name,
  children
}: buildCategoryProps) => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 22, fontWeight: '500' }}>{name}</Text>
      </View>
      <View style={{}}>{children}</View>
    </View>
  )
}

type buildButtonProps = {
  name: string
  buttonName: string
  description: string
  color?: string
  onPress: () => void
}
const BuildButton: React.FC<buildButtonProps> = ({
  name,
  buttonName,
  description,
  color = '#000000',
  onPress
}: buildButtonProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12
      }}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 16 }}>{name}</Text>
        <Text style={{ fondSize: 13, color: '#232323' }}>{description}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            paddingVertical: 8,
            paddingHorizontal: 14,
            borderColor: color,
            borderRadius: 20,
            borderWidth: 1
          }}>
          <Text style={{ color }}>{buttonName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Settings
