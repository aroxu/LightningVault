import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 1,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8'
  },
  iconWrapper: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
    // backgroundColor: '#000000'
  },
  topTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 12
  },
  setPwdBtn: {},
  bottom: {
    height: '70%',
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignContent: 'center'
  },
  background: {
    backgroundColor: '#E8E8E8',
    height: '100%'
  }
})
