import React, { useState, useEffect } from 'react'
import { Modal, Text, TouchableOpacity, TextInput, View } from 'react-native'
// eslint-disable-next-line no-unused-vars
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Modal.style'

type props = {
  visible: boolean
  onCancel: (del: boolean) => void
}

const ConfirmReset: React.FC<props> = ({ visible, onCancel }: props) => {
  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onCancel(false)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <View style={styles.header}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>
                  Reset All
                </Text>
                <TouchableOpacity onPress={() => onCancel(false)}>
                  <Icon name='ios-close-outline' size={22} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.actions}>
              <View>
                <TouchableOpacity onPress={() => onCancel(true)}>
                  <Text style={{ color: '#ff0000' }}>Delete</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => onCancel(false)}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ConfirmReset
