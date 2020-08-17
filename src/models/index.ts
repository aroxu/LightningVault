/* eslint-disable no-unused-vars */
export type Folder = {
  id: string
  name: string
  color: string
  icon: string
  list: string[]
}

export type Password = {
  id: string
  name: string
  type: PasswordType
}

export enum PasswordType {
  PASS_TYPE_NUMBER,
  PASS_TYPE_GENERAL
}
