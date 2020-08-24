import { combineReducers } from 'redux'
import nav from './nav'
import data from './data'

const rootReducer = combineReducers({
  nav,
  data
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
