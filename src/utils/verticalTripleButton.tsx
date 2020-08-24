import { StyleSheet } from 'react-native'

export const MAX_DIALOG_BUTTONS_COUNT = 3

export const tripleButtonStyle = StyleSheet.create({
  buttonBox_vertical: {
    flexDirection: 'column',
    height: 46 * MAX_DIALOG_BUTTONS_COUNT
  },
  buttonBox__separator_vertical: {
    width: '100%',
    height: 0.5
  }
})
