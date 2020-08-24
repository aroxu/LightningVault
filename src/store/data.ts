// eslint-disable-next-line no-unused-vars
import { Folder } from '../models'

const SET_FOLDER = 'data/SET_FOLDER' as const

export const setFolder = (folder: Array<Folder>) => ({
  type: SET_FOLDER,
  payload: folder
})

type DataAction = ReturnType<typeof setFolder>

type FolderState = {
  folder: Array<Folder>
}

const initialState: FolderState = {
  folder: []
}

const Data = (
  state: FolderState = initialState,
  action: DataAction
): FolderState => {
  switch (action.type) {
    case SET_FOLDER:
      return {
        ...state,
        folder: action.payload
      }
    default:
      return state
  }
}

export default Data
