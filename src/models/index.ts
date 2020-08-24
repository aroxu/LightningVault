/* eslint-disable no-unused-vars */
export type Folder = {
  id: string
  name: string
  color: string
  list: string[]
}

export type Password = {
  id: string
  text: string
  name: string
  password: string
}

export enum PasswordType {
  PASS_TYPE_NUMBER,
  PASS_TYPE_GENERAL
}
