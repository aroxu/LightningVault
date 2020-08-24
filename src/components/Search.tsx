import React, { useCallback, useState } from 'react'
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

type props = {
  onChange: (text: string) => void
}

const Search: React.FC<props> = ({ onChange }) => {
  const [text, setText] = useState('')
  const handleChangSearch = useCallback(
    (value) => {
      onChange(value)
      setText(value)
    },
    [text]
  )
  return (
    <View style={styles.searchView}>
      <View style={styles.searchWrap}>
        <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} size={18} />
        <TextInput
          style={styles.search}
          value={text}
          onChange={handleChangSearch}
          placeholder={'Search'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Search
