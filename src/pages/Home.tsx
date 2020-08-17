import React, { useEffect, useState, useCallback } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const handleChangSearch = useCallback((text) => setSearch(text), [search])

  const handleAdd = () => {
    console.warn('작동하니까 작작눌러')
  }

  useEffect(() => {})

  return (
    <View style={styles.background}>
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
              placeholder={'Enter Text'}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
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
