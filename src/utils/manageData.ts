// eslint-disable-next-line no-unused-vars
import { Folder, Password } from '../models'
import AsyncStorage from '@react-native-community/async-storage'
import { v4 as uuid } from 'uuid'

export const getFolder = async (): Promise<Array<Folder>> => {
  const data = await AsyncStorage.getItem('folder')
  if (!data) return []
  const list: Array<Folder> = JSON.parse(data)
  return list
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
export const addFolder = async ({
  name,
  color,
  icon,
  list
}: Folder): Promise<Array<Folder>> => {
  let folderList: Array<Folder> = await getFolder()
  if (!folderList) folderList = []
  const id = uuid()
  folderList.push({
    id,
    name,
    color,
    icon,
    list
  })
  return setFolder(folderList)
}
export const getPasswordByFolder = async (
  folder: Folder
): Promise<Array<Password>> => {
  const result: Array<Password> = []
  const passwordList: Array<Password> = await getPassword()
  folder.list.forEach((id: string) => {
    const index = passwordList.findIndex((i) => i.id === id)
    result.push(passwordList[index])
  })
  return result
}
export const removeFolder = async (
  folderID: string
): Promise<Array<Folder>> => {
  const folderList: Array<Folder> = await getFolder()
  folderList.splice(
    folderList.findIndex((i) => i.id === folderID),
    1
  )
  AsyncStorage.setItem('folder', JSON.stringify(folderList))
  return setFolder(folderList)
}
export const addPassword = async ({
  name,
  type
}: Password): Promise<Array<Password>> => {
  const passwordList: Array<Password> = await getPassword()
  const id = uuid()
  passwordList.push({
    id,
    name,
    type
  })
  return setPassword(passwordList)
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
  if (targetIndex === -1) return folderList
  folderList[targetIndex].list.slice(
    folderList[targetIndex].list.indexOf(passwordID),
    1
  )
  return setFolder(folderList)
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
