import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { getFolder } from '../utils/manageData'
import FAB from 'react-native-fab'
import Icon from 'react-native-vector-icons/Ionicons'

import { useSelector, useDispatch } from 'react-redux'
import { setFolder } from '../store/data'

// eslint-disable-next-line no-unused-vars
import { Folder } from '../models'

import FolderItem from '../components/FolderItem'
// eslint-disable-next-line no-unused-vars
import AddFolder from '../components/AddFolder'
import UpdateFolder from '../components/UpdateFolder'
// eslint-disable-next-line no-unused-vars
import { RootState } from '../store'

import { useNavigation } from '@react-navigation/native'

const Home: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState<string>('')
  const [addFolderVisible, setAddFolderVisible] = useState<boolean>(false)
  const [updateFolderVisible, setUpdateFolderVisible] = useState<boolean>(false)
  const [updateFolderTarget, setUpdateFolderTarget] = useState<Folder | null>(
    null
  )
  const folders = useSelector((state: RootState) => state.data.folder)

  const navigation = useNavigation()

  const dispatch = useDispatch()

  useEffect(() => {
    const fetch = async () => {
      const folderList = await getFolder()
      dispatch(setFolder(folderList))
    }
    fetch()
  }, [])

  const sortFolder = (): Folder[] => {
    return folders.sort((folderList, folderItem) =>
      folderList.name < folderItem.name
        ? -1
        : folderList.name > folderItem.name
        ? 1
        : 0
    )
  }

  const handleSettings = () => navigation.navigate('Settings')

  const handleLongPressItem = (item: Folder) => {
    setUpdateFolderTarget(item)
    setUpdateFolderVisible(true)
  }

  const renderFolder = (item: Folder, index: number) => (
    <>
      {console.warn(item)}
      <FolderItem
        key={index}
        data={item}
        onLongPress={() => handleLongPressItem(item)}
      />
    </>
  )

  return (
    <>
      <View style={styles.background}>
        <SafeAreaView style={styles.container}>
          <AddFolder
            visible={addFolderVisible}
            onCancel={() => setAddFolderVisible(false)}
          />
          <UpdateFolder
            visible={updateFolderVisible}
            folder={updateFolderTarget}
            onCancel={() => {
              setUpdateFolderTarget(null)
              setUpdateFolderVisible(false)
            }}
          />
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Lightning Vault</Text>
            <TouchableOpacity onPress={handleSettings}>
              <Icon
                style={styles.headerIcon}
                name='ios-settings-sharp'
                size={18}
              />
            </TouchableOpacity>
          </View>
          {/* <SearchComponent onChange={(text) => setSearch(text)} /> */}
          <ScrollView>
            {/* {folders.length === 0 ? (
              // <View>
              <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>
                  There are no folders yet{'\n'}Click the button below to add
                </Text>
              </View>
            ) : ( */}
            <View style={{ marginTop: 12 }}>
              {sortFolder().map((item, index) => renderFolder(item, index))}
            </View>
            {/* )} */}
          </ScrollView>
          <View>
            <FAB
              buttonColor='red'
              iconTextColor='#FFFFFF'
              onClickAction={() => {
                setAddFolderVisible(true)
              }}
              iconTextComponent={<Icon name='ios-add' />}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 18
  },
  background: {
    backgroundColor: '#E8E8E8',
    flex: 1
  },
  header: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerIcon: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '600'
  },
  emptyItem: {
    marginTop: '90%'
  },
  emptyItemText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#343434'
  }
})

export default Home
