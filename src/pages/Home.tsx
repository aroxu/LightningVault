import React, { useEffect, useState, useCallback, useRef } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { getFolder } from '../utils/manageData'

// eslint-disable-next-line no-unused-vars
import { Folder } from '../models'

import FolderItem from '../components/FolderItem'
import SlidingUpPanel from 'rn-sliding-up-panel'

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const [folders, setFolders] = useState<Array<Folder>>([])

  const addDataRef = useRef<SlidingUpPanel>(null)

  const handleChangSearch = useCallback((text) => setSearch(text), [search])

  useEffect(() => {
    const fetch = async () => {
      const folderList = await getFolder()
      setFolders(folderList)
    }
    fetch()
  }, [])

  const handleAdd = () => {
    if (!addDataRef.current) {
      return
    }
    addDataRef.current.show()
  }

  const renderFolder = ({
    item,
    index
  }: {
    item: Folder
    index: string | number
  }) => <FolderItem key={index} data={item} />

  return (
    <>
      <View style={styles.background}>
        <SlidingUpPanel ref={addDataRef} height={50}>
          <SafeAreaView
            style={{
              height: 50,
              width: '100%',
              backgroundColor: '#bedbe9'
            }}>
            <Text>asdf</Text>
          </SafeAreaView>
        </SlidingUpPanel>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Lightning Vault</Text>
            <TouchableOpacity onPress={handleAdd}>
              <FontAwesomeIcon
                style={styles.headerIcon}
                icon={faPlus}
                size={18}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchView}>
            <View style={styles.searchWrap}>
              <FontAwesomeIcon
                style={styles.searchIcon}
                icon={faSearch}
                size={18}
              />
              <TextInput
                style={styles.search}
                value={search}
                onChange={handleChangSearch}
                placeholder={'Search'}
              />
            </View>
          </View>
          <ScrollView>
            <FlatList
              style={{ marginTop: 12 }}
              renderItem={renderFolder}
              data={folders}
              numColumns={2}
            />
          </ScrollView>
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
    fontWeight: '600',
    letterSpacing: 1.1
  },
  searchView: {
    marginVertical: 25
  },
  searchWrap: {
    borderRadius: 20,
    backgroundColor: '#DFDFDF',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    marginLeft: 15
  },
  search: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 10,
    color: '#000000'
  }
})

export default Home
