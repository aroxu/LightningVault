import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    width: '50%',
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textInputStyle: {
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 7,
    borderWidth: 1,
    // borderColor: '#D50000',
    borderRadius: 6,
    width: '100%'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  }
})
