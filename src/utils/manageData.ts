/* eslint-disable space-before-function-paren */
// eslint-disable-next-line no-unused-vars
import { Folder, Password, PasswordType } from '../models'
import AsyncStorage from '@react-native-community/async-storage'
const { v4: uuidv4 } = require('uuid')
uuidv4({
  rng: function mathRNG() {
    const rnds = new Array(16)
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000
      rnds[i] = (r >>> ((i & 0x03) << 3)) & 0xff
    }
    return rnds
  }
})
export const getFolder = async (): Promise<Array<Folder>> => {
  const data = await AsyncStorage.getItem('folder')
  if (!data) return []
  const list: Array<Folder> = JSON.parse(data)
  return list
}
export const getFolderByID = async (id: string): Promise<Folder> => {
  const folderList = await getFolder()
  const index = folderList.findIndex((i) => i.id === id)
  return folderList[index]
}
export const getPassword = async (): Promise<Array<Password>> => {
  const data = await AsyncStorage.getItem('password')
  if (!data) return []
  const list: Array<Password> = JSON.parse(data)
  return list
}
export const setFolder = (folderList: Array<Folder>): Array<Folder> => {
  AsyncStorage.setItem('folder', JSON.stringify(folderList))
  return folderList
}
export const setPassword = (passwordList: Array<Password>): Array<Password> => {
  AsyncStorage.setItem('password', JSON.stringify(passwordList))
  return passwordList
}
export const addFolder = async (
  name: string,
  color: string
): Promise<Array<Folder>> => {
  let folderList: Array<Folder> = await getFolder()
  if (!folderList) folderList = []
  const id = uuidv4()
  folderList.push({
    id,
    name,
    color,
    list: []
  })
  return setFolder(folderList)
}
export const getPasswordByFolder = async (
  list: string[]
): Promise<Array<Password>> => {
  const result: Array<Password> = []
  const passwordList: Array<Password> = await getPassword()
  list.forEach((id: string) => {
    const index = passwordList.findIndex((i) => i.id === id)
    result.push(passwordList[index])
  })
  return result
}
export const renameFolder = async (
  folderID: string,
  text: string
): Promise<Array<Folder>> => {
  const folderList: Array<Folder> = await getFolder()
  folderList[folderList.findIndex((i) => i.id === folderID)].name = text
  return setFolder(folderList)
}
export const removeFolder = async (
  folderID: string
): Promise<Array<Folder>> => {
  const folderList: Array<Folder> = await getFolder()
  folderList.splice(
    folderList.findIndex((i) => i.id === folderID),
    1
  )
  return setFolder(folderList)
}
export const addPassword = async (
  text: string,
  name: string,
  password: string
): Promise<string> => {
  const passwordList: Array<Password> = await getPassword()
  const id = uuidv4()
  passwordList.push({
    id,
    name,
    text,
    password
  })
  await setPassword(passwordList)
  return id
}
export const addPasswordToFolder = async (
  folderID: string,
  passwordID: string
): Promise<Array<Folder>> => {
  const folderList: Array<Folder> = await getFolder()
  folderList[folderList.findIndex((i) => i.id === folderID)].list.push(
    passwordID
  )
  return setFolder(folderList)
}
export const removePasswordFromFolder = async (
  folderID: string,
  passwordID: string
): Promise<Array<Folder>> => {
  const folderList: Array<Folder> = await getFolder()
  const targetIndex = folderList.findIndex((i) => i.id === folderID)
  const passwordIndex = folderList[targetIndex].list.indexOf(passwordID)
  if (targetIndex === -1) return folderList
  folderList[targetIndex].list.splice(passwordIndex, 1)
  return setFolder(folderList)
}
export const updatePassword = async (
  passwordID: string,
  textParm: string,
  nameParm: string,
  passwordParm: string
): Promise<Array<Password>> => {
  const passwordList: Array<Password> = await getPassword()
  const index = passwordList.findIndex((i) => i.id === passwordID)
  passwordList.splice(index, 1)
  passwordList.push({
    id: passwordID,
    name: nameParm,
    text: textParm,
    password: passwordParm
  })
  return setPassword(passwordList)
}
export const removePassword = async (
  passwordID: string
): Promise<Array<Password>> => {
  const passwordList: Array<Password> = await getPassword()
  if (!passwordList) return passwordList
  passwordList.splice(
    passwordList.findIndex((i) => i.id === passwordID),
    1
  )
  return setPassword(passwordList)
}
